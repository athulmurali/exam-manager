import React from "react";
import {View} from "react-native";
import QuestionHeader from "../QuestionHeader/QuestionHeader";
import QuestionParagraph from "../../elements/QuestionParagraph";
import AnswerContainer from "../../components/AnswerContainer";
import QuestionNavigationBar from "../QuestionNavigationBar";
import QuestionEditBar from "../QuestionEditBar";
import {questionEditBarStyle} from "../../styles/essayQuestionWidget";
import TextInput from '../../elements/EssayTextInput'

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
            <QuestionHeader questionIndex ={questionIndex}   questionName={"sasas"} points ={questionPoints}/>
            <QuestionParagraph questionText = {questionText}  style={{padding :20}}/>
            <AnswerContainer style={{padding :20}}>
                <TextInput/>

            </AnswerContainer>
            <QuestionNavigationBar
                style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}/>
            <QuestionEditBar
                style ={questionEditBarStyle}/>

        </View>
    }

}
export default EssayQuestionWidget
