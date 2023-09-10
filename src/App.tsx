
import {Routes, Route} from 'react-router-dom';
import { BooksPage } from "./Components/Content/BooksPage";
import { NotFoundPage } from './Components/Content/NotFoundPage';
import { Layout } from './Components/Layuot';
import { BookPageDetail } from './Components/Content/BooksPage/BookPageDetail';
import './styles.module.css';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path='/books' element={<BooksPage/>} />
              <Route path="books/:id" element={<BookPageDetail/>} />
              <Route path="*"element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App;
