import React from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoList from './component/TodolistComponent';
import EditTodo from './component/edittodo';
import CreateTodo from './component/createtodo';

function App() {
  return (
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">MERN ToDo App</Link>
        <div className="collpase nav-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Todos</Link>  
            </li>
            <li className="navbar-item">
              <Link to="/createtodo" className="nav-link">Create Todo</Link>  
            </li>
          </ul>
        </div>
      </nav>
       
      <Route exact path="/" component={TodoList} />
      <Route exact path="/edit/:id" component={EditTodo} />
      <Route exact path="/createtodo" component={CreateTodo} />
    </div>
    </Router>
  );
}

export default App;
