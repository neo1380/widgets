import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

 
  useEffect(()=>{
     console.log('render from use effect');
     const search = async () => {
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
          params:{
              action:'query',
              list:'search',
              origin:'*',
              format:'json',
              srsearch:term,
          }
        });
        setResults(data.query.search);
     };

     const timerId = setTimeout(() => {
        if(term){
            search();
         }
     }, 500);

     return () =>{
        console.log('use effect clean up');
        if (timerId) {
            clearTimeout(timerId);
        }
     }

    

    

    /**alternate ways toi make Async operation in useEFfect */

     /* (async () =>{
        await axios.get('secondway');
     })(); */

    /*  axios.get('promiseway')..then((result) => {
       console.log(result)
     }).catch((err) => {
       console.log(error)
     }); */

  },[term])



  const renderedResults = results.map((result) => {

    return(
        <div className="item" key={result.pageid}>
          <div className="right floated">
               <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>

                Go
            </a>
          </div>
            <div className="content">
              <div className="header"> 
                <b>{result.title}</b>
              </div>
                 <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
            </div>
       
        </div>
    )
  })

  return ( 
   <div>
    <div className="ui form">
        <div className="field">
        <label>Enter Search term:</label>
          <input className="input" value={term} onChange={(e)=>setTerm(e.target.value)}type="text"/>
        </div>
    </div>
    <div className="ui celled list">
    {renderedResults}
    </div>
  </div> 
  );
}
 
export default Search;