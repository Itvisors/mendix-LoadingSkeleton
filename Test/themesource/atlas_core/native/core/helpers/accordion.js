import { brand, background, fontDefaults, accordion } from "../../variables";
import merge from "./_functions/mergeobjects";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Accordion

    Default Class For Mendix Accordion Widget
========================================================================== */
export const accordionPrimary = {
    container: {
        borderColor: brand.primary,
        borderBottomWidth: 0,
    },
    group: {
        container: {
            borderWidth: 1,
            borderColor: brand.primary,
        },
        header: {
            container: {
                backgroundColor: brand.primary,
            },
            heading1: {
                color: fontDefaults.colorTitleLight,
            },
            heading2: {
                color: fontDefaults.colorTitleLight,
            },
            heading3: {
                color: fontDefaults.colorTitleLight,
            },
            heading4: {
                color: fontDefaults.colorTitleLight,
            },
            heading5: {
                color: fontDefaults.colorTitleLight,
            },
            heading6: {
                color: fontDefaults.colorTitleLight,
            },
            icon: {
                color: fontDefaults.colorTitleLight,
            },
        },
    },
};
export const accordionSecondary = {
    container: {
        borderColor: "#CED0D3",
        borderBottomWidth: 0,
    },
    group: {
        container: {
            borderWidth: 1,
            borderColor: "#CED0D3",
        },
        header: {
            container: {
                backgroundColor: background.primary,
            },
            heading1: {
                color: brand.primary,
            },
            heading2: {
                color: brand.primary,
            },
            heading3: {
                color: brand.primary,
            },
            heading4: {
                color: brand.primary,
            },
            heading5: {
                color: brand.primary,
            },
            heading6: {
                color: brand.primary,
            },
            icon: {
                color: brand.primary,
            },
        },
    },
};
export const accordionSuccess = merge(accordionPrimary, {
    container: {
        borderColor: brand.success,
    },
    group: {
        container: {
            borderColor: brand.success,
        },
        header: {
            container: {
                backgroundColor: brand.success,
            },
        },
    },
});
export const accordionWarning = merge(accordionPrimary, {
    container: {
        borderColor: brand.warning,
    },
    group: {
        container: {
            borderColor: brand.warning,
        },
        header: {
            container: {
                backgroundColor: brand.warning,
            },
        },
    },
});
export const accordionDanger = merge(accordionPrimary, {
    container: {
        borderColor: brand.danger,
    },
    group: {
        container: {
            borderColor: brand.danger,
        },
        header: {
            container: {
                backgroundColor: brand.danger,
            },
        },
    },
});
export const accordionLined = {
    container: {
        borderBottomWidth: 1,
    },
    group: {
        container: {
            borderWidth: 0,
            borderTopWidth: 1,
        },
    },
};
export const accordionDividerNone = {
    container: {
        borderWidth: 0,
        borderBottomWidth: 0,
    },
    group: {
        container: {
            borderWidth: 0,
            borderTopWidth: 0,
        },
    },
};
export const accordionCompact = {
    group: {
        header: {
            container: {
                paddingVertical: accordion.groupHeader.container.paddingVertical / 2,
                paddingHorizontal: accordion.groupHeader.container.paddingHorizontal / 2,
            },
        },
        content: {
            paddingTop: accordion.groupContent.paddingTop / 2,
            paddingBottom: accordion.groupContent.paddingBottom / 2,
            paddingHorizontal: accordion.groupContent.paddingHorizontal / 2,
        },
    },
};
