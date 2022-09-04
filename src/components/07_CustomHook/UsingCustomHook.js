/*******************************/
/* Using a custom hook - fetch */
/*******************************/

import { useState } from 'react';
import { useFetch } from './useFetch';

function ComponentUsingCustomHook() {
  const [url, setUrl] = useState(
    'https://jsonplaceholder.typicode.com/posts/1'
  );
  const { data: post, isPending } = useFetch(url);

  const handleClick = (postId) => {
    setUrl(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  };

  return (
    <section>
      <h3>Creating a custom hook for fetch data</h3>
      {isPending && <p>Loading...</p>}
      <div>
        <p>title: {post && post.title}</p>
        <p>body: {post && post.body}</p>
        <button onClick={() => handleClick('1')}>Post 1</button>
        <button onClick={() => handleClick('2')}>Post 2</button>
        <button onClick={() => handleClick('3')}>Post 3</button>
      </div>
    </section>
  );
}

export default ComponentUsingCustomHook;

/********************/
/* More information */
/********************/
// Template literals (Template strings)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
