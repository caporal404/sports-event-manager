/* eslint-disable react/prop-types */
import '../styles/ThumbList.css';

const ThumbList = ({ id, data, onRemoveItem = f => f }) => {
  return (
    <div className="thumb-list" id={id}>
      {
        data.map((item, index) => (
          <Thumb
            key={`thumb-${index + 1}`}
            src={item.picture} 
            title={`${item.name} - ${item.role}`}
            data={item}
            onRemove={onRemoveItem} 
          />
        ))
      }
    </div>
  )
}

const Thumb = ({ src, title, data, onRemove = f => f }) => {
  return (
    <div className="thumb" title={title}>
      <img src={src} alt={title}/>
      <div className="remove" onClick={() => onRemove(data)}>
        <i className="fas fa-times"></i>
      </div>
    </div>  
  )
}

export default ThumbList;