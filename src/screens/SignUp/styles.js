import {StyleSheet} from "react-native";
import {COLORS} from "../../../constants";

export default StyleSheet.create({

    content: {
        margin: 30,
    },

    imageClose: {
        width: 30,
        height: 30,
        tintColor: COLORS.secondary
    },

    headerContent: {
        marginTop: 30
    },

    headerText: {
        fontSize: 30,
        lineHeight: 40,
        color: COLORS.primary,
        fontWeight: "bold",
    },

    sectionContent: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    subSection: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    subImageLeft: {
        width: 30,
        height: 30,
        resizeMode: "cover",
        marginRight: 10
    },

    subImageRight: {
        width: 30,
        height: 30,
        resizeMode: "cover",
        marginRight: -20
    },

    subContentText :{
        marginTop: 3,

    },

    subText : {
        fontSize : 18,
        color: COLORS.primary,
        fontWeight: '600'
    },

    divider : {
        borderColor: "rgba(105, 105, 105, 0.3)",
        borderWidth: 1,
        marginTop: 30
    },

    signInLabel: {
        fontSize: 20,
        lineHeight: 30,
        color: COLORS.primary,
        fontWeight: "bold",
    },

    signInText: {
        color: COLORS.secondary,
        fontSize: 16,
        fontWeight: "600"
    },

    bodyContent: {
        marginTop: 20
    },

    infoText : {
        fontSize: 12,
        color: "rgba(105, 105, 105, 1)"
    }

})
