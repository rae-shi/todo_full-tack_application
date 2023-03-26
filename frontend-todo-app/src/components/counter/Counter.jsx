import { useState } from "react";
import { PropTypes } from "prop-types";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounterParentFunction(by) {
    setCount(count + by);
  }

  function decrementCounterParentFunction(by) {
    setCount(count - by);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <div>
      <span className="count">{count}</span>

      <CounterButton
        by={1}
        incrementCounterMethod={incrementCounterParentFunction}
        decrementCounterMethod={decrementCounterParentFunction}
      />
      <CounterButton
        by={2}
        incrementCounterMethod={incrementCounterParentFunction}
        decrementCounterMethod={decrementCounterParentFunction}
      />
      <CounterButton
        by={5}
        incrementCounterMethod={incrementCounterParentFunction}
        decrementCounterMethod={decrementCounterParentFunction}
      />
      <button className="counterButton" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}

function CounterButton({ by, incrementCounterMethod, decrementCounterMethod }) {
  return (
    <div className="CounterButton">
      <div>
        <button
          className="counterButton"
          onClick={() => incrementCounterMethod(by)}
        >
          +{by}
        </button>

        <button
          className="counterButton"
          onClick={() => decrementCounterMethod(by)}
        >
          -{by}
        </button>
      </div>
    </div>
  );
}

CounterButton.prototype = {
  by: PropTypes.number,
};

CounterButton.defaultProps = {
  by: 1,
};
