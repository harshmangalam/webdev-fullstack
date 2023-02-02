import { useState } from "react";
import GithubUser from "./GithubUser";

function App() {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow(!show);
  }
  return (
    <div>
      {show ? <GithubUser /> : "Empty"}

      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;
