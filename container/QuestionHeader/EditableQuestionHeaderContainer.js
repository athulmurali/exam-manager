import EditableContainer from "../common/EditableContainer";
import React from "react";
import EditableHeader from "./EditableHeader";
import QuestionHeader from "./QuestionHeader";

//Note : Try toggling the false
// Method discovered by Athul Muralidharan.

const EditableQuestionHeaderContainer=(props)=>{
    return <EditableContainer editMode={props.editMode}>
        <EditableHeader editable>EditableText</EditableHeader>
        <QuestionHeader/>

    </EditableContainer>
}

export default EditableQuestionHeaderContainer
