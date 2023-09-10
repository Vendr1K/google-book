export enum ESorting  {
    relevance = 'relevance',
    newest = 'newest',
}

export enum ECategories  {
    all = 'all', 
    art = 'art', 
    biography = 'biography', 
    computers = 'computers', 
    history = 'history', 
    medical = 'medical', 
    poetry = 'poetry',
}

export interface ISearch {
    inputValue: string,
    sort: ESorting,
    categories: ECategories,
}

export interface IBooksState {
    books: IBook[] | [],
    bookDetail: IBook | null,
    seacrhQuery: {
        categoriesSeacrQuery: ECategories,
        sortSearchQuery:  ESorting, 
        qSearchString: string,
        startIndex: number,
    }
    limit: number,
    isLoading: boolean, 
    error: string,
    count: number
}


export interface IBook {
    title: string,
    id: string,
    author: string[],
    categories: string[],
    description: string,
    imageLinks:  IImgLink,
}

interface IImgLink {
    smallThumbnail: string,
    thumbnail: string,
}