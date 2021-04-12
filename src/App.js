import React,{useState} from "react";
import Accordion from "./Accordion";
import Search from './Search';
import Dropdown from './Dropdown'
import Translate from './Translate'

const items = [
  {
    title:'Heading1',
    content:'heading 1 desc'
  },
  {
    title:'Heading2',
    content:'heading 2 desc'
  },
  {
    title:'Heading3',
    content:'heading 3 desc'
  },
]

const options = [
  {
    label:'Red',
    value:'red'
  },
  {
    label:'Blue',
    value:'blue'
  },
  {
    label:'Green',
    value:'green'
  },
]

const App = () => {
  const [selected,setSelected] = useState(options[0])

   return(
        <div className="ui container"> 
         <div>Widgets component </div>
         <Translate />
        <Accordion items={items}/>
        <Dropdown  label="Select a color"  selected={selected} onSelectionChange={setSelected} options={options}/>
        <Search />
      </div>
     ) 
}
 
export default App;

/* class App extends React.Component {

  const [selected,setSelected] = useState(options[0])
 
  render(){
     return(
        <div className="ui container"> 
         <div>Widgets component </div>
        <Accordion items={items}/>
        <Dropdown  selected={selected} onSelectionChange={setSelected} options={options}/>
        <Search />
      </div>
     ) 
     
  }
}

export default App; */
