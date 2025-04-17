/* eslint-disable react/prop-types */
import '../styles/sub-section.css';

const SubSection = ({ children, className,  ...props}) => {
  return (
    <section className={`sub-section ${className}`}  {...props}>
        {children}
    </section>
  )
}

export default SubSection;