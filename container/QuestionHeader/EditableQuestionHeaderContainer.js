import EditableContainer from "../common/EditableContainer";
import React from "react";
import EditableHeader from "./EditableHeader";
import QuestionHeader from "./QuestionHeader";

//Note : Try toggling the false
// Method discovered by Athul Muralidharan.

const EditableQuestionHeaderContainer=(props)=>{
    console.log("EditableQuestionContainer : rendered")
    console.log(props)
    return <EditableContainer editMode={props.editMode}  >
                <EditableHeader editable
                        points={props.points}
                        titleText={props.titleText}
                        onChangeText={props.onChangeTitleText}
                        onChangePointsText ={props.onChangePointsText}>
            EditableText
        </EditableHeader>
        <QuestionHeader titleText={props.titleText} points ={props.points}/>
    </EditableContainer>
}

export default EditableQuestionHeaderContainer
