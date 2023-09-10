import React from 'react';
import styles from './footer.module.css'

export function Footer() {
    
  return (
    <footer className={`${styles.footer} ${styles.footer_container}`}>
        <div className={styles.footer_content}>
            Created by &copy;Pavel Ko
        </div>
    </footer>
  )
}