import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ECategories, ESorting, ISearch } from '../../models/models'

const initialState: ISearch = {
    inputValue: '',
    sort: ESorting.relevance,
    categories: ECategories.all,
}

export const formSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeInputValue (state, action) {
            state.inputValue = action.payload
        },
        changeSort (state, action: PayloadAction<ESorting>) {
            state.sort = action.payload
        },
        changeCategories (state, action: PayloadAction<ECategories>){
            state.categories = action.payload
        }
    },
})

export const {
    changeInputValue,
    changeSort,
    changeCategories,
} = formSlice.actions

export default formSlice.reducer;