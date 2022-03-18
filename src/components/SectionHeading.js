import styles from './css-modules/section-heading.module.css';

function SectionHeading(props){

  return (
    <div className={styles.heading_container}>
      <h2 className={styles.heading}>{props.heading}</h2>
      <div className={styles.circle}></div>
    </div>
  )
}

export default SectionHeading;
