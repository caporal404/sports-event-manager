/* eslint-disable react/prop-types */

const style = {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
}

const Right = ({ children }) => {
    return (
      <div className="right" style={style}>
          {children}
      </div>
    )
}
  
export default Right;