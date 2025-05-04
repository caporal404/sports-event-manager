/* eslint-disable react/prop-types */
import '../styles/Details.css'; 
import { useData } from '../hooks/data-hooks';
import ThumbList from './ThumbList'

const Details = ({ data, onHide = f => f }) => {
  const { setModified, remove } = useData()
  return (
    <div className="details-container">
      <div className='details'>
        <h2>Details</h2>
        {
          Object.entries(data).map(([key, value]) => (
            <div key={`detail-${key}`} className={`detail ${key}`}>
              <span className='prop'>{key}</span> : 
              {Array.isArray(value) ? 
              <ThumbList data={value} isItemRemovable={false} /> : 
              <span className='value'> {value}</span>}
            </div>
            )
          )
        }

        <div className="actions d-flex justify-content-center">
            <button className="btn btn-primary" onClick={() => {
                setModified(null);
                setModified(data);
                onHide();
            }}>Modifier</button>
            
            <button className="btn btn-secondary" onClick={() => {
              remove(data.id);
              onHide();
            }}>Supprimer</button>
        </div>

        <div className="hide-details" onClick={onHide}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  )
}

export default Details