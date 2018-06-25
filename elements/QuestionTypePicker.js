import React from 'react'
import {Picker, Text, View} from 'react-native'



class QuestionTypePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionType: "Not selected"
    }

    this.handleSelectType = this.handleSelectType.bind(this)
  }


  handleSelectType(itemValue,itemIndex){
        console.log("QuestionTypePicker :handle type")
        this.setState({questionType: itemValue, selectedIndex : itemIndex})
        this.props.onSelectType(itemValue,itemValue)
  }


  render() {

      console.log("QuestionTypePicker :rendered:");
    return(

      <View style ={this.props.style}>
        <Picker
            onValueChange={
                this.handleSelectType}
            selectedValue={this.state.questionType}>

            {
                this.props.optionsList.map((option,index)=>{
                    console.log(index)
                    return  <Picker.Item key ={index} value={option.value} label={option.label} />
                })
            }


        </Picker>
        {/*<Text>{this.state.questionType}</Text>*/}
      </View>
    )
  }
}

export default QuestionTypePicker
