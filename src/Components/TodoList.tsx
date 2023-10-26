import {
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type Todo = {
  id: number;
  text: string;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState("");
  const location = useLocation();
  const userId = location.state.userId;

  const myTodoList = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/${userId}/todos`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.todos);
         const alltodos=  data.todos;
         alltodos.map((item:any)=>{
            console.log(item.todo)
            setTodos([...todos,{id:item.id,text:item.todo}])
         })
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  console.log(todos);
  useEffect(() => {
    myTodoList();
  }, [userId]);

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: todoText,
    };
    setTodos([...todos, newTodo]);
    setTodoText("");
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <Stack margin={5} width="600px">
      <Paper elevation={3}>
        <div style={{ padding: 16 }}>
          <TextField
            label="Add a new todo"
            variant="outlined"
            fullWidth
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTodo}
            style={{ marginTop: 16 }}
          >
            Add
          </Button>
        </div>
      </Paper>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <Button
                // edge="end"
                aria-label="delete"
                onClick={() => handleDeleteTodo(todo.id)}
                color="error"
              >
                Delete
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default TodoList;
