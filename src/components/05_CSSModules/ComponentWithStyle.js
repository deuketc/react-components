/***************/
/* CSS Modules */
/***************/

import styles from './ComponentWithStyles.module.css';

const ComponentWithStyle = () => {
  const { container, innerWrapper, header } = styles;
  return (
    <section className={container}>
      <div className={innerWrapper}>
        <h3 className={header}>Component using CSS modules</h3>
      </div>
    </section>
  );
};

export default ComponentWithStyle;

/************************************/
/* Other ways to write CSS in react */
/************************************/
// Styled components - https://www.smashingmagazine.com/2020/07/styled-components-react/
// Tailwind - https://tailwindcss.com/
// More ways to write CSS in react - https://css-tricks.com/different-ways-to-write-css-in-react/
