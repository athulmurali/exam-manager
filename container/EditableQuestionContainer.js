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
            titleText : "",
            points : "0",
            description : ""
        }
    }

     handleToggle=(st)=>{
        console.log(" Editable container: toggle" + st);

        this.setState({
            editMode :st
        })

    }


    returnQuestionHeader=()=>{

        console.log("returnQuestionHeader");
        if ( this.props.onChangeQuestionText )

            this.props.onChangeQuestionText({
                    title :  this.state.titleText,
                    points : this.state.points,
                    description: this.state.description
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
        this.setState({titleText : text},  this.returnQuestionHeader)
        console.log(this.state)


    }

    handleChangePointsText=(points)=>{
        console.log("EditableContainer :change points text" + points);
        this.setPoints(points,         this.returnQuestionHeader)
    }

    handleDescriptionTextChange=(text)=>{
        console.log("handleDescriptionTextChange")

        this.setState({description : text},
            this.returnQuestionHeader)


    }

    setPoints=(points,callback)=>{ this.setState({points : points}, callback) }



    render(){
        return <View>

            <EditableQuestionHeaderContainer
                editMode            =           {this.props.editMode}
                titleText           =           {this.state.titleText}
                points              =           {this.state.points}

                onChangeTitleText   =           {this.handleTitleTextChange }
                onChangePointsText  =           {this.handleChangePointsText}
            />
            <QuestionDescriptionContainer
                editMode            =           {this.props.editMode}
                onChangeText        =           {this.handleDescriptionTextChange}
                descriptionText     =           {this.state.description}/>

        </View>


    }


}

