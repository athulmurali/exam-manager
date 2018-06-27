import {CheckBox} from "react-native-elements";
import {Alert, View} from "react-native";
import React from "react";


const ASCII_a = 97
export default class EditableList extends React.Component{
    constructor(props)
    {
      super(props)
        this.state={
            elementsList :this.props.elementsList,
            selectedIndex : 0
        }
    }


    handleOnPress=(index)=>{
        console.log("Pressed index : " + index.toString() )
        this.setSelectedIndex(index)
        this.props.onSelectIndex(index)


    }

    handleLongPress=(index)=>{
        console.log("Choice List Long Press...."+index)
        Alert.alert(
            'Confirm Delete',
            'Delete this exam?',
            [
                {text: 'Cancel'
                    , style: 'cancel'},
                {text: 'OK', onPress:() => this.deleteByIndex(index)},
            ],
            { cancelable: false }
        )
    }

    deleteByIndex=(deleteIndex)=>{
        let newList = this.state.elementsList.filter((element, index)=>{
            console.log( index + " :Index to be deleted :" + deleteIndex == index)
            return deleteIndex != index
        })
        console.log("List after deletion: ")
        console.log(newList)
        this.setState({
            elementsList : newList
        })
    }


    setSelectedIndex=(index)=>{
        this.setState({
            selectedIndex : index
        })

    }


    convertNumericIndexToAlphabetical=(index)=>(String.fromCharCode( ASCII_a + index))

    render(){
        Alert.alert("Correct AnswerIndex : " + this.state.selectedIndex)

        return <View>
        {
              this.state.elementsList.map(
                (element,index)=>{
                    return <CheckBox
                    title={  this.convertNumericIndexToAlphabetical(index) + ". " + element.title}
                    key = {index}

                    onPress={()=>{this.handleOnPress(index)}}
                    checked={this.state.selectedIndex === index}
                    onLongPress ={()=>this.handleLongPress(index)}

            /> })

        }

    </View>

    }


}
