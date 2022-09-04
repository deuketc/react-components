/*********************************************/
/* Component state using the "useState" hook */
/*********************************************/

import { useState } from 'react';

const ComponentState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <h3>Component State</h3>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Update state</button>
    </>
  );
};

export default ComponentState;

/********************/
/* More Information */
/********************/
// Learn useState In 15 Minutes - React Hooks Explained
// https://www.youtube.com/watch?v=O6P86uwfdR0

// React Hooks Tutorial - 3 - useState with previous state
// https://www.youtube.com/watch?v=d0plTCQgsXs

// Virtual DOM and Internals
// https://reactjs.org/docs/faq-internals.html

/********************************************/
/* Component state using the "class" syntax */
/********************************************/
// import React from 'react';
//
// class ComponentState extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   }
//
//   render() {
//     return (
//       <>
//         <h3>Component State - Using class syntax</h3>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.handleClick}>Update state</button>
//       </>
//     );
//   }
// }
//
// export default ComponentState;
