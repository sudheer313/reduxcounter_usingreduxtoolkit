import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { incremnet, decrement, incremnetby10, reset } from "./store";

function App() {
  const counterData = useSelector((state) => state.counterData);

  const dispatch = useDispatch();
  const INC = () => {
    dispatch(incremnet());
  };
  const DEC = () => {
    if (counterData.counterValue > 0) {
      dispatch(decrement());
    } else {
      alert("cannot decrement below zero");
    }
  };
  const INCby10 = () => {
    dispatch(incremnetby10(10));
  };
  const reseto0 = () => {
    dispatch(reset());
  };

  return (
    <div className="App">
      <h1>Counter using redux tool kit</h1>
      <h1>{counterData.counterValue}</h1>
      <button onClick={INC}>Increment</button>

      <button onClick={DEC}>Decrement</button>
      <button onClick={INCby10}>Incrementby10</button>
      <button onClick={reseto0}>Reset</button>
    </div>
  );
}

export default App;
