const colorNames = {
    black: "#252525",
    mineshaftLighter: "#313131",
    tundora: "#414141",
    lightGray: "#6e7e9144",
    primaryAlpha: "#0366d836",
    dodgerBlueAlpha: "#2188FF56",
    blumine: "#1F5189",
    scienceBlue: "#0366D6",
    slateGray: "#6E7E91",
    shipCove: "#6D93BE",
    dodgerBlue: "#2188FF",
    anakiwa: "#8CC2FF",
    tropicalBlue: "#CDE0F7",
    porcelain: "#F2F3F4",
    mercury: "#e5e5e5",
    whiteLilac: "#FBFBFE",
    white: "#FFFFFF",
};

const device = {
    breakpoints: {
        phone: "767px",
        tablet: "991px",
        laptop: "1200px",
    },
};

export const themeLight = {
    ...device,
    colors: {
        primary: colorNames.scienceBlue,
        textPrimary: colorNames.black,
        site: {
            background: colorNames.whiteLilac,
            text: colorNames.slateGray,
        },
        themeSwitch: {
            background: colorNames.white,
            icon: colorNames.white,
            iconBox: colorNames.slateGray,
            border: colorNames.slateGray,
        },
        buttonLink: {
            text: colorNames.white,
            shadow: colorNames.anakiwa,
        },
        headerLine: colorNames.mercury,
        boxBackground: colorNames.white,
        boxShadow: colorNames.lightGray,
    },

};

export const themeDark = {
    ...device,
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        site: {
            background: colorNames.black,
            text: colorNames.white,
        },
        themeSwitch: {
            background: colorNames.black,
            icon: colorNames.black,
            iconBox: colorNames.white,
            border: colorNames.white,
        },
        buttonLink: {
            text: colorNames.white,
            shadow: colorNames.shipCove,
        },
        headerLine: colorNames.tundora,
        boxBackground: colorNames.mineshaftLighter,
        boxShadow: "none",
    },
};
