import React from "react";
import {FormLabel, Text} from "react-native-elements";
import {Alert, ScrollView, StyleSheet, View} from "react-native";
import EditableQuestionContainer from "../EditableQuestionContainer";
import EditModeToggleNavBar from "../EditModeToggleNavBar";
import EditableList from "../../components/EditableList";
import AddChoice from "../../components/AddChoice";
import EditableContainerUpdateNavBar from "../EditableContainerUpdateNavBar";
import QuestionService from "../../services/QuestionService";
import MCQ from "../../components/MCQ";
import RadioButtonList from "../../components/RadioButtonList";

const styles = StyleSheet.create({
    checkBoxContainer : {
        backgroundColor : 'transparent'
    },
    trueFalseSelectionContainerStyle :{
        padding :20
    },

    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin : 15

    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },

});


const questionService = QuestionService.instance;


export default class MultipleChoiceQuestionWidget extends React.Component{
    static navigationOptions={
        title : "Multiple Choice"
    }

    constructor(props){
        super(props)
        this.state={
            editMode :true,
            correctAnswerIndex : 1,
            tempNewChoiceText : "",

            question : {
                title : "",
                points : "0",
                description :"",
                options: [],
                correctOptionIndex: 0
            }

        }

    }

    componentDidMount(){
        console.log("MultipleChoiceQuestionWidget : Mounted");

        const selectedQuestion = this.props.navigation.getParam("question", false);
        if (selectedQuestion)
        {
            this.setState({question : {...selectedQuestion} })
        }
    }
    componentWillUnmount(){
        console.log("QuestionTrueFalseContainer : Unmounted");
    }

    handleToggleEditMode=(editMode)=>{
        this.setState({
            editMode : editMode
        })
    }

    handleCorrectAnswerSelection=(answerIndex)=>{
        console.log(this.state.question.options)
        this.setCorrectAnswer(answerIndex)
    }

    handleNewChoiceText=(text)=>{

        this.setState({
            tempNewChoiceText : text
        })

    }


    handleOnPressAdd=()=>{

        console.log("MCQ : handleOnPressAdd ------------------------");
        if(this.state.tempNewChoiceText !="")  this.setAddNewChoice()
    }
    handleDelete=(index)=>{
        console.log("Choice List Long Press...."+index)
        Alert.alert(
            'Confirm Delete',
            'Delete this choice?',
            [
                {text: 'Cancel'
                    , style: 'cancel'},
                {text: 'OK', onPress:() => this.deleteByIndex(index)},
            ],
            { cancelable: false }
        )
    }

    setAddNewChoice=()=>{

        const newOptions = this.state.question.options.concat(this.state.tempNewChoiceText )
        console.log("latest options list : ")
        console.log(newOptions)
        const newQuestionState = {...this.state.question}
        newQuestionState.options = newOptions;

        this.setState({
            question : newQuestionState,
            tempNewChoiceText : ""
        },()=>{console.log(this.state.question)})
    }
    setCorrectAnswer=(answerIndex)=>{
        console.log("AnswerINdex : " +answerIndex)


        const newData ={correctOptionIndex : answerIndex}
        console.log("Question :   onChangeQuestionText "  );
        const newQuestionData =  {...this.state.question,...newData}

        console.log("Question data after header change : ")
        this.setState({
            question : newQuestionData
        },()=>console.log(this.state))

    }


    deleteByIndex=(deleteIndex)=>{
        let newList = this.state.question.options.filter((element, index)=>{
            console.log( index + " :Index to be deleted :" + deleteIndex == index)
            return deleteIndex != index
        })
        console.log("List after deletion: ")
        console.log(newList)


        const newQuestionState = {...this.state.question}
        newQuestionState.options = newList;

        this.setState({
            question : newQuestionState,
            tempNewChoiceText : ""
        },()=>{console.log(this.state.question)})

    }

    handleQuestionHeaderChange=(data)=>{
        console.log("Question :   onChangeQuestionText "  );
        const newQuestionData =  {...this.state.question,...data}

        console.log("Question data after header change : ")
        this.setState({
            question : newQuestionData
        },()=>console.log(this.state))


    }



    handleOnUpdateSelected=()=>{
        const questionId = this.props.navigation.getParam("questionId",  -1000);
        const examId =  this.props.navigation.getParam("examId", -10000);


        const question = this.state.question

        if(!!question["id"])
        {
            console.log("Essay question : exists")
            console.log(question)


            questionService.deleteQuestion(question.id).
            then(res=>{
                console.log("question deleted by ID : " + question.id)


                delete question.id
                questionService.createMultipleChoiceExamQuestion(examId,question).then(res=>{
                    console.log("question created! ")
                    this.setState(
                        {
                            question: res
                        }
                    )
                    Alert.alert(" Updated question! ")
                    this.props.navigation
                        .navigate('ExamQuestionsList',{
                            examId : examId
                        })
                })
            })


        }


        else
        {

            questionService.createMultipleChoiceExamQuestion(examId,  this.state.question)
                .then(res=>{
                    console.log("Saved MCQ question successfully")
                    console.log(res);

                    Alert.alert("Saved successfully!")


                    this.props.navigation
                        .navigate('ExamQuestionsList',{
                            examId : examId
                        })
                })

        }



    }

    handleOnCancelSelected=()=>{

        const examId =  this.props.navigation.getParam("examId", -10000);

        Alert.alert(
            'Confirm Exit',
            'Exit to Exam Questions List without saving changes?',
            [
                {text: 'Cancel'
                    , style: 'cancel'},
                {text: 'OK',
                    onPress:() => this.props.navigation.navigate('ExamQuestionsList',
                        {
                            examId : examId
                        })}
            ],
            { cancelable: false }
        )

    }
    render(){



        console.log("QuestionMultipleCHocie : rendered")

        return <ScrollView style ={{padding : 11}}>

            {/*<ModalBox modalVisible={true}/>*/}

            <EditModeToggleNavBar
                initialSwitchState={this.state.editMode}
                onToggle={this.handleToggleEditMode}
            />
            <EditableQuestionContainer

                editMode                =   {this.state.editMode}


                onChangeQuestionText    =   {this.handleQuestionHeaderChange}

                title                   =   {this.state.question.title}
                points                  =   {this.state.question.points}
                description             =   {this.state.question.description}
            />


            {
                !!this.state.editMode &&
                <View>
                    <AddChoice onChangeText={this.handleNewChoiceText}
                               onPressAdd={this.handleOnPressAdd} />


                    <FormLabel>Select the correct answer</FormLabel>

                    <EditableList
                    elementsList ={this.state.question.options}
                    correctOptionIndex ={this.state.question.correctOptionIndex}

                    onSelectIndex={this.handleCorrectAnswerSelection}
                    onDelete={this.handleDelete}
                />
                    <FormLabel>Long Press to delete a option</FormLabel>


                    <EditableContainerUpdateNavBar
                        onUpdateSelected={ this.handleOnUpdateSelected}
                        onCancelSelected={ this.handleOnCancelSelected}
                    />
                </View>

            }



            {
                !this.state.editMode &&
                <View>
                    <FormLabel>Select one of the following choices</FormLabel>
                    <RadioButtonList style={{padding: 15}}
                                     options={!!this.state.question.options ?
                                         this.state.question.options : []}
                    />

                </View>

            }

        </ScrollView>
    }
}
