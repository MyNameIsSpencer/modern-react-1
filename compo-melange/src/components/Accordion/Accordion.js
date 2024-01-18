import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

export default function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);


  const handleClick = (nextIndex) => {
    setActiveIndex((currIndex) => {
      console.log(currIndex)
      if (currIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    })
  }

  const sections = data.map((section, index) => {
    const isExpanded = index === activeIndex;

    return (
      <div className='section-container' key={section.id}>
        {section.id}
        <div onClick={() => handleClick(index)}>
          {section.label}
        </div>
        {isExpanded && <div className="">{section.content}</div>} 
      </div>
    );
  });

  return <div>{sections}</div>;

}



