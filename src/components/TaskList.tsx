import React from 'react';
import { ITasks } from '../interfaces/Tasks';

import styles from './TaskList.module.css';
interface Props {
    taskList: ITasks[],
    handleDelete(id:number):void,
    handleEdit():void,
}

const TaskList = ({taskList, handleDelete, handleEdit}:Props) => {
    return (
        <>
        {taskList.length > 0 ? taskList.map((task) => (
            <div key={task.id} className={styles.task}>
                
                <div className={styles.title}>
                    <h4>{task.title}</h4>
                    <p>Dificuldade: {task.difficulty}</p>
                </div> 
                <div className={styles.actions}>
                <span onClick={() => handleEdit()}>Editar</span>
                <span onClick={() => {handleDelete(task.id)}}>Excluir</span>
                </div>   
            </div>            
        )): (<p>Nao ha tarefas cadastradas!</p>)}
        </>
    );
};

export default TaskList;