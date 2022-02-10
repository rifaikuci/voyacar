import {StyleSheet} from "react-native";
import {COLORS} from "../../../constants";

export default StyleSheet.create({

    main: {
        flex: 1,
    },

    contentTopBody: {
        flex: 4
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: "cover"
    },

    contentBottomBody: {
        flex: 2,
    },

    mainBody: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        height: '100%'
    },

    mainTextContent: {
        flex: 2,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },

    mainText: {
        fontSize: 25,
        lineHeight: 35,
        color: COLORS.primary,
        fontWeight: "bold",
        textAlign: "center"
    },

    signUpBody: {
        flex: 1,
        width: '80%',
    },

    signUpContent: {
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: 40
    },

    signUpText: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "600",
        padding: 10,
    },

    signInBody: {
        flex: 1,
    },

    signInText: {
        color: COLORS.secondary,
        fontSize: 14,
        fontWeight: "600"
    }

})
