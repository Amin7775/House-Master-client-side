// import  { useState } from 'react';

const Accordion = ({description}) => {
    // console.log(description)
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    // <div className="accordion ">
    //   <div className="accordion-header" onClick={handleToggle}>
    //     <div className="accordion-title">
    //       Click Here to {isOpen ? 'close' : 'View'} Description
    //     </div>
    //   </div>
    //   {isOpen && (
    //     <div className="accordion-content">
    //       <p>Content goes here</p>
    //     </div>
    //   )}
    // </div>
    <div className="collapse bg-base-200">
  <input type="checkbox" /> 
  <div className="collapse-title">
    Show/Hide description
  </div>
  <div className="collapse-content"> 
    <p>{description}</p>
  </div>
</div>
  );
};

export default Accordion;
