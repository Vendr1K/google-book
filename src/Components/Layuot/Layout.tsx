import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Search } from './Search';
import styles from './layout.module.css';


export function Layout() {
    return (
        <>
            <Search/>
                <main className={`${styles.main} ${styles.main_container}`}>
                    <Outlet/>
                </main>
            <Footer/>
        </>
    )
}