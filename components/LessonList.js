import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import {Text, ListItem} from 'react-native-elements'

const HOST_URL = "https://neu-course-manager.herokuapp.com"

class LessonList extends Component {
  static navigationOptions = {title: 'Lessons'}
  constructor(props) {
    super(props)
    this.state = {
      lessons: [],
      courseId: 1,
      moduleId: 1
    }
  }
  componentDidMount() {
    const {navigation} = this.props;
    const courseId = navigation.getParam("courseId")
    const moduleId = navigation.getParam("moduleId")
    fetch(HOST_URL+"/api/course/"+courseId+"/module/"+moduleId+"/lesson")
      .then(response => (response.json()))
      .then(lessons => this.setState({lessons}))

      this.setState({
          courseId: courseId,
          moduleId : moduleId,
      })

  }
  render() {
    console.log(this.state.lessons)
    return(
      <View style={{padding: 15}}>
      {this.state.lessons.map(
        (lesson, index) => (
          <ListItem
            onPress={() => this.props.navigation
              .navigate("TopicList",
                  {courseId :this.state.courseId,
                  moduleId : this.state.moduleId,
                  lessonId : lesson.id})}
            key={index}
            title={lesson.title}/>))}
      </View>
    )
  }
}
export default LessonList
