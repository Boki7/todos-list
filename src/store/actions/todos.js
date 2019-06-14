import axios from "axios";

export const handleAddTodo = formValues => {
  return {
    type: "ADD_TODO",
    formValues
  };
};

export const handleDeleteTodo = id => {
  return {
    type: "DELETE_TODO",
    payload: id
  };
};

export const handleCheckTodo = id => {
  return {
    type: "CHECK_TODO",
    payload: id
  };
};

export const getTodos = todos => {
  return {
    type: "GET_TODOS",
    todos: todos
  };
};

export const checkTodo = todo => {
   return async dispatch => {
    const response = await axios.patch(`https://todolist-b3ae6.firebaseio.com/todos/${todo.id}.json`, todo);
    
    dispatch(handleCheckTodo(response.data.id));
  }
  
}

export const deleteTodo = id => {
  return async dispatch => {
    await axios.delete(`https://todolist-b3ae6.firebaseio.com/todos/${id}.json`, id);
    dispatch(handleDeleteTodo(id))
  };
};

export const fetchTodos = () => {
  return async dispatch  => {
    let updatedTodos;
    const response = await axios.get(
      "https://todolist-b3ae6.firebaseio.com/todos.json"
    );

    if(response.data){
      updatedTodos = Object.entries(response.data).map(obj => {
        return {
          ...obj[1],
          id: obj[0]
        }
      })
      dispatch(getTodos(updatedTodos));
    }  
  };
};

export const addTodo = formValues => {
  return async dispatch => {
    const todo = {
      ...formValues,
      isTouched: false
    };
    const response = await axios.post(
      "https://todolist-b3ae6.firebaseio.com/todos.json",
      todo
    );
    
    const todoItem = {
      id: response.data.name,
      ...JSON.parse(response.config.data)      
    }
    dispatch(handleAddTodo(todoItem));
  };
};
