import './App.css';
import TodoCount from './Components/TodoCount/TodoCount';
import TodoList from './Components/TodoIList/TodoList';
import CreateButton from './Components/CreateButton/CreateButton';
import TodoItems from './Components/TodoItems/TodoItems';
 
function App() {
  return (
    <div className="App">
  
      
         <TodoCount/> 
         <TodoList>
        <TodoItems />
        </TodoList>
        <CreateButton/>
    </div>
  );
} 
export default App;
