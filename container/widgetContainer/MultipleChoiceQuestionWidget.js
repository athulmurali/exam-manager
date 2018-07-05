import React from "react";
import {FormLabel} from "react-native-elements";
import {Alert, ScrollView, StyleSheet, View} from "react-native";
import EditableQuestionContainer from "../EditableQuestionContainer";
import EditModeToggleNavBar from "../EditModeToggleNavBar";
import EditableList from "../../components/EditableList";
import AddChoice from "../../components/AddChoice";
import EditableContainerUpdateNavBar from "../EditableContainerUpdateNavBar";
import QuestionService from "../../services/QuestionService";

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
        console.log("QuestionTrueFalseContainer : Mounted");
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




        console.log("On uodate select.....")

        if(  questionId > -1 )
            console.log("MCQ  question : exists")

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



                </View>

            }


            {/*<QuestionNavigationBar*/}
                {/*style={questionNavigationBarStyle}/>*/}
            {/*<QuestionEditBar*/}
                {/*style ={questionEditBarStyle}*/}
                {/*onSelectAddQuestion ={()=>{*/}
                    {/*this.props*/}
                        {/*.navigation*/}
                        {/*.navigate('AddQuestionWidget')*/}
                {/*}}/>*/}



            <EditableContainerUpdateNavBar
                onUpdateSelected={ this.handleOnUpdateSelected}
                onCancelSelected={ this.handleOnCancelSelected}
            />
        </ScrollView>
    }
}
