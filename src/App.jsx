import './index.css';
import { Form } from './components/Form/Form';
import { Form as FormClass } from './class-components/Form';
import { Count as CountClass } from './class-components/Count';
import { Count } from './components/Count';
import { Child } from './components/Child';
import { useState } from 'react';
// можно переименовать From в FormClass и Count в CountClass

export const App = () => { // именованный экспорт
  const [name, setName] = useState('geek')
  const [count, setCount] = useState(0)
  const arr = ['Иванов', 'Петров', 'Сидоров']
  const handleChangeName = (ev) => {
    setName(ev.target.value);
  };

  return (
    <div className="App">
      <CountClass count={10} /> {/* передаем props */}
      <hr />
      <FormClass />
      <hr />
      <Form />
      <hr />
      <Count name='geekbrains' /> {/* передаем props */}
      <hr />
      <Child name={name} handleChangeCount={setCount} />
      <hr />
      <p>APP</p>
      <input type="text" onChange={handleChangeName} />
      <p>{count}</p>
      {arr.map((item, idx) => <div key={idx}>{item}</div>)}
    </div>
  );
}

