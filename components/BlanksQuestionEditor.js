import {View} from "react-native";
import React from "react";
import {Text} from "react-native-elements";

export default  class BlanksQuestionEditor extends React.Component{
    constructor(props)
    {
        super(props)
    }
    componentDidMount(){
        console.log("BlanksQuestionEditor : Mounted")
    }

    render(){
        return <View>
                    <Text>Editor is here </Text>
                </View>}
}
