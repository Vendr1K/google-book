import styles from './spiner.module.css'

export function Spiner() {
  return (
    <div className={styles.svg_container}>
      <svg  className={styles.svg_load}>
        <circle cx="9" cy="9" r="9"></circle>
      </svg>
   </div>
  )
}
