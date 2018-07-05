import {View} from "react-native";
import React from "react";
import EssayTextInput from '../../elements/EssayTextInput'
import {Text} from "react-native-elements";

export default  class BlanksQuestionEditor extends React.Component{
    constructor(props)
    {
        super(props)
        this.handleOnChangeText = this.handleOnChangeText.bind(this)
    }
    componentDidMount(){
        console.log("BlanksQuestionEditor : Mounted")
    }
    handleOnChangeText(text){

        console.log("BlanksQuestionEditor : handleOnChangeText invoked")
        console.log("BlanksQuestionEditor : text received =" +text)
        this.props.onChangeText(text)

    }

    render(){
        // console.log(this.props)

        return <View>
                    <Text >Enter the text below for fill in the banks</Text>
                    <EssayTextInput onChangeText={this.handleOnChangeText}/>
                </View>}
}
