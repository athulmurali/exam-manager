import React from "react";
import {Text} from "react-native-elements";
import {StyleSheet, View,Alert} from "react-native";
import EditModeToggleNavBar from "./EditModeToggleNavBar";
import EditableQuestionHeaderContainer from "./QuestionHeader/EditableQuestionHeaderContainer";
import QuestionDescriptionContainer from "./QuestionDescription/QuestionDescriptionContainer";
import EditableContainerUpdateNavBar from "./EditableContainerUpdateNavBar";



export default  class EditableQuestionContainer extends React.Component{

    static  navigationOptions={
        title : "EditableQuestionContainer"
    }

    constructor(props)
    {
        super(props)
        this.state={
            editMode: true,
            questionTitle :  "Unnamed",
            questionType  :  "",
            titleText : "",
            points : "0"
        }
    }

     handleToggle=(st)=>{
        console.log(" Editable container: toggle" + st);

        this.setState({
            editMode :st
        })

    }



    componentDidMount(){
        console.log("EditableContainer : Mounted")
    }
    componentWillUnmount(){
        console.log("EditableContainer : Unmounted")

    }


    handleTitleTextChange=(text)=>{
        console.log("asdsdsds")
        this.setState({titleText : text})
        console.log(this.state)
    }

    handleChangePointsText=(points)=>{
        console.log("EditableContainer :change points text" + points);
        this.setPoints(points)
    }

    setPoints=(points)=>{this.setState({points : points})}



    render(){
        return <View>

            <EditableQuestionHeaderContainer
                editMode            =           {this.props.editMode}
                titleText           =           {this.state.titleText}
                points              =           {this.state.points}

                onChangeTitleText   =           {this.handleTitleTextChange }
                onChangePointsText  =           {this.handleChangePointsText}
            />
            <QuestionDescriptionContainer editMode={this.props.editMode}
                                         onChangeText=
                                             {(text)=>{this.setState({
                                                 description: text
                                             })}}
                                          descriptionText ={this.state.description}
                                             />

        </View>


    }


}

