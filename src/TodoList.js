import React, {Component} from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const todos = this.props.todos.map(todo => (
			<Todo
				key={todo.id}
				title={todo.title}
				decription={todo.description}
			/>
		));

		return (
			<div>
				{todos.reverse()}
			</div>
		);
	}
}

TodoList.defaultProps = {
	todos: [{
		id: 0,
		title: "learn react",
		description: "go through material and build projects"

	}, {
		id: 1,
		title: "practice problems",
		description: "do practice problems on codefights and codewars"
	
	}],
	nextId: 2
};