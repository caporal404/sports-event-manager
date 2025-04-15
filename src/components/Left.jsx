/* eslint-disable react/prop-types */

const style = {
    width: 'auto',
    height: '100%'
}

const Left = ({ children }) => {
  return (
    <div className="left" style={style}>
        {children}
    </div>
  )
}

export default Left;