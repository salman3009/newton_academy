import './App.css';
import carOne from './assets/carOne.png';
import carTwo from './assets/carTwo.png';
import {useState} from 'react';

function App() {
  const [getList,setList] = useState([carOne,carTwo]);
  let [getIndex,setIndex] = useState(0);

  const onChangeHandler=()=>{
    debugger
            if(getIndex<1){
              setIndex(getIndex+1);
            }
            else{
              setIndex(0);
            }
  }

  return (
    <div className="card">
        <i class="fa-solid fa-angle-left" onClick={onChangeHandler}></i>
        <i class="fa-solid fa-angle-right" onClick={onChangeHandler}></i>
        <img src={getList[getIndex]} />
       
    </div>
  );
}

export default App;
