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
        fontSize: 28,
        lineHeight: 35,
        color: COLORS.primary,
        fontWeight: "bold",
        marginBottom: 30
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
        fontSize : 17,
        color: COLORS.gray,
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
        fontSize: 15,
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

    nextImageContent : {
        position: "absolute",
        bottom: 0,
        right: 0,
        justifyContent: "flex-end",
        margin: 35
    },

    nextImageBackGround  :{
        width: SIZES.width / 6,
        height: SIZES.width / 6,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.width / 12,
        backgroundColor: COLORS.fifth,
        borderWidth: 0.5,
        borderColor: COLORS.white
    },

    nextImage : {
        width: SIZES.width / 12,
        height: SIZES.width / 12,
        resizeMode: "contain",
        tintColor: COLORS.black
    },

    mainContent2 : {
        flexDirection: "row",
        backgroundColor: COLORS.powder,
        padding: 20,
        borderRadius: 15,
        justifyContent: "space-between",
    },




})
