import React from 'react';
import { ITasks } from '../interfaces/Tasks';

import styles from './TaskList.module.css';
interface Props {
    taskList: ITasks[]
}

const TaskList = ({taskList}:Props) => {
    return (
        <>
        {taskList.length > 0 ? taskList.map((task) => (
            <div key={task.id}>
                <p>{task.title}</p>
            </div>
        )): (<p>Nao ha tarefas cadastradas!</p>)}
        </>
    );
};

export default TaskList;