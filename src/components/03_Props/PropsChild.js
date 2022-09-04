/*******************************/
/* Props - The child component */
/*******************************/

const PropsChild = (props) => {
  const { name } = props;
  return (
    <>
      <h4>Child component</h4>
      <p>{name}</p>
    </>
  );
};

export default PropsChild;

/********************************/
/* Inline destructuring example */
/********************************/

// const PropsChild = ({name}) => {
//   return (
//     <>
//       <h3>Props Component</h3>
//       <p>{name}</p>
//     </>
//   );
// };
//
// export default PropsChild;

/********************/
/* More information */
/********************/
// More on destructuring
// https://www.youtube.com/watch?v=UgEaJBz3bjY
