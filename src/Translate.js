//API KEY : AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React ,{useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label:'Afrikaans',
    value:'af'
  },
  {
    label:'Arabic',
    value:'ar'
  },
  {
    label:'hindi',
    value:'hi'
  },
  {
    label:'spanish',
    value:'es'
  },
]
const Translate = () => {
  const [language,setLanguage] = useState(options[0])
  const [text,setText] = useState('')
  return ( 
      <div>
            <h1>Enter your text</h1>
            <input type="text" value= {text} onChange={(e) =>setText(e.target.value)} />
            <Dropdown label="Choose a language" selected={language} onSelectionChange={setLanguage} options={options}/>
            <Convert language= {language}  text={text}/>
      </div>
   );
}
 
export default Translate;