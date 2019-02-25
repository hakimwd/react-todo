import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    };

    onChange = (e) => {
        // set state to value
        const title = e.target.value;
        this.setState({ title: title });
    }

    submitTodo = (e) => {
        // prevent default behavior: submit load server
        e.preventDefault();

        // trigger add todo
        this.props.addTodo(this.state.title);

        // clear input
        this.setState({ title: '' });
    }

    render() {
        return (
            <div>
                <form style={{ display: 'flex' }} onSubmit={ this.submitTodo.bind(this) }>
                <input style={ inputStyle } type="text" placeholder="Add todo..." value={ this.state.title } onChange={ this.onChange.bind(this) }  />
                <button style={ buttonStyle }  type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const buttonStyle = { flex:'1', border: '0', padding: '10px 7px', backgroundColor: '#888', color: '#fff'  };
const inputStyle = { flex:'10', border: '0', padding: '10px 7px' };

export default AddTodo
