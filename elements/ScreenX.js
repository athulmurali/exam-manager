import React, {Component} from 'react'
import {View} from 'react-native'
import {Text} from 'react-native-elements'
class ScreenX extends Component {

    static navigationOptions = {
        title: 'Screen X'
    }

  render() {

    const parameter =
      this.props.navigation.getParam
        ('parameter', 'some default value');

    return (
      <View style={{alignItems: 'center'}}>
        <Text h1>Screen {parameter}</Text>
      </View>
    )
  }
}
export default ScreenX
