import axios from "axios";
import { useState } from "react";

import { TodoType } from "../types/todo";

// 全ユーザー一覧を取得するカスタムフック
export const useAllTodos = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const getTodos = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return { todos, getTodos };
};
