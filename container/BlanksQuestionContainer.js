import React from "react";
import {Text} from "react-native-elements";
import {View} from "react-native";
import BlanksContainer from "../components/BlanksContainer";
import BlanksQuestionEditor from "../components/BlanksQuestionEditor";

export default  class  BlanksQuestionContainer extends React.Component{
    constructor(props)
    {
        super(props)
    }
    componentDidMount(){
        console.log("BlanksQuestionContainer : Mounted");
    }

    render(){
        const editMode = true;
        const text  = "abssddcdcdc kskd ksd skd s is  asasasasass [two=two] not really [one=1] abcd [1=1]"
        return <View>
            <Text h4>Blanks Question Container</Text>
            {!!editMode ?
               <BlanksQuestionEditor/> :
                <BlanksContainer blanksQuestionText={text } />
            }

        </View>

    }
}
