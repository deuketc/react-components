// https://reactjs.org/docs/hooks-effect.html Using the Effect Hook
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map Array.prototype.map()
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch Using Fetch
// https://jsonplaceholder.typicode.com/ Free fake API for testing and prototyping.

import { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <section>
      <h3>Fetching Data...</h3>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </section>
  );
}

export default FetchDataComponent;
