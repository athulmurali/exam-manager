import React from 'react'
import {Header} from 'react-native-elements'

const FixedHeader = () => (
  <Header
    leftComponent={{ 		icon: 'menu', color: '#fff' }}
    centerComponent={{	text: 'MY TITLE',
      style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}/>
)

export default FixedHeader