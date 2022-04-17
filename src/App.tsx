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
  const [taskToUpdate, setTaskToUpdate] = useState<ITasks | null>(null);
  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    );
  };

  const editTask =(task: ITasks):void =>{
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  const hideOrShowModal = (display:boolean) => {
    const modal = document.querySelector("#modal");
    if(display){
      modal!.classList.remove("hide");
    }else{
      modal!.classList.add("hide");
    }
  };

  return (
   <div>
     <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList} task={taskToUpdate}/>}/>
     <Header/>
     <main className={styles.main}>
       <div>
         <h2>O que você vai fazer?</h2>
         <TaskForm btnText="Criar Tarefa" task={taskToUpdate} taskList={taskList} setTaskList={setTaskList}/>
       </div>
       <div>
         <h2>Suas tarefas:</h2>
         <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
       </div>
     </main>
    <Footer/>
     
   </div>
  );
}

export default App;
