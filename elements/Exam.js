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
    handlePress=(question, id)=>{
        console.log("Exam : Press")
        this.props.onPress(question, id)






    }
  render() {
    return(
      <View style={{padding: 15}}>
        <Text h2>Lists</Text>
        {this.props.questionsList.map( (question, index) => (
          <ListItem
            key={index}
            leftIcon={{name: question.icon}}
            subtitle={question.subtitle}
            title={question.title}
            onLongPress={()=>this.handleLongPress(question.id) }
            onPress={()=>this.handlePress(question,question.id)}
          />
        ))}
      </View>
    )
  }
}
