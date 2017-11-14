import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  linkState(key) {
    return (event => this.setState({ [key]: event.currentTarget.value }));
  }

  addToDo() {
    return () => {
      const newTodo = {};
      newTodo['title'] = this.state.title;
      newTodo['body'] = this.state.body;
      this.props.receiveTodo(newTodo);
    };
  }

  render() {
    return (
      <div>
        <input
          onChange={ this.linkState('title') }
          value={ this.state.title } />
        <textarea
          onChange={ this.linkState('body') }
          value={ this.state.body } />
        <input
          type='submit'
          onClick={ this.addToDo() }
          value='submit' />
      </div>
    );
  }

}

export default TodoForm;
