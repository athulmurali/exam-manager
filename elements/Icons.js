import React from 'react'
import { View, Alert } from 'react-native'
import { Icon } from 'react-native-elements'
const Icons = () => (
  <View>
    <Icon

      raised

      color='#517fa4'
      name='ios-american-football'
      type='ionicon'
    />
    <Icon
      raised

      color='#f50'
      name='heartbeat'
      type='font-awesome'
      onPress={() =>
        Alert.alert('hello')}
    />

      <Icon
          raised

          color='#f50'
          name='edit'
          type='font-awesome'
          onPress={() =>
              Alert.alert('Do you want to edit this ?')}
      />
  </View>
)
export default Icons
