import React from "react";
import {Alert, ScrollView, View} from "react-native";
import QuestionHeader from "../QuestionHeader/QuestionHeader";
import QuestionParagraph from "../../elements/QuestionParagraph";
import AnswerContainer from "../../components/AnswerContainer";
import QuestionNavigationBar from "../QuestionNavigationBar";
import QuestionEditBar from "../QuestionEditBar";
import {questionEditBarStyle} from "../../styles/essayQuestionWidget";
import TextInput from '../../elements/EssayTextInput'
import EditableQuestionContainer from "../EditableQuestionContainer";
import EditableContainerUpdateNavBar from "../EditableContainerUpdateNavBar";
import EditModeToggleNavBar from "../EditModeToggleNavBar";

class  EssayQuestionWidget extends React.Component{
    static  navigationOptions ={
        title : "EssayQuestion",
    }
    constructor(props){
        super(props)
        this.state={
            editMode :  true
        }
    }




    handleOnUpdateSelected=()=>{

        Alert.alert("Saved successfully!")
        console.log("EditableQuestionContainer : faking save");

        this.props.navigation
            .navigate('ExamQuestionsList')
    }



    handleOnCancelSelected=()=>{

        console.log("EditableQuestionContainer : faking-  exit without save");

        Alert.alert(
            'Confirm Exit',
            'Exit to Exam Questions List without saving changes?',
            [
                {text: 'Cancel'
                    , style: 'cancel'},
                {text: 'OK',
                    onPress:() => this.props.navigation
                        .navigate('ExamQuestionsList')},
            ],
            { cancelable: false }
        )

    }


    handleToggleEditMode=(editMode)=>{
        this.setState({
            editMode : editMode
        })
    }
    render(){
        const questionText = "Longest paragraph in the world is not really easy to type. " +
            "That's why I keep the descriptions short"
        const questionIndex = 1
        const questionPoints = 100

        return <ScrollView         style ={{padding : 14}}>

            <EditModeToggleNavBar
                initialSwitchState={this.state.editMode}
                onToggle={this.handleToggleEditMode}
            />


            <EditableQuestionContainer editMode={this.state.editMode}/>

            <AnswerContainer style={{padding :20}}>
                <TextInput/>

            </AnswerContainer>


            {!!this.state.editMode  && <EditableContainerUpdateNavBar
                onUpdateSelected={ this.handleOnUpdateSelected}
                onCancelSelected={ this.handleOnCancelSelected}
            />}
            {/*<QuestionEditBar*/}
                {/*style ={questionEditBarStyle}/>*/}


            <QuestionNavigationBar
                style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}
                onUp
            />

        </ScrollView>
    }

}
export default EssayQuestionWidget
