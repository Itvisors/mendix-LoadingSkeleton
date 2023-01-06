import { createElement, useState } from "react";

import "./ui/LoadingSkeleton.css";

export function LoadingSkeleton (props) {

    const [isInitialized, setisInitialized] = useState(false);

    /**
     * Render the shapes and set the correct properties
     *
     * @returns list of skeleton shapes (divs)
     */
    const renderShapes = () => {
        let key = 0;
        return props.skeletonShapes.map(shape => {
            key++;
            let className = shape.shapeClass + " skeletonShape ";
            if (shape.skeletonShape === "rectangle") {
                className += "skeletonRectangle";
            } else {
                className += "skeletonCircle";
            }
            const width = shape.shapeWidth + (shape.shapeWidthPixels ? "px" : "%");
            const height = shape.shapeHeight + (shape.shapeHeightPixels ? "px" : "%");
            return <div key={key} className={className} style={{ width: width, height: height }}></div>;
        });
    }

    const dataLoaded = props.dataLoaded && props.dataLoaded.value;
    // Once the widget is mounted, show the content, such that flows are triggered
    let contentToShow;
    if (isInitialized) {
        // If date is not yet loaded, set class such that it is not shown
        const classNameContent = dataLoaded ? "" : "skeletonContentNotVisible";
        contentToShow = <div className={classNameContent}>{props.contentToLoad}</div>;
    } else {
        if (props.dataLoaded.status === "available") {
            // Set timeOut to make sure date the skeleton is rendered before showing the content.
            setTimeout(() => {
                setisInitialized( true );
            }, props.delay);
        }
    }

    return (
        <div className={props.class}>
            {contentToShow}
            {dataLoaded ? undefined : renderShapes()}
        </div>
    );
}
