import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const SIZES = {
    base: 8,
    font: 14,
    padding: 10,
    padding2: 12,
    width,
    height
};

export const COLORS = {
    primary: "#00487c",
    secondary: "#4bb3fd",
    thirthly: "#3e6680",
    fourth: "#0496ff",
    fifth: "#027bce",
    white: "#fff",
    black: "#fff",
    cream: "#FFE6CD",
    powder : "#E9E0D2",
    powder2 : "#F9E5BC",

    transparent: "transparent"
};

const appTheme = { COLORS, SIZES };

export default appTheme;
