import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [word, setWord] = useState("")
  const[difi,setDifi]=useState([])
  const apil=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  function api(){
    fetch(apil)
    .then(res=>{return res.json()})
    .then(res=>{
      const defi = [];

        res.forEach(entry => {
            entry.meanings.forEach(meaning => {
                meaning.definitions.forEach(def => {
                    defi.push(def.definition);
                });
            });
        });
        // console.log(defi);
      setDifi(defi)
    })
  }

  return (

   <>
     <div>
      <h1>Dictionary app</h1>
      <input type="text" value={word} onChange={(e)=>{setWord(e.target.value)}}/>
        <span><button style={{margin:"10px"}} onClick={api}>Search</button></span>
      <ol>
          {difi.map((definition, index) => (
            <li key={index}>{definition}</li>
          ))}
        </ol>
      
     </div>
   </>
  )
}

export default App
