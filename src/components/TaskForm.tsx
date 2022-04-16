import React from 'react';
import styles from './TaskForm.module.css';

interface Props {
    btnText: string
}

const TaskForm = ({btnText}:Props) => {
    return (
        <form className={styles.form}>
        <div className={styles.input_container}>
            <label>Titulo:</label>
            <input type="text" name="title" placeholder="Titulo da tarefa"/>
        </div>
        <div className={styles.input_container}>
            <label>Dificuldade:</label>
            <input type="text" name="dificuldade" placeholder="Dificuldade da tarefa"/>
        </div>
    
        <input type="submit" value={btnText}/>

    </form>
    );
};

export default TaskForm;