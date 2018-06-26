import {CheckBox} from "react-native-elements";
import {Alert, View} from "react-native";
import React from "react";




const elementsList=[
    {
        id : 1,
        title :"title1"
    },

    {
        id : 2,
        title :"title2"
    },

    {
        id : 3,
        title :"title3"
    }

]

export default class EditableList extends React.Component{
    constructor(props)
    {
      super(props)
        this.state={
          elementsList :elementsList
        }
    }




    handleLongPress=(id)=>{
        console.log("Choice List Long Press...."+id)
        Alert.alert(
            'Confirm Delete',
            'Delete this exam?',
            [
                {text: 'Cancel'
                    , style: 'cancel'},
                {text: 'OK', onPress:() => this.deleteById(id)},
            ],
            { cancelable: false }
        )
    }




    deleteById=(id)=>{
        let newList = this.state.elementsList.filter((element)=>{
            console.log( element.id != id)
            return element.id != id
        })
        console.log(newList)
        this.setState({
            elementsList : newList
        })
    }




    render(){
    return <View>
        {
              this.state.elementsList.map(
                (element,index)=>{
                    return <CheckBox
                    onPress={() => this.setState({selectedId: element.id})}
                    checked={this.state.selectedId == element.id}
                    onLongPress ={()=>this.handleLongPress(element.id)}
                    title={(index+1).toString() + " " + element.title}
                    key = {index}
            /> })

        }

    </View>

    }


}
