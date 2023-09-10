import React from 'react';
import styles from './notFoundPage.module.css'
import {Link} from 'react-router-dom'


export function NotFoundPage() {
  return (
      <div className={styles.wrapper}>
          <div>
              <span>Not found page, go </span>
              <Link className={styles.home_page} to="/">Home</Link>
          </div>
      </div>
  )
}