import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import {Text, ListItem} from 'react-native-elements'

const HOST_URL = "https://neu-course-manager.herokuapp.com"

class WidgetList extends Component {
  static navigationOptions = {title: 'Widgets'}
  constructor(props) {
    super(props)
    this.state = {
      widgets: [],
      courseId: 1,
      moduleId: 1,
      lessonId :1,
      topicId: 1
    }
  }
  componentDidMount() {
      const {navigation}  = this.props;
      const courseId      = navigation.getParam("courseId")
      const moduleId      = navigation.getParam("moduleId")
      const lessonId      = navigation.getParam("lessonId")
      const topicId      = navigation.getParam("topicId")

      this.setState({
          courseId: courseId,
          moduleId : moduleId,
          lessonId : lessonId,
          topicId : topicId
      })


      console.log("Widget List loaded....")
      const URL = HOST_URL+"/api/topic/"+ topicId+"/widget"
      console.log(URL);
    fetch(URL)
      .then(response => (response.json()))
      .then(widgets => this.setState({widgets}))
  }
  render() {
      console.log("");
    return(
      <View style={{padding: 15}}>
      {this.state.widgets.map(
        (widget, index) => (
          <ListItem
            onPress={() => this.props.navigation
              .navigate("QuestionList", {widgetId: widget.id})}
            key={index}
            subtitle={widget.description}
            title={widget.text}/>))}
      </View>
    )
  }
}
export default WidgetList
