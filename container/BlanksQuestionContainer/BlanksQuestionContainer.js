import React from "react";
import {View} from "react-native";
import BlanksQuestionEditor from "./BlanksQuestionEditor";
import BlanksWithTextBoxView from "./BlanksWithTextBoxView";

export default  class  BlanksQuestionContainer extends React.Component{
    constructor(props)
    {
        super(props)

        this.handleOnChangeText = this.handleOnChangeText.bind(this)

    }
    componentDidMount(){
        console.log("BlanksQuestionContainer : Mounted");
    }
    handleOnChangeText(text){
        console.log("BlanksQuestionContainer : handleOnChangeText")
        console.log("BlanksQuestionContainer : text new : " + text )
        this.props.onChangeTextWithBrackets(text)
    }

    render(){

        console.log("blanks props.......")
        console.log(this.props)

        return  <View  style={{padding: 15}}>

            {!!this.props.editMode &&
                <BlanksQuestionEditor text={this.props.blanksQuestionText} onChangeText={this.handleOnChangeText}/> }


                <BlanksWithTextBoxView blanksQuestionText={this.props.blanksQuestionText} />

        </View>

    }
}
