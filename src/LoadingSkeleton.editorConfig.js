import { hidePropertyIn } from "@mendix/pluggable-widgets-tools";

export function getProperties(values, defaultProperties) {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
    if (values.useSkeletonShapes) {
        hidePropertyIn(defaultProperties, values, "contentDuringLoad");
    } else {
        hidePropertyIn(defaultProperties, values, "skeletonShapes");
    }
    return defaultProperties;
}

// /**
//  * @param {Object} values
//  * @returns {Problem[]} returns a list of problems.
//  */
// export function check(values) {
//    /** @type {Problem[]} */
//    const errors = [];
//    // Add errors to the above array to throw errors in Studio and Studio Pro.

//    return errors;
// }
