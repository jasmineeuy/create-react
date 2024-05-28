import React,{useState} from "react";


function App() {
  const greeting = "Welcome to CodeSquad";
  const [user,setUser] = useState("User");
  const updateUsername =(event)=>{
    setUser(event.target.value)

  }
  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>
      <label htmlFor="username">Name: </label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={updateUsername}
      />
    </div>
  );
}

export default App;
