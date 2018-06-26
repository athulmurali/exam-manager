import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import FixedHeader from './elements/FixedHeader'
import TextHeadings from './elements/TextHeadings'
import Icons from './elements/Icons'
import QuestionTypeButtonGroupChooser from './elements/QuestionTypeButtonGroupChooser'
import TrueFalseQuestionEditor from './elements/TrueFalseQuestionEditor'
import MultipleChoiceQuestionEditor from './elements/MultipleChoiceQuestionEditor'
import {createStackNavigator} from 'react-navigation'
import {Button} from 'react-native-elements'
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
import AddQuestionWidget from "./container/widgetContainer/AddQuestionWidget";
import ExamList from "./container/Exam/ExamList";
import EditableQuestionContainer from './container/EditableQuestionContainer'
import TrueOrFalseQuestionWidget from "./container/widgetContainer/TrueOrFalseQuestionWidget";
import FillInTheBlanksQuestionWidget from "./container/widgetContainer/FillInTheBlanksQuestionWidget";

class Home extends React.Component{
  static navigationOptions = {
    title: 'Fill in the Blanks',
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

          <Button title="TrueOrFalseQuestionWidget"
                  onPress={() => this.props.navigation
                      .navigate('TrueOrFalseQuestionWidget') } />

          <Button title="FillInTheBlanksQuestionWidget"
                  onPress={() => this.props.navigation
                      .navigate('FillInTheBlanksQuestionWidget') } />





          <Button title="Add Question"
                  onPress={() => this.props.navigation
                      .navigate('AddQuestionWidget') } />

          <Button title="EditableQuestionContainer"
                  onPress={() => this.props.navigation
                      .navigate('EditableQuestionContainer') } />

          <Button title="Exam List"
                  onPress={() => this.props.navigation
                      .navigate('ExamList') } />

          <TrueFalseQuestionEditor/>

        <QuestionTypeButtonGroupChooser/>

        {/*<Exam/>*/}

        <Icons/>
        <View style={{padding: 20}}>
          <TextHeadings/>
        </View>
      </ScrollView>
    )
  }
}




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
    Assignment,
    MCQ,
    EssayQuestionWidget,
    FillInTheBlanks,
    QuestionTrueFalseContainer,
    AddQuestionWidget,
    EditableQuestionContainer,
    ExamList,
    TrueOrFalseQuestionWidget,
    FillInTheBlanksQuestionWidget


});

export default App;
