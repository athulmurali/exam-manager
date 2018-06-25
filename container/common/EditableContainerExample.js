import EditableContainer from "./EditableContainer";
import {Text} from "react-native-elements";
import React from "react";

//Note : Try toggling the false
// Method discovered by Athul Muralidharan.

const EditableContainerExample=()=>{
    <EditableContainer editMode={false}>
        <Text editable>EditableText</Text>
        <Text>StaticText</Text>
    </EditableContainer>
}

export default EditableContainerExample
