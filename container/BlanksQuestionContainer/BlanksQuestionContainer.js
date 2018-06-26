import React from "react";
import {Text} from "react-native-elements";
import {View} from "react-native";
import BlanksQuestionEditor from "./BlanksQuestionEditor";
import EditableContainerUpdateNavBar from "../EditableContainerUpdateNavBar";
import BlanksParagraphView from "./BlanksParagraphView";

export default  class  BlanksQuestionContainer extends React.Component{
    constructor(props)
    {
        super(props)
        this.state ={
            editMode  : true,
            text      : this.props.blanksQuestionText,
            newText   : this.props.blanksQuestionText

        }

        this.handleOnChangeText = this.handleOnChangeText.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)


    }
    componentDidMount(){
        console.log("BlanksQuestionContainer : Mounted");
    }
    handleOnChangeText(text){
        console.log("BlanksQuestionContainer : handleOnChangeText")
        console.log("BlanksQuestionContainer : text new : " + text )
        this.setNewText(text)
    }

    setNewText(newText){
        this.setState((state)=>({
            newText : newText
        }))


    }

    handleUpdate(){
        console.log("BlanksQuestionContainer : Update Selected");

        this.setState((state)=>({
            text : state.newText,
            editMode : !state.editMode
        }))


    }
    handleCancel(){
        console.log("BlanksQuestionContainer : Cancel Selected");


    }

    render(){


        return <View>
            <Text >Blanks Question Container</Text>
            {
                !!this.state.editMode &&
                <EditableContainerUpdateNavBar
                    editMode = {this.state.editMode}
                    onUpdateSelected={this.handleUpdate}
                    onCancelSeletected={this.handleCancel}
                />
            }

            {!!this.state.editMode ?
               <BlanksQuestionEditor onChangeText={this.handleOnChangeText}/> :
                <BlanksParagraphView blanksQuestionText={this.state.newText} />
            }

        </View>

    }
}
