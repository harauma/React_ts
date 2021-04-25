import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";
import { useAllTodos } from "./hooks/useAllTodos";
import { Todo } from "./Todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { UserCard } from "./components/UserCard";

const userInfo = {
  name: "サンプル",
  hobbies: ["映画", "ゲーム"]
};

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const { todos, getTodos } = useAllTodos();

  const onClickFetchData = () => getTodos();

  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <UserProfile user={userInfo} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
