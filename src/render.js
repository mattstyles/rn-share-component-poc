
import styles from './styles'
import List from './list'

export default function (props) {
  return (
    <div>
      <div style={styles.container}>
        <button
          style={Object.assign({}, styles.button, {
            borderColor: this.getButtonHighlight(this.state.orderBy, 'firstname')
          })}
          onClick={e => this.onReorder('firstname')}
        >First Name</button>
        <button
          style={Object.assign({}, styles.button, {
            borderColor: this.getButtonHighlight(this.state.orderBy, 'surname')
          })}
          onClick={e => this.onReorder('surname')}
        >Last Name</button>
      </div>
      <List items={this.state.items} />
    </div>
  )
}
