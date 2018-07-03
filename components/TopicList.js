import React, {Component} from 'react'
import {View} from 'react-native'
import {Text, ListItem} from 'react-native-elements'
import WidgetList from "./WidgetList";

const HOST_URL = "https://neu-course-manager.herokuapp.com"
class TopicList extends Component {
    static navigationOptions = {title: 'Topics'}
    constructor(props) {
        super(props)
        this.state = {
            topics: [],
            courseId: 1,
            moduleId: 1,
            lessonId :1
        }

    }
    componentDidMount() {
            const {navigation}  = this.props;
            const courseId      = navigation.getParam("courseId")
            const moduleId      = navigation.getParam("moduleId")
            const lessonId      = navigation.getParam("lessonId")
            this.setState({
                courseId: courseId,
                moduleId : moduleId,
                lessonId : lessonId
            })


        console.log("Topic List loaded....")
        console.log(HOST_URL+"/api/course/"+courseId+"/module/"+moduleId+"/lesson/"+lessonId + "/topic")
        fetch(HOST_URL+"/api/course/"+courseId+"/module/"+moduleId+"/lesson/"+lessonId + "/topic")
            .then(response => (response.json()))
            .then(topics => this.setState({topics: topics}))
    }
    render() {
        console.log("printing state : ")
        console.log(this.state.topics);
        return(
            <View style={{padding: 15}}>
                {this.state.topics.map((topic, index) => (
                    <ListItem
                        onPress={() => this.props.navigation
                            .navigate("AssignmentList",
                                {
                                    topicId : topic.id})}
                        key={index}
                        title={topic.title}/>
                ))}
            </View>
        )
    }
}
export default TopicList
