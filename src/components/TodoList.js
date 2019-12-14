import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../actions/todos';

class TodoList extends React.Component {
  state = {
    todoText: '',
  };

  addTodo = () => {
    this.props.addTodo(
      this.state.todoText
    );

    this.setState({ todoText: '' });
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>

        <input 
          type="text" 
          placeholder="Digite aqui sua todo" 
          value={this.state.todoText}
          onChange={e => this.setState({ todoText: e.target.value })}
        />
        <button onClick={this.addTodo}>Adicionar</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);