import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:10
    },
    cabecalho: {
        fontSize:20,
        fontWeight:'bold',
        margin:10
    },
    label: {
        fontSize:10,
        fontWeight:'bold',
        margin:5
    },
    botao: {
        width:'60%',
        margin:10,
        backgroundColor:'lightpink'
    },
    input: {
        height:45,
        width:'90%',
        borderColor:'black',
        borderWidth:3,
        paddingLeft:20,
        margin:10
    }
})

export { estilos }