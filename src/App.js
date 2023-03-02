import Palette from './Palette';
import Collector from './Collector';
import { useState } from 'react';

function App() {
  const [entry , setEntry] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
     <Palette
      entry={entry}
      hexValue={hexValue}
      isDarkText={isDarkText}
     />
     <Collector
        entry={entry}
        setEntry={setEntry}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
     /> 
    </div>
  );
}

export default App;
