import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { filterStateForDuplicate } from "../../utils/filterStateForDuplicate";
import { RootState } from "../store";
import { ECategories, ESorting, IBook, IBooksState } from '../../models/models';
import { LIMIT, URL, KEY } from "../../models/constants";

const initialState: IBooksState = {
    books: [],
    bookDetail: null,
    isLoading: false,
    seacrhQuery: {
        categoriesSeacrQuery:  ECategories.all,
        sortSearchQuery: ESorting.relevance,
        qSearchString: '',
        startIndex: 0
    },
    limit: LIMIT,
    error: '',
    count: 0
}

export const fetchBooks = createAsyncThunk<any, boolean, { state: RootState, rejectValue: string }>(
    'books/fetchBooks',
    async(onSubmit = true, {rejectWithValue, getState, dispatch}) => {
        const {
            seacrhQuery: {
                categoriesSeacrQuery,
                qSearchString,
                sortSearchQuery,
                startIndex
            }
        } = getState().books

        if (onSubmit) dispatch(resetBookState());
            const categoryQuery = categoriesSeacrQuery === 'all' ? '' : `+subject:${categoriesSeacrQuery}`
            const adress = `${URL}?q=+intitle:${qSearchString}${categoryQuery}&orderBy=${sortSearchQuery}&maxResults=${LIMIT}&startIndex=${startIndex}&key=${KEY}`;
        try {
            const response = await fetch(adress);
            if(!response.ok) {
                throw new Error('Server Error');
            }
            const data: any = await response.json();
            const totalCount = data.totalItems;

            const bookInfo = data.items ? 
            data.items.map((bookItem: any) => {
                const book: IBook = {
                    title: bookItem.volumeInfo.title,
                    id: bookItem.id,
                    author: bookItem.volumeInfo.authors,
                    categories: bookItem.volumeInfo.categories,
                    description: bookItem.volumeInfo.description,
                    imageLinks: bookItem.volumeInfo.imageLinks ?? {smallThumbnail: '', thumbnail: ''}
                } 
                return book;
            })
            :
            [];

            if(onSubmit) {
                return {
                    bookInfo,
                    totalCount
                }
            } else {
                return {bookInfo}
            }

        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchDeatilsBook = createAsyncThunk<any, string, { state: RootState, rejectValue: string }>(
    'books/fetchDeatilsBook',
    async( id, {rejectWithValue}) => {
            const adress = `${URL}/${id}`
        try {
            const response = await fetch(adress)
            if(!response.ok) {
                throw new Error('Server Error')
            }
            const data: any = await response.json();
            console.log(data,'detailsBook')
            const book: IBook = {
                        title: data.volumeInfo.title,
                        id: data.id,
                        author: data.volumeInfo.authors,
                        categories: data.volumeInfo.categories,
                        description: data.volumeInfo.description,
                        imageLinks: data.volumeInfo.imageLinks ?? {smallThumbnail: '', thumbnail: ''}
                    } 
            return book
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)



export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        resetBookState(state) {
            return {
                ...state,
                books: []
            }
        },
        changeQueryParams(state, action: PayloadAction<{category: ECategories, sort: ESorting, searchString: string}>) {
            state.seacrhQuery.categoriesSeacrQuery = action.payload.category;
            state.seacrhQuery.sortSearchQuery = action.payload.sort;
            state.seacrhQuery.qSearchString = action.payload.searchString;
            state.seacrhQuery.startIndex = 0;
        },
        changeStepLoad(state,) {
            state.seacrhQuery.startIndex += LIMIT
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state, action) => {
            state.isLoading = true;
            state.error = '';
            // state.books = action.payload
        });
        builder.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = '';
            state.books = filterStateForDuplicate([...state.books, ...action.payload.bookInfo]);
            state.count = action.payload.totalCount ?? state.count
        });
        builder.addCase(fetchBooks.rejected, (state, action: any) => {
          state.isLoading = false;
          state.error = action.payload
        });
        

        builder.addCase(fetchDeatilsBook.pending, (state, action) => {
            state.isLoading = true;
            state.error = '';
            // state.books = action.payload
        });
        builder.addCase(fetchDeatilsBook.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = '';
            state.bookDetail = action.payload
        });
        builder.addCase(fetchDeatilsBook.rejected, (state, action: any) => {
          state.isLoading = false;
          state.error = action.payload
        });
    }
})

export const {
    changeQueryParams,
    changeStepLoad,
    resetBookState
} =  booksSlice.actions

export default booksSlice.reducer