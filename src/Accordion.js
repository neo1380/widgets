import React,{useState} from 'react';


const Accordion = ({items})=>{

  const [activeIndex,setActiveIndex] = useState(null);


  const onTitleCLick = (index) =>{
     if(index === activeIndex){
       setActiveIndex(null);
       return;
     }
      setActiveIndex(index);
  }

  const renderedItems = items.map((item,index) => {
    const active = index === activeIndex ?'active':''
    return <React.Fragment key={item.title} >
        <div className={`title ${active}`} onClick={()=>onTitleCLick(index)}> 
            <i className="dropdown icon"></i>
            {item.title}
        </div>
        <div className={`content ${active}`}> 
            <p>{item.content}</p>
        </div>
    </React.Fragment>
  })
  return (
       <React.Fragment>
      
       <div className="ui styled accordion">
         {renderedItems} 
       </div>
        <h1>{activeIndex}</h1>
       
        </React.Fragment>
  )
}

export default Accordion;