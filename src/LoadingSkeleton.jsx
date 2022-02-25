import { Component, createElement } from "react";

import "./ui/LoadingSkeleton.css";

export class LoadingSkeleton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInitialized: false
        };
    }

    componentDidUpdate() {
        if (this.state.isInitialized === false) {
            if (this.props.dataLoaded.status === "available") {
                // Set timeOut of 0 to make sure date the skeleton is rendered before showing the content.
                setTimeout(() => {
                    this.setState({ isInitialized: true });
                }, 0);
            }
        }
    }

    /**
     * Render the shapes and set the correct properties
     *
     * @returns list of skeleton shapes (divs)
     */
    renderShapes() {
        let key = 0;
        return this.props.skeletonShapes.map(shape => {
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

    render() {
        const dataLoaded = this.props.dataLoaded && this.props.dataLoaded.value;
        // Once the widget is mounted, show the content, such that flows are triggered
        let contentToShow;
        if (this.state.isInitialized) {
            // If date is not yet loaded, set class such that it is not shown
            const classNameContent = dataLoaded ? "" : "skeletonContentNotVisible";
            contentToShow = <div className={classNameContent}>{this.props.contentToLoad}</div>;
        }

        return (
            <div className={this.props.class}>
                {contentToShow}
                {dataLoaded ? undefined : this.renderShapes()}
            </div>
        );
    }
}
