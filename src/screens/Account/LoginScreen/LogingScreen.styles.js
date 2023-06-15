import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal:30,
    },
    image:{
        resizeMode: "contain",
        height: 200,
        width: "100%",
        marginBottom:40,
        marginTop:40
    },
    content:{
        marginHorizontal: 40,
        marginTop: 20,
    },
    title:{
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
        marginTop: -20
    },
    description:{
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 10,
        textAlign: "center",
        color: "#ee3535"  
    },
    register:{
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        marginHorizontal:10,
    }
});