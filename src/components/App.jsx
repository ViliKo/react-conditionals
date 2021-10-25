import React from "react";
import LoginForm from "./LoginForm";
import Greet from "./Greet";

let isLoggedIn = false;

const currentTime = new Date(2019, 11, 1, 18).getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <Greet /> : <LoginForm />}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
