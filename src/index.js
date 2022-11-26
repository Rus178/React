import React from 'react'; // импортируется библиотека
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App'; // именованный импорт

// const span = React.createElement('span', {}, 'Im span'); // то, что хотим передать в тэге

// const element = React.createElement('h1', { // создаем element и передаем тип элемента (h1), 
//   className: 'my-class', // атрибуты (className),
// }, span); // то, что хотим передать в тэге(span создали выше)

// const Element = () => { // с большой буквы
//     return <div>My first page</div>
// }

const root = ReactDOM.createRoot(document.getElementById('root')); // index.html
root.render(<App />);
// root.render(element); // передаем элемент сюда
// root.render(<Element />); // передаем элемент сюда

