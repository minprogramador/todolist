import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from './TaskForm.module.css';

//interfaces
import {ITasks} from '../interfaces/Tasks';

interface Props {
    btnText: string
}

const TaskForm = ({btnText}:Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);

    const addTaskHandler = () => {
        
    };

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'title') {
            setTitle(e.target.value);
        }else{
            setDifficulty(parseInt(e.target.value));
        }
    };

    return (
        <form onSubmit={addTaskHandler} method="POST" className={styles.form}>
        <div className={styles.input_container}>
            <label>Titulo:</label>
            <input type="text" name="title" placeholder="Titulo da tarefa" onChange={handleChange}/>
        </div>
        <div className={styles.input_container}>
            <label>Dificuldade:</label>
            <input type="text" name="dificuldade" placeholder="Dificuldade da tarefa"  onChange={handleChange}/>
        </div>
    
        <input type="submit" value={btnText}/>

    </form>
    );
};

export default TaskForm;