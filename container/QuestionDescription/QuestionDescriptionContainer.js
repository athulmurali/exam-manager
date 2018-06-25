import React from "react";
import EditableContainer from "../common/EditableContainer";
import EditableQuestionDescription from "./EditableQuestionDescription";
import QuestionDescription from "./QuestionDescription";

const QuestionDescriptionContainer=(props)=>{
    console.log(props)
 return <EditableContainer editMode ={props.editMode}>
     <EditableQuestionDescription editable
                                  descriptionText ={props.descriptionText}
                                  onChangeText={props.onChangeText}/>

         <QuestionDescription
             descriptionText ={props.descriptionText} />


 </EditableContainer>
}

export default QuestionDescriptionContainer
