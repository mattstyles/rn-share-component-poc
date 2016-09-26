
import React from 'react'
import {
  Text,
  View
} from 'react-native'
import styles from './styles'

const List = ({items}) => {
  let children = items.map((item, index) => {
    let style = Object.assign({}, styles.listItem, {
      backgroundColor: index % 2
        ? 'rgb(64,64,64)'
        : 'rgb(44,44,44)'
    })
    return (
      <View
        key={'list' + index}
        style={style}
      >
        <Text style={{color: 'white'}}>
          {item.firstname + ' ' + item.surname}
        </Text>
      </View>
    )
  })
  return (
    <View>
      {children}
    </View>
  )
}

export default List
