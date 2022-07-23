import './App.css';
import './components/todoform'
import TodoList from './components/todolist';


function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
