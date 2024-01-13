import { useState } from "react";
import Startgame from "./components/Startgame";
import Gameplay from "./components/Gameplay";
function App() {
  const [isgamestarted, setisgamestarted] = useState(false);

  const toggleGamePlay = () => {
    setisgamestarted((prev) => !prev); // prev is value which useState passes and it  is the last value present in the use state
  };

  return (
    <>{isgamestarted ? <Gameplay /> : <Startgame toggle={toggleGamePlay} />}</>
  );
}

export default App;
