import React, {Component} from 'react'
import {Alert} from 'react-native'
import {ButtonGroup} from 'react-native-elements'

class QuestionTypeButtonGroupChooser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedQuestionTypeIndex: 0
    }
    this.selectQuestionType = this.selectQuestionType.bind(this)
  }
  selectQuestionType = (newQuestionTypeIndex) => {
    this.setState({
      selectedQuestionTypeIndex: newQuestionTypeIndex
    })
  }
  render() {
    const questionTypes = [
      'Multiple Choice',
      'Fill in the blank',
      'Essay',
      'True or\nfalse']
    return(
      <ButtonGroup
        onPress={this.selectQuestionType}
        selectedIndex={this.state.selectedQuestionTypeIndex}
        buttons={questionTypes}
        containerStyle={{height: 75}}/>
    )
  }
}
export default QuestionTypeButtonGroupChooser