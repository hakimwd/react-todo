import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {

    render() {
        return (
            <div>
            { 
                this.props.items.map( (item) => {
                    return <TodoItem 
                                key={item.id} 
                                todo={item} 
                                markCompleted={ this.props.markCompleted }
                                removeTodo={ this.props.removeTodo }
                            />;
                }) 
            }
            </div>
        );
    }

}

export default Todo;
