import { Link } from "react-router-dom";
import { LIMIT } from "../../../models/constants";
import { IBook } from "../../../models/models";
import { changeStepLoad, fetchBooks } from "../../../redux/Reducers/booksSlice";
import { useAppDispatch, useAppSelector } from '../../../redux/useReduxHook';
import { Spiner } from "../../UI/Loader/Spiner";
import styles from './booksPage.module.css'

export function BooksPage() {
    const dispatch = useAppDispatch();
    const booksInfo = useAppSelector((state) => state.books);
    const isLoading = useAppSelector((state) => state.books.isLoading)

    const errorMessange = useAppSelector((state) => state.books.error)
    
    const handleLoad = () => {
        dispatch(changeStepLoad());
        dispatch(fetchBooks(false));
    }

    return (
        <section className={styles.books}>
             <div className={styles.container}>
                <div className={styles.total_count}> Total books search {booksInfo.count}</div>
            
                <ul className={styles.list}>
                    {booksInfo.books.map((book : IBook) => {
                        return ( 
                            <li  key={book.id} className={styles.item}>
                                <Link to={`/books/${book.id}`}>
                                    <div  className={styles.item_img}>
                                        {
                                            book.imageLinks.smallThumbnail ? 
                                            ( <img src={`${book.imageLinks.smallThumbnail}`} alt="" />) :
                                            <span>Not image</span>
                                        }
                                    </div>
                                    <div className={styles.item__info}>
                                        <h3 className={styles.item__info__title} >{book.title}</h3>
                                        <span  className={styles.item__info__category} >{book.categories ? book.categories[0] : ''}</span>
                                        <span className={styles.item__info__author} >{
                                            book.author.length > 1 ? book.author.join(', ') : book.author
                                        }</span>
                                    </div>
                                </Link>
                            </li>
                        )})}
                </ul>

                {booksInfo.books.length > 0 && <button className={styles.button} onClick={handleLoad} disabled={booksInfo.seacrhQuery.startIndex + LIMIT >= booksInfo.count || isLoading}> Load more {isLoading && <span className={styles.loader}><Spiner/></span>} </button>}
                {!isLoading && !booksInfo.books.length && booksInfo.seacrhQuery.qSearchString && <h3 style={{marginTop: '20px'}}>On request {booksInfo.seacrhQuery.qSearchString} {booksInfo.seacrhQuery.categoriesSeacrQuery !== 'all' ? `category ${booksInfo.seacrhQuery.categoriesSeacrQuery}`: ''} not found</h3>}
                {errorMessange && <div style={{color: 'var(--red-color)'}}>{errorMessange}</div>}
            </div>
        </section>
       
    )
}