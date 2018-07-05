import React from "react";
import {View} from "react-native";
import EditableQuestionHeaderContainer from "./QuestionHeader/EditableQuestionHeaderContainer";
import QuestionDescriptionContainer from "./QuestionDescription/QuestionDescriptionContainer";


export default  class EditableQuestionContainer extends React.Component{

    static  navigationOptions={
        title : "EditableQuestionContainer"
    }

    constructor(props)
    {
        super(props)
        this.state={
            editMode: true,
            title : this.props.title,
            points :   this.props.points.toString(),
            description : this.props.description
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
                    title :  this.state.title,
                    points : this.state.points,
                    description: this.state.description
                })
    }


    componentWillReceiveProps(newProps){
        console.log("................")
        this.setState ({
            title : newProps.title,
            points :   newProps.points.toString(),
            description : newProps.description

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
        this.setState({title : text},  this.returnQuestionHeader)
        // console.log(this.state)


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
                titleText           =           {this.state.title}
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

