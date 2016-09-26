
import React from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import styles from './styles'
import List from './list'

export default function (props) {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={Object.assign({}, styles.button, {
            backgroundColor: this.getNativeButtonHighlight(this.state.orderBy, 'firstname')
          })}
          onPress={e => this.onReorder('firstname')}
        >
          <Text style={styles.buttonText}>First Name</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Object.assign({}, styles.button, {
            backgroundColor: this.getNativeButtonHighlight(this.state.orderBy, 'surname')
          })}
          onPress={e => this.onReorder('surname')}
        >
          <Text style={styles.buttonText}>Last Name</Text>
        </TouchableOpacity>
      </View>
      <List items={this.state.items} />
    </View>
  )
}
