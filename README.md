# Открыть проект (https://google-book-psi.vercel.app/books)

## Для запуска приложения из корня проекта установите зависимости с помощью 

### npm i 
    или
### yarn

## Для запуска приложения создайте .env в корне приложения и для REACT_APP_API_KEY добавьте свой ключ gooogle api (`https://developers.google.com/books/docs/v1/using?hl=ru#APIKey`), далее используйте команду 

### npm start 
    или 
### yarn start

## Для сборки 

### npm build 
    или 
### yarn build

## экосистема 
- TypeScript
- ReactJs
- React Router
- redux toolkit, redux-thunk


В приложении реализован поиск книг через сервис google (`https://developers.google.com/books`) с возможностью выбора категории и сортировки, а также возможность подгружать книги и переходить на детальную страницу. С Google API Приходят дубликаты книг, для решения проблем фильрую данные и исключаю повторяющиеся данные по id, totalitem не корректирую, оставляю как есть. При подгрузке данных также повторно фильтрую выходные данные.





