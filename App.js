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
import FillInTheBlanks from "./container/FillInTheBlanks";
import QuestionTrueFalseContainer from "./container/QuestionContainer/TrueFalseContainer/QuestionTrueFalseContainer";
import AddQuestionWidget from "./container/widgetContainer/AddQuestionWidget";
import ExamQuestionsList from "./container/Exam/ExamQuestionsList";
import TrueOrFalseQuestionWidget from "./container/widgetContainer/TrueOrFalseQuestionWidget";
import FillInTheBlanksQuestionWidget from "./container/widgetContainer/FillInTheBlanksQuestionWidget";
import MultipleChoiceQuestionWidget from "./container/widgetContainer/MultipleChoiceQuestionWidget";
import ChooseHomeWorkType from "./container/widgetContainer/ChooseHomeWorkType";
import AssignmentList from "./container/Assignment/AssignmentList";
import ExamsList from "./container/Exam/ExamsList";
import AddExamWidget from "./container/Exam/AddExamWidget";

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

          <Button title="Go to Assignment "
              onPress={() => this.props.navigation
                  .navigate('Assignment') } />


          <Button title="MCQ "
                  onPress={() => this.props.navigation
                      .navigate('MCQ') } />

          {/*<Button title="Fill in the blanks"*/}
                  {/*onPress={() => this.props.navigation*/}
                      {/*.navigate('FillInTheBlanks') } />*/}


          <Button title="EssayQuestionWidget"
                  onPress={() => this.props.navigation
                      .navigate('EssayQuestionWidget') } />

          <Button title="TrueOrFalseQuestionWidget"
                  onPress={() => this.props.navigation
                      .navigate('TrueOrFalseQuestionWidget') } />

          <Button title="FillInTheBlanksQuestionWidget"
                  onPress={() => this.props.navigation
                      .navigate('FillInTheBlanksQuestionWidget') } />

          <Button title="MultipleChoiceQuestionWidget"
                  onPress={() => this.props.navigation
                      .navigate('MultipleChoiceQuestionWidget') } />






          <Button title="AddQuestionWidget"
                  onPress={() => this.props.navigation
                      .navigate('AddQuestionWidget') } />


          <Button title="Exam Questions List"
                  onPress={() => this.props.navigation
                      .navigate('ExamQuestionsList') } />


          <Button title="Exams  List"
                  onPress={() => this.props.navigation
                      .navigate('ExamsList',{
                          topicId : 81
                      }) } />



          <Button title="ChooseHomeWorkType"
                  onPress={() => this.props.navigation
                      .navigate('ChooseHomeWorkType') } />



          <Button title="AddExamWidget"
                  onPress={() => this.props.navigation
                      .navigate('AddExamWidget') } />



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
    ExamQuestionsList,
    TrueOrFalseQuestionWidget,
    FillInTheBlanksQuestionWidget,
    MultipleChoiceQuestionWidget,
    ChooseHomeWorkType,
    AssignmentList,
    ExamsList,
    AddExamWidget



});

export default App;
