import {TextInput, View} from "react-native";
import {Text} from "react-native-elements";
import React from "react";
import {fillInTheBlankBox} from "../../styles/FillInTheBlankStyle";
import BlanksUtil from "./BlanksUtil";

export default  class BlanksWithTextBoxView extends  React.Component{



    constructor(props)
    {
        super(props)

    }
    componentDidMount(){
        console.log("Blanks Paragraph view : mounted")
    }

    returnTextAndBlank=(givenText)=>{

        return  BlanksUtil.textToTextBoxedText(givenText).map((word,index)=>{
            return (word.type == "word") ?
                 <Text key ={index} h4> {word.value}</Text> :

                <TextInput key ={index}
                           style={fillInTheBlankBox}
                           placeholder='ANSWER'>

                </TextInput>
        })

    }
    render(){
        const givenText = this.props.blanksQuestionText.trim()
        return <View  style={{padding: 15}}>
                <View  style={{flexDirection: 'row', flexWrap: 'wrap', padding: 15}}>

                    {this.returnTextAndBlank(givenText)}
                </View>


            </View>
    }

}
