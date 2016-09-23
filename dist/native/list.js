
import styles from './styles'

const List = ({items}) => {
  let children = items.map((item, index) => {
    let style = Object.assign({}, styles.listItem, {
      background: index % 2
        ? 'rgb(64,64,64)'
        : 'rgb(44,44,44)'
    })
    return (
      <div
        key={'list' + index}
        style={style}
      >
        <span>{item.firstname + ' ' + item.surname}</span>
      </div>
    )
  })
  return (
    <div>
      {children}
    </div>
  )
}

export default List
