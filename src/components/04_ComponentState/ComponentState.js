// https://www.youtube.com/watch?v=O6P86uwfdR0 Learn useState In 15 Minutes - React Hooks Explained
// https://www.youtube.com/watch?v=d0plTCQgsXs React Hooks Tutorial - 3 - useState with previous state
// https://reactjs.org/docs/faq-internals.html Virtual DOM and Internals

import { useState } from 'react';

function ComponentState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h3>Component State</h3>
      <p>{count}</p>
      <button onClick={handleClick}>Update state</button>
    </>
  );
}

export default ComponentState;
