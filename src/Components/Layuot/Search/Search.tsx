import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/useReduxHook';
import { changeInputValue, changeSort, changeCategories } from '../../../redux/Reducers/formSlice';
import { Select } from '../../UI/Select/Select';
import { EIcons, Icon } from '../../UI/Icon/Icon';

import { changeQueryParams, fetchBooks } from '../../../redux/Reducers/booksSlice';

import styles from './search.module.css';
import { useNavigate } from 'react-router-dom';
import { ECategories, ESorting } from '../../../models/models';
import { Spiner } from '../../UI/Loader/Spiner';

export function Search() {
    const dispatch = useAppDispatch();
    const inputValue = useAppSelector((state) => state.query.inputValue);
    const selectedSort = useAppSelector((state) => state.query.sort);
    const selectedCategory = useAppSelector((state) => state.query.categories);
    const isLoading = useAppSelector((state) => state.books.isLoading)

    const history = useNavigate();

    function goToBookPage() {
      history(`/books`);
    }
  
    const stateSearch = useAppSelector((state) => state.query);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if(inputValue.length) {
            dispatch(changeQueryParams({
                category: stateSearch.categories,
                sort: stateSearch.sort,
                searchString: inputValue
            }))
            dispatch(fetchBooks(true));
            goToBookPage();
        }
    }

    const handleClear = () => {
        dispatch(changeInputValue(''));
    }

    return (
        <section className={styles.search}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Search for books
                </h1>
                <form 
                    className={styles.form} 
                    onSubmit={handleSubmit} 
                >
                    <div className={styles.input__wrap}>
                    <input  
                        className={styles.input} 
                        type="text"
                        id='search_string'     
                        value={inputValue}
                        name="search_string"
                        onChange={(e) => {dispatch(changeInputValue(e.target.value))}}
                    />
                    <label 
                        className={`${styles.input__label} ${styles.input__label_search}`} 
                        onClick={handleSubmit}
                        htmlFor="search_string"  
                        aria-label="Поиск"
                        >
                            {<Icon name={EIcons.seacrh} />} 
                    </label>
                    <label 
                        className={`${styles.input__label} ${styles.input__label_reset}`} 
                        onClick={handleClear}
                        htmlFor="search_string"  
                        aria-label="Стереть вводимые данные"
                        >
                            {inputValue &&  <Icon name={EIcons.resetInput} />} 
                    </label>
                    </div>
                    <button disabled={isLoading} className={styles.btn__from}>
                        Search
                        {isLoading && <span className={styles.loader}><Spiner/></span>}
                    </button>
                   
                </form>

                <ul className={styles.select__group}>
                    <li className={styles.select__item}>
                        <Select selected={selectedCategory} objectSelectValue={ECategories} action={changeCategories}/>
                    </li>
                    <li className={styles.select__item}>
                        <Select selected={selectedSort} objectSelectValue={ESorting} action={changeSort}/>
                    </li>
                </ul>
            </div>
        </section>
    )
}
