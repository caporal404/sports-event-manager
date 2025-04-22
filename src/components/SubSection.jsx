/* eslint-disable react/prop-types */
import '../styles/sub-section.css';
import { usePlayers } from '../hooks/player-hooks';


const SubSection = ({ children, className,  ...props}) => {
  const { goToNextSection, returnFromPreviousSection } = usePlayers();
  
  return (
    <section className={`sub-section ${className}`} {...props}>
        {children}
        <div className="controls">
          <button className="previous" onClick={returnFromPreviousSection}>&lt;</button>
          <button className="next" onClick={goToNextSection}>&gt;</button>
        </div> 
    </section>
  )
}

export default SubSection;