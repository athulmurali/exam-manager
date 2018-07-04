import React, {Component} from 'react'
import {View,Alert} from 'react-native'
import {ListItem, Text} from 'react-native-elements'
import AddQuestionWidget from "../container/widgetContainer/AddQuestionWidget";


export default class Exam extends Component {
    constructor(props){
        super(props)

    }

    handleLongPress=(id)=>{
        console.log("Exam : LongPress")
        this.props.onLongPress(id)
    }
    handlePress=(exam, id)=>{
        console.log("Exam : Press")
        this.props.onPress(exam, id)
    }
  render() {
    return(
      <View style={{padding: 15}}>
          {
            console.log(this.props.examsList)
          }
        <Text h2>Lists</Text>
        {this.props.examsList.map( (exam, index) => (
          <ListItem
            key={index}
            leftIcon={{name: exam.icon}}
            subtitle={exam.subtitle}
            title={exam.title}
            onLongPress={()=>this.handleLongPress(exam.id) }
            onPress={()=>this.handlePress(exam,exam.id)}
          />
        ))}
      </View>
    )
  }
}
