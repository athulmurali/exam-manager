import {TextInput, View} from "react-native";
import {Text} from "react-native-elements";
import React from "react";
import {fillInTheBlankBox} from "../../styles/FillInTheBlankStyle";

export default  class BlanksParagraphView extends  React.Component{

    textToTextBoxedText=(givenText)=>{

        let listWithBlanks=[]
        let tempWord = ""
        let tempBlank = ""
        let tempStr= ""
        for (var i = 0; i < givenText.length; i++) {

            console.log(givenText.charAt(i));

            const currentChar = givenText.charAt(i)
            if (currentChar == "[" )
            {
                console.log("current open");

                if (tempWord !=""){
                    const tempDict =
                        {
                        type: "word",
                        value : tempWord
                        }
                    console.log(tempDict)

                    listWithBlanks.push(tempDict)
                }
                tempWord = ""
                continue;
            }

             else if (currentChar == "]")
             {

                if (tempWord !=""){
                    const tempDict =
                        {
                            type: "blank",
                            value : tempWord
                        }
                    console.log(tempDict)

                    listWithBlanks.push(tempDict)
                }

                tempWord = ""
                 continue;


            }

            else{
                tempWord = tempWord + givenText.charAt(i)

                if (i == givenText.length -1){
                    console.log("last char")
                    const tempDict =
                        {
                            type: "word",
                            value : tempWord
                        }
                    console.log(tempDict)

                    listWithBlanks.push(tempDict)
                }

            }

        }

        console.log("list with blanks :");

        console.log(listWithBlanks);
        return listWithBlanks
    }

    constructor(props)
    {
        super(props)

    }
    componentDidMount(){
        console.log("Blanks container")
    }

    returnTextAndBlank=(givenText)=>{

        return  this.textToTextBoxedText(givenText).map((word,index)=>{
            return (word.type == "word") ?
                 <Text key ={index} h4> {word.value}</Text> :

                <TextInput key ={index} style={fillInTheBlankBox}> {word.value}</TextInput>
        })

    }
    render(){
        const givenText = this.props.blanksQuestionText.trim()
        return <View  style={{padding: 15}}>
                <Text h4>Blanks Container </Text>
                <View  style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.returnTextAndBlank(givenText)}
                </View>


            </View>
    }

}
