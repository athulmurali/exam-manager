import {View} from "react-native";
import {FormInput, FormLabel, FormValidationMessage, Text} from "react-native-elements";
import React from "react";


const QuestionDescription=(props)=>{
    return <View>
                <FormLabel>Description</FormLabel>
                <Text multiline>
                    {props.descriptionText}
                </Text>
            </View>


}

export default QuestionDescription
