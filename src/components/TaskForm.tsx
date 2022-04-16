import React from 'react';

interface Props {
    btnText: string
}

const TaskForm = ({btnText}:Props) => {
    return (
        <form>
        <div>
            <label>Titulo:</label>
            <input type="text" name="title" placeholder="Titulo da tarefa"/>
        </div>
        <div>
            <label>Dificuldade:</label>
            <input type="text" name="dificuldade" placeholder="Dificuldade da tarefa"/>
        </div>
    
        <input type="submit" value={btnText}/>

    </form>
    );
};

export default TaskForm;