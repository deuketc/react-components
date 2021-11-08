// https://reactjs.org/docs/components-and-props.html

import ComponentPropsChild from './PropsChild';

function ComponentPropsParent() {
  return (
    <>
      <ComponentPropsChild name='John Smith' />
      <ComponentPropsChild name='Joe Bloggs' />
    </>
  );
}

export default ComponentPropsParent;
