import ChildA from "./components/ChildA"
import { createContext } from "react";
import {useState} from "react"
import './App.css'

const UserContext = createContext();

function App() {
  const [user,setUser] = useState({name:"shubham"});
  return (
    <>
    <UserContext.Provider value={user}>
      <ChildA />
    </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
