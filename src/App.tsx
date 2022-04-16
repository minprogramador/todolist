import React, { useState } from 'react';
import './App.css';
import styles from './App.module.css';
//components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//interfaces
import {ITasks} from './interfaces/Tasks';

function App() {

  const [taskList, setTaskList] = useState<ITasks[]>([]);

  return (
   <div>
     <Header/>
     <main className={styles.main}>
       <div>
         <h2>O que você vai fazer?</h2>
         <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
       </div>
       <div>
         <h2>Suas tarefas:</h2>
         <TaskList/>
       </div>
     </main>
    <Footer/>
     
   </div>
  );
}

export default App;
