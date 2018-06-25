import {FormInput, FormLabel, FormValidationMessage} from "react-native-elements";
import React from "react";
import {View} from "react-native";

const EditableQuestionDescription=(props)=>{
    return <View>
    <FormLabel>Description</FormLabel>
    <FormInput

    text ={props.descriptionText}

    multiline
    onChangeText={
        text => {
        console.log(" new Description : " + text)
            props.onChangeText(text)
        // this.setState({description: text})
    }
}/>
    <FormValidationMessage>
        Description is required
    </FormValidationMessage>
    </View>


}

export default EditableQuestionDescription
