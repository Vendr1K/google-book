import React, { useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/useReduxHook";
import {useParams, useNavigate} from 'react-router-dom';
import { fetchDeatilsBook } from "../../../../redux/Reducers/booksSlice";
import styles from './bookPage.module.css';

export function BookPageDetail() {

    const dispatch = useAppDispatch();
    const book = useAppSelector(state => state.books.bookDetail);
    const error = useAppSelector(state => state.books.error);

    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        dispatch(fetchDeatilsBook(id as string));
    }, [id, dispatch])

    return (
       <section className={styles.book_detail}>
        <div className={styles.container}>
            {error && <div style={{color: 'var(--red-color)'}}>{error}</div>}
            {book && (
                <div className={styles.book_wrapper}>
                    <div className={styles.item_img}>
                            {
                                book.imageLinks.thumbnail ? 
                                ( <img src={`${book.imageLinks.thumbnail}`} alt="" />) :
                                <span >Not image</span>
                            }
                        
                        </div>
                        <div>
                            <h3 className={styles.title}>{book.title}</h3>
                            <p className={styles.descr}>{book.description}</p>
                            <span className={styles.category}>{book.categories}</span>
                            <span className={styles.author}>{book.author}</span>
                        </div>
                        
                </div>
            )}
            <button className={styles.back_button} onClick={() => navigate(-1)}>back</button>
        </div>
       </section>
    )
};