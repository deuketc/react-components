/********************************/
/* Props - The parent component */
/********************************/

import PropsChild from './PropsChild';

const PropsParent = () => {
  return (
    <>
      <h3>React Props - Parent Component</h3>
      <PropsChild name='John Smith' />
      <PropsChild name='Joe Bloggs' />
    </>
  );
};

export default PropsParent;

/********************/
/* More Information */
/********************/
// Official Docs
// https://reactjs.org/docs/components-and-props.html
