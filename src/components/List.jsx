/* eslint-disable react/prop-types */
import '../styles/List.css'

const List = ({ data, onSelectItem = f => f, ...props }) => {
  return (
    <div className="list" {...props} >
      {
        data.map(item => (
            <Item
              key={`item-${item.id}`}
              data={item} 
              onSelect={onSelectItem} 
            />
          )
        )
      }
    </div>
  )
}

const Item = ({ data, onSelect = f => f }) => {
  return (
    <div className="list-item" onClick={() => onSelect(data)}>
        <img src={data.picture} alt={data.name}/>
        <div className="info">
            <span className='title'>{data.name}</span>
            <span className='text'>{data.role }</span>
        </div>
    </div>
  )
}

export default List;