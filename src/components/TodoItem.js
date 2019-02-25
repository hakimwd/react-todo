import React, {Component} from 'react';

class TodoItem extends Component {

    state = {
        clearButtonHovered: false
    }

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    render() {
        const {id, title, completed} = this.props.todo;

        return (
            <div style={ this.getStyle() }>
                <input 
                    type="checkbox" 
                    checked={ completed ? 'checked' : ''} 
                    onChange={ this.props.markCompleted.bind(this, id) }
                />
                { title }
                <button className="btn" style={ clearTodoButtonStyle } onClick={ this.props.removeTodo.bind(this, id) }>x</button>
            </div>
        );
    }

}

const clearTodoButtonStyle = {
    background: '#f00',
    border: '0px',
    float: 'right',
    color: '#fff',
    borderRadius: '50%'
};



export default TodoItem;