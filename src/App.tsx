import React, { useState } from 'react';
import './App.css';
import styles from './App.module.css';
//components
import Modal from './components/Modal';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//interfaces
import {ITasks} from './interfaces/Tasks';

function App() {

  const [taskList, setTaskList] = useState<ITasks[]>([]);
  
  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    );
  };

  return (
   <div>
     <Modal/>
     <Header/>
     <main className={styles.main}>
       <div>
         <h2>O que você vai fazer?</h2>
         <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
       </div>
       <div>
         <h2>Suas tarefas:</h2>
         <TaskList taskList={taskList} handleDelete={deleteTask} />
       </div>
     </main>
    <Footer/>
     
   </div>
  );
}

export default App;
