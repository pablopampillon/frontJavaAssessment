import logo from "./logo.svg";
import "./App.css";
import FormUser from "./Components/FormUser";
import { useState } from "react";
import axios from "axios";
import ListUsers from "./Components/ListUsers";
import { useEffect } from "react";
function App() {
  const [w, setW] = useState(false);

  function createUserWind(e) {
    console.log(e);
    setW(true);
  }

  return (
    <div className="App">
      <h1>JAVA ASSESMENT FRONT</h1>
      <input type="button" onClick={createUserWind} value="Create User" />
      <ListUsers />
      {w && <FormUser setW={setW}> </FormUser>}
    </div>
  );
}

export default App;
