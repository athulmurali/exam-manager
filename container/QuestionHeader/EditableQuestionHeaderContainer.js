import EditableContainer from "../common/EditableContainer";
import {Text} from "react-native-elements";
import React from "react";
import EditableHeader from "./EditableHeader";
import QuestionHeader from "./QuestionHeader";

//Note : Try toggling the false
// Method discovered by Athul Muralidharan.

const EditableQuestionHeaderContainer=()=>{
    return <EditableContainer editMode={false}>
        <EditableHeader editable>EditableText</EditableHeader>
        <QuestionHeader/>

    </EditableContainer>
}

export default EditableQuestionHeaderContainer
