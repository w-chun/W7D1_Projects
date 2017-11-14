import React from 'react';
import allTodos from '../../reducers/selectors';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        { todos.map((todo, i) => (
          <TodoListItem key={ i } todo={ todo } />
        ))}
        <TodoForm receiveTodo={ this.props.receiveTodo }/>
      </ul>
    );
  }
}

export default TodoList;


// <li key={ i }>{ todo.title }</li>
