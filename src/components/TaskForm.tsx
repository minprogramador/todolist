import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from './TaskForm.module.css';

//interfaces
import {ITasks} from '../interfaces/Tasks';

interface Props {
    btnText: string,
    taskList: ITasks[],
    setTaskList?: React.Dispatch<React.SetStateAction<ITasks[]>>,
    task?: ITasks | null,
}

const TaskForm = ({btnText, taskList,setTaskList, task}:Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);

    const addTaskHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000);
        const newTask: ITasks = {id, title, difficulty};

        setTaskList!([...taskList, newTask]);
        setTitle('');
        setDifficulty(0);
        console.log(taskList);
    };

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'title') {
            setTitle(e.target.value);
        }else{
            setDifficulty(parseInt(e.target.value));
        }
    };
    
    useEffect(() => {
        if(task){
            setId(task.id);
            setTitle(task.title);
            setDifficulty(task.difficulty);
        }
    }, [task]);

    return (
        <form onSubmit={addTaskHandler} method="POST" className={styles.form}>
        <div className={styles.input_container}>
            <label>Titulo:</label>
            <input type="text" name="title" placeholder="Titulo da tarefa" onChange={handleChange} value={title}/>
        </div>
        <div className={styles.input_container}>
            <label>Dificuldade:</label>
            <input type="text" name="dificuldade" placeholder="Dificuldade da tarefa"  onChange={handleChange} value={difficulty}/>
        </div>
    
        <input type="submit" value={btnText}/>

    </form>
    );
};

export default TaskForm;