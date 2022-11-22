import React from 'react';

export class Form extends React.Component {
    state = {
        name: 'geekbrains',
        arr: ['Иванов', 'Петров', 'Сидоров'],
    }

    handleChangeName = (ev) => {
        this.setState({ name: ev.target.value });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state.name);
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <p>CLASS FORM</p>
            {this.state.arr.map((item, idx) => { // непонятно зачем idx
                return <div key={idx}>{item}</div>
            })}
            <p>{this.state.name}</p>
            <input type="text" onChange={this.handleChangeName} />
            <button>send form</button>
        </form >
    }
}