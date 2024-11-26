import "./App.css";
import { useState } from "react";
import Todolist from "./components/Todolist";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllState,
  getText,
  increment,
  incrementAmount,
} from "./reducers/counterSlice";
export default function App() {
  const count = useSelector(getAllState);
  const [text, setText] = useState("");
  const [subtext, setSubText] = useState("");
  const dispatch = useDispatch();
  const sendAction = (e) => {
    dispatch(getText(text, subtext));
    setText("");
    setSubText("");
  };
  return (
    <div className="App">
      {/* <Todolist /> */}
      <div>
        {" "}
        <h2> HERE: {count}</h2>
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        value={subtext}
        onChange={(e) => setSubText(e.target.value)}
      />
      <button onClick={sendAction}>Clickme</button>
    </div>
  );
}
