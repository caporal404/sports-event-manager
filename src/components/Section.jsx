/* eslint-disable react/prop-types */
import '../styles/section.css';

const Section = ({ children, className, ...props }) => {
  return (
    <section className={`section ${className}`} {...props}>
        {children}
    </section>
  )
}

export default Section;