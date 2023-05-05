import './App.css';
import TodoCount from './Components/TodoCount/TodoCount';
import TodoList from './Components/TodoIList/TodoList';
import CreateButton from './Components/CreateButton/CreateButton';
import TodoItems from './Components/TodoItems/TodoItems';
import Search from './Components/Search/Search';
import React from 'react';
const ToDOItems = [
  {action: "Trotar 10 minutos",completed: false},
  {action: "Estudiar React",completed: false},
  {action: "Estudiar Ingles",completed: true},
  {action: "Meditar",completed: true}, 
];
function App() {
  return (
    <>
        <TodoCount completed={16} total={26}/> 
        <Search/>
        <TodoList>
         {ToDOItems.map(i =>(
          <TodoItems key={i.action} action= {i.action} status = {i.completed}/>
         ))}
        </TodoList>
        <CreateButton/>
    </>
  );
} 
export default App;
