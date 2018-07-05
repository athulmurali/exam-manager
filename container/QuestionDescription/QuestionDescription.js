import {View} from "react-native";
import {FormInput, FormLabel, FormValidationMessage, Text} from "react-native-elements";
import React from "react";


const QuestionDescription=(props)=>{
    return <View>
                <FormLabel>Description</FormLabel>
                <View style={{padding: 15}}>
                    <Text multiline>
                        {props.descriptionText}
                    </Text>
                 </View>
            </View>


}

export default QuestionDescription
