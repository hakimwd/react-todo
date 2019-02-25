import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import uuid from 'uuid';

class App extends Component {

    state = {
      todos: [
        {
          id: uuid.v4(),
          title: 'learn a thing',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'learn react js',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'made an app a day',
          completed: false
        },
        {
          id: uuid.v4(),          
          title: 'documentation for the app',
          completed: false
        },
        {
          id: uuid.v4(),          
          title: 'check tutorial for revision',
          completed: false
        },
        {
          id: uuid.v4(),          
          title: 'deposit RM10.00',
          completed: false
        }
      ]
    };

    markCompleted = (id) => {
      this.setState({ todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
           todo.completed = !todo.completed
        }

        return todo; 
      }) });
    }

    addTodo = (title) => {      
      // set add todo object
      const newTodo = {
        id: uuid.v4(),        
        title: title,
        completed: false  
      }

      // append on todos collection      
      this.setState({ todos: [...this.state.todos, newTodo] });
    }

    
    removeTodo = (id) => {
      this.setState({ todos: [...this.state.todos].filter((todo) => {
        if (todo.id === id) { 
          return; 
        } 
        return todo;
        }) 
      });
    }

    render() {
      return (
        <Router>
          <div className="App">
              <Header />

              <Route exact path="/" render={ props => (
                <React.Fragment>
                <AddTodo addTodo={ this.addTodo } />
                <Todo items={ this.state.todos } markCompleted={ this.markCompleted } removeTodo={ this.removeTodo } />
                </React.Fragment>
              )} />
              
              <Route path="/about" component={ About } />

              <Route path="/contact" component={ Contact } />
          </div>
        </Router>
      );
    }
}

export default App;
