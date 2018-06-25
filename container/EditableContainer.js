import React from "react";
import {Text} from "react-native-elements";
import {StyleSheet, View} from "react-native";
import EditModeToggleNavBar from "./EditModeToggleNavBar";
import EditableQuestionHeaderContainer from "./QuestionHeader/EditableQuestionHeaderContainer";
import QuestionDescriptionContainer from "./QuestionDescription/QuestionDescriptionContainer";
import EditableContainerUpdateNavBar from "./EditableContainerUpdateNavBar";

const styles =StyleSheet.create({
editToggleBarStyle : {flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}

})

export default  class EditableContainer extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            editMode: true,
            questionTitle :  "Unnamed",
            questionType  :  ""
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
    render(){
        return <View>
            <Text h3>
                Editable Container
            </Text>
            <EditModeToggleNavBar initialSwitchState={this.state.editMode}
                                  onToggle={this.handleToggle}
                                  style={styles.editToggleBarStyle}
            />
            <EditableQuestionHeaderContainer editMode={this.state.editMode}/>
            <QuestionDescriptionContainer editMode={this.state.editMode}
                                         onChangeText=
                                             {(text)=>{this.setState({
                                                 description: text
                                             })}}
                                          descriptionText ={this.state.description}
                                             />
            {!!this.state.editMode  && <EditableContainerUpdateNavBar
                onUpdateSelected={ ()=>console.log("EditableContainer :Update Pressed")}
                onCancelSelected={ ()=>console.log("EditableContainer :CAncel Pressed")}
            />}
        </View>


    }


}

