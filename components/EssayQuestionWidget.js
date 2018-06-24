import React from "react";
import {View} from "react-native";
import {Text} from "react-native-elements";
import QuestionHeader from "../elements/QuestionHeader";
import QuestionParagraph from "../elements/QuestionParagraph";
import AnswerContainer from "./AnswerContainer";

class  EssayQuestionWidget extends React.Component{
    static  navigationOptions ={
        title : "EssayQuestion"
    }
    constructor(props){
        super(props)



    }

    render(){
        const questionText = "Longest paragraph in the world is not really easy to type. " +
            "That's why I keep the descriptions short"
        const questionIndex = 1
        const questionPoints = 100

        return <View
        style ={{padding : 14}}>
            <QuestionHeader questionIndex ={questionIndex}    points ={questionPoints}/>
            <QuestionParagraph questionText = {questionText}  style={{padding :20}}/>
            <AnswerContainer style={{padding :20}}>
                <Text>Hola1</Text>
                <Text>Hola2</Text>
                <Text>Hola3</Text>
            </AnswerContainer>



        </View>
    }

}
export default EssayQuestionWidget
