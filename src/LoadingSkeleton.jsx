import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/LoadingSkeleton.css";

export class LoadingSkeleton extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
