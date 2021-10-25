import React from "react";
import Input from "./Input";

let LoginForm = () => {
  return (
    <form className="form">
      <Input type="text" placeholder="Username please" />
      <Input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
