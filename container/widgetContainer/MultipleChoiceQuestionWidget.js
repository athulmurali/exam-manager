import React from "react";
import {FormLabel, Icon} from "react-native-elements";
import {Alert, ScrollView, StyleSheet, TextInput, View} from "react-native";
import {questionEditBarStyle} from "../../styles/essayQuestionWidget";
import QuestionNavigationBar from "../QuestionNavigationBar";
import QuestionEditBar from "../QuestionEditBar";
import {questionNavigationBarStyle} from "../../styles/QuestionCommonStyle";
import AddQuestionWidget from "../widgetContainer/AddQuestionWidget";
import EditableQuestionContainer from "../EditableQuestionContainer";
import EditModeToggleNavBar from "../EditModeToggleNavBar";
import EditableList from "../../components/EditableList";
import AddChoice from "../../components/AddChoice";

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




export default class MultipleChoiceQuestionWidget extends React.Component{
    static navigationOptions={
        title : "Multiple Choice"
    }

    constructor(props){
        super(props)
        this.state={
            answer : true,
            editMode :true,


            correctAnswerIndex : 1,
            answersList:[],
            tempNewChoiceText : "",


            elementsList: [
                {
                    id : 1,
                    title :"title1"
                },

                {
                    id : 2,
                    title :"title2"
                },

                {
                    id : 3,
                    title :"title3"
                }

            ]

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
        this.setCorrectAnswer(answerIndex)
    }

    handleNewChoiceText=(text)=>{

        this.setState({
            tempNewChoiceText : text
        })

    }


    handleOnPressAdd=()=>{

        console.log("MCQ : handleOnPressAdd");
        if(this.state.tempNewChoiceText !="")  this.setAddNewChoice()
    }
    handleDelete=(index)=>{
        console.log("Choice List Long Press...."+index)
        Alert.alert(
            'Confirm Delete',
            'Delete this exam?',
            [
                {text: 'Cancel'
                    , style: 'cancel'},
                {text: 'OK', onPress:() => this.deleteByIndex(index)},
            ],
            { cancelable: false }
        )
    }

    setAddNewChoice=()=>{
        this.setState({
            elementsList : this.state.elementsList.concat({title : this.state.tempNewChoiceText })
        },()=>{console.log(this.state.elementsList)})
    }
    setCorrectAnswer=(answerIndex)=>{
        this.setState(
            {
                correctAnswerIndex :  answerIndex

            }
        )
    }


    deleteByIndex=(deleteIndex)=>{
        let newList = this.state.elementsList.filter((element, index)=>{
            console.log( index + " :Index to be deleted :" + deleteIndex == index)
            return deleteIndex != index
        })
        console.log("List after deletion: ")
        console.log(newList)
        this.setState({
            elementsList : newList
        })
    }



    render(){

        const questionText = "Longest paragraph in the world is not really easy to type. " +
            "That's why I keep the descriptions short"
        const questionIndex = 1
        const questionPoints = 100

        console.log("QuestionTrueFalseContainer : rendered")

        return <ScrollView style ={{padding : 11}}>

            {/*<ModalBox modalVisible={true}/>*/}

            <EditModeToggleNavBar
                initialSwitchState={this.state.editMode}
                onToggle={this.handleToggleEditMode}
            />

            <EditableQuestionContainer
                editMode = {this.state.editMode}/>



            {
                !!this.state.editMode &&
                <View>
                    <AddChoice onChangeText={this.handleNewChoiceText}
                               onPressAdd={this.handleOnPressAdd} />


                    <FormLabel>Select the correct answer</FormLabel>

                    <EditableList
                    elementsList ={this.state.elementsList}

                    onSelectIndex={this.handleCorrectAnswerSelection}
                    onDelete={this.handleDelete}
                />
                    <FormLabel>Long Press to delete a option</FormLabel>


                </View>

            }


            <QuestionNavigationBar
                style={questionNavigationBarStyle}/>
            <QuestionEditBar
                style ={questionEditBarStyle}
                onSelectAddQuestion ={()=>{
                    this.props
                        .navigation
                        .navigate('AddQuestionWidget')
                }}/>
        </ScrollView>
    }
}
