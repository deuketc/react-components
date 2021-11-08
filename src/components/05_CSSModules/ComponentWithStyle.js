import styles from './ComponentWithStyles.module.css';

function ComponentWithStyle() {
  const { container, innerWrapper, header } = styles;
  return (
    <section className={container}>
      <div className={innerWrapper}>
        <h3 className={header}>Component using CSS modules</h3>
      </div>
    </section>
  );
}

export default ComponentWithStyle;
