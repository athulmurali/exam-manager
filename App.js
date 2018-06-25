import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import FixedHeader from './elements/FixedHeader'
import TextHeadings from './elements/TextHeadings'
import Icons from './elements/Icons'
import Exam from './elements/Exam'
import QuestionTypeButtonGroupChooser from './elements/QuestionTypeButtonGroupChooser'
import QuestionTypePicker from './elements/QuestionTypePicker'
import TrueFalseQuestionEditor from './elements/TrueFalseQuestionEditor'
import MultipleChoiceQuestionEditor from './elements/MultipleChoiceQuestionEditor'
import {createStackNavigator} from 'react-navigation'
import {Button} from 'react-native-elements'
import ScreenX from './elements/ScreenX'
import CourseList from './components/CourseList'
import ModuleList from './components/ModuleList'
import LessonList from './components/LessonList'
import WidgetList from './components/WidgetList'
import QuestionList from './components/QuestionList'
import TopicList from "./components/TopicList";
import Assignment from "./components/Assignment";
import MCQ from "./components/MCQ";
import EssayQuestionWidget from "./container/widgetContainer/EssayQuestionWidget";
import FillInTheBlanks from "./container/widgetContainer/FillInTheBlanks";
import QuestionTrueFalseContainer from "./container/QuestionContainer/TrueFalseContainer/QuestionTrueFalseContainer";

class Home extends React.Component{
  static navigationOptions = {
    title: 'Home',
  }



  constructor(props) {
    super(props)
  }
  render() {
    return(
      <ScrollView>
        <StatusBar barStyle="dark-content"/>
        <FixedHeader/>



          <Button title="Courses"
                onPress={() => this.props.navigation
                  .navigate('CourseList') } />
        <Button title="Go to Screen X"
                onPress={() => this.props.navigation
                  .navigate('ScreenX') } />
        <Button title="Go to Screen A"
                onPress={() => this.props.navigation
                  .navigate('ScreenA') } />
        <Button title="Go to Screen B"
                onPress={() => this.props.navigation
                  .navigate('ScreenB') } />

      <Button title="Go to Assignment "
              onPress={() => this.props.navigation
                  .navigate('Assignment') } />


          <Button title="MCQ "
                  onPress={() => this.props.navigation
                      .navigate('MCQ') } />
          <Button title="Essay Question"
                  onPress={() => this.props.navigation
                      .navigate('EssayQuestionWidget') } />
          <Button title="Fill in the blanks"
                  onPress={() => this.props.navigation
                      .navigate('FillInTheBlanks') } />

          <Button title="True False Question"
                  onPress={() => this.props.navigation
                      .navigate('QuestionTrueFalseContainer') } />



          <TrueFalseQuestionEditor/>

        <QuestionTypeButtonGroupChooser/>
        <QuestionTypePicker/>

        <Exam/>

        <Icons/>
        <View style={{padding: 20}}>
          <TextHeadings/>
        </View>
      </ScrollView>
    )
  }
}

class ScreenA extends React.Component {
  static navigationOptions = {title: "Screen A"}
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text h1>Screen A</Text>
        <Button title="Go Home"
                onPress={() =>this.props
                  .navigation
                  .goBack()} />
      </View>
    )
  }
}

const ScreenB = () => (
  <View>
    <Text h1>Screen B</Text>
  </View>
)

const App = createStackNavigator({
    Home,
    CourseList,
    ModuleList,
    LessonList,
    TopicList,
    WidgetList,
    QuestionList,
    TrueFalseQuestionEditor,
    MultipleChoiceQuestionEditor,
    ScreenA,
    ScreenB,
    ScreenX,
    Assignment,
    MCQ,
    EssayQuestionWidget,
    FillInTheBlanks,
    QuestionTrueFalseContainer
});

//
// let styles = StyleSheet.create({
//     back: {
//         fontFamily: "Lato-Regular",
//     }
//
// });


export default App;
