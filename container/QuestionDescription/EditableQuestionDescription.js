import {FormInput, FormLabel, FormValidationMessage} from "react-native-elements";
import React from "react";
import {View} from "react-native";
import {MAX_TITLE_LENGTH} from "../QuestionHeader/EditableHeader";

const EditableQuestionDescription=(props)=>{
    return <View>
    <FormLabel>Description</FormLabel>
    <FormInput

    value ={props.descriptionText}

    multiline
    onChangeText={
        text => {
        console.log(" new Description : " + text)
            props.onChangeText(text)
        // this.setState({description: text})i
    }
}/>

        {props.descriptionText.length < 1 &&

        <FormValidationMessage>
        Description is required
    </FormValidationMessage> }
    </View>


}

export default EditableQuestionDescription
