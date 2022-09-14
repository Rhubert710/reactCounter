import RedBar from "./components/RedBar";
import Row1 from "./components/Row1";

import StarRow from "./components/StarRow";
import { useState } from "react";

import './App.css';



function App() {

  const [count, setCount] = useState(0);

  return (

        <div className="App">
            
            <RedBar/>

            <Row1 count={count} setCount={setCount}/>

            <StarRow count={count}/>
            
            
        </div>
  );
}

export default App;
