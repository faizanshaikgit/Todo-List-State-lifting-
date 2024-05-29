import Addtodo from "./components/Addtodo"
import Todolist from "./components/Todolist"
import Todocount from "./components/Todocount"
import { useState } from "react"
function App() {

  let [info,setinfo]=useState([]) 
  const formdataaa=(datafromaddtodo)=>{
    setinfo([...info,datafromaddtodo.todo])
  }
  console.log("The parent app: ",info)
  return (
    <div className="container mt-5 text-center bg-warning">
    <h1>Todo List</h1>
      <div className="row mt-5">
        <div className="col-sm-4">
          <Addtodo   formdataaa={formdataaa}/>
        </div>
        <div className="col-sm-4">
          <Todolist  info={info}/>
        </div>
        <div className="col-sm-4">
          <Todocount info={info}/>
        </div>
      </div>
    </div>
  );
}

export default App;
