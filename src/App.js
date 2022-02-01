//import './App.css';
import {TodoItem} from '../src/components/TodoItem'
import {TodoCounter} from '../src/components/TodoCounter';
import {CreateTodoButton} from '../src/components/CreateTodoButton';
import {TodoList} from '../src/components/TodoList';
import {TodoSearch} from '../src/components/TodoSearch';


const todos = [
  { text : 'Cortar cebolla', completed: false },
  { text : 'Tomar el curso de a intro', completed: true },
  { text : 'llorar con la llorona', completed: false },
  { text : 'estoy en la cima de una montaña', completed: false }
];

function App() {
  return (
    <>
    <TodoCounter/>
    <TodoSearch />

    <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export default App;
