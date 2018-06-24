import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import {Text, ListItem} from 'react-native-elements'

class CourseList extends Component {
  static navigationOptions = {title: 'Courses'}
  constructor(props) {
    super(props)
    fetch('https://neu-course-manager.herokuapp.com/api/course/')
      .then(response => (response.json()))
      .then(courses => {
        this.setState({courses: courses})
      })
    this.state = {
      courses: []
    }
  }
  render() {
    return(
      <View style={{padding: 15}}>
        {this.state.courses.map((course, index) => (
          <ListItem
            onPress={() => this.props.
              navigation.navigate("ModuleList",
              {courseId: course.id})}
            title={course.title}
            key={index}/>
        ))}
      </View>
    )
  }
}
export default CourseList
