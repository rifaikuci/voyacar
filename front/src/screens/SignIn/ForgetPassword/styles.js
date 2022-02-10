import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../../../constants";

export default StyleSheet.create({

    content: {
        margin: 20,
    },

    imageBack: {
        width: 30,
        height: 30,
        tintColor: COLORS.secondary
    },

    headerContent: {
        marginTop: 30
    },

    headerText: {
        fontSize: 27,
        lineHeight: 36,
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
    },

    mainContent : {
        flexDirection: "row",
        backgroundColor: COLORS.powder,
        padding: 20,
        borderRadius: 15,
        justifyContent: "space-between",
        marginVertical: 25
    },

    textInput : {
        fontSize: 17
    },

    imageClose : {
        width: 15,
        height: 15,
        marginRight: 2,
        tintColor: COLORS.primary
    },

    checkBoxLabelContent : {
        marginTop: 15,
        marginRight: 5
    },

    checkBoxLabel : {
        fontSize: 18,
        lineHeight: 25,
        color: COLORS.primary,
        fontWeight: "bold",
    },

    checkBoxContent : {
        marginTop: 30,
        marginLeft: 5,
    },

    checkBox : {
        width: 20,
        height: 20,
        marginTop: 5
    },

    infoContent: {
        marginTop: 30
    },

    nextImageContent : {
        position: "absolute",
        bottom: 0,
        margin: 35,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: SIZES.width / 3
    },

    nextImageBackGround  :{
        width: SIZES.width / 3,
        height: SIZES.width / 6,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.width / 12,
        backgroundColor: COLORS.fourth,
        borderWidth: 0.5,
        borderColor: COLORS.white,

    },

    submitText : {
        fontWeight: "600",
        color: COLORS.white,
        fontSize :16
    }

})
