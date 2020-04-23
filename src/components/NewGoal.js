import React, { useState } from 'react';
import './NewGoal.css';

const NewGoal = props => {
    const [inputText, setInputText] = useState('');

    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
           id: Math.random().toString(),
           text:  inputText
        };

        setInputText('');

        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event =>{
        setInputText(event.target.value);
    };

    return (
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value={inputText} onChange={textChangeHandler}/>
        <button type="submit">Add Goal</button>
    </form>
    );
};


export default NewGoal;