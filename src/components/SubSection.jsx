/* eslint-disable react/prop-types */
import '../styles/sub-section.css';

const next = () => {
  document.querySelector('.current + .sub-section').classList.add('current');
  document.querySelector('.current').classList.remove('current');
}

const previous = () => {
  document.querySelector('.sub-section:has(+ .current)').classList.add('current');
  const elements = document.querySelectorAll('.current');
  elements[elements.length -1 ].classList.remove('current');
}

const SubSection = ({ children, className,  ...props}) => {
  return (
    <section className={`sub-section ${className}`} {...props}>
        {children}
        <div className="controls">
          <button className="previous" onClick={previous}>&lt;</button>
          <button className="next" onClick={next}>&gt;</button>
        </div> 
    </section>
  )
}

export default SubSection;