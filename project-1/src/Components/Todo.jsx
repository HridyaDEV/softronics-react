import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, completeTodo, editTodo, deleteTodo } from '../redux/todoSlice';

const Todo = () => {
    const [task, setTask] = useState('');
    const [editing, setEditing] = useState(null);
    const [newText, setNewText] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (task.trim()) {
            dispatch(addTodo(task));
            setTask(''); 
        }
    };

    const handleEdit = (index) => {
        if (newText.trim()) {
            dispatch(editTodo({ index, newText }));
            setEditing(null);
            setNewText('');
        }
    };

    const handleDelete = (index) => {
        dispatch(deleteTodo(index));
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h1>TO-DO LIST</h1>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Add a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={{ padding: '5px', marginRight: '5px' }}
                />
                <button type="button" onClick={handleAdd} style={{ padding: '5px' }}>
                    Add
                </button>
            </div>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {todos.map((todo, index) => (
                    <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        {editing === index ? (
                            <>
                                <input
                                    type="text"
                                    value={newText}
                                    onChange={(e) => setNewText(e.target.value)}
                                    style={{ padding: '5px', marginRight: '5px' }}
                                />
                                <button
                                    type="button"
                                    onClick={() => handleEdit(index)}
                                    style={{ padding: '5px', marginRight: '5px' }}
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEditing(null)}
                                    style={{ padding: '5px' }}
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <span
                                    style={{
                                        textDecoration: todo.completed ? 'line-through' : 'none',
                                        flex: 1,
                                    }}
                                >
                                    {todo.text}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => dispatch(completeTodo(index))}
                                    style={{ padding: '5px', marginRight: '5px' }}
                                >
                                    {todo.completed ? 'Undo' : 'Complete'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEditing(index)}
                                    style={{ padding: '5px', marginRight: '5px' }}
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(index)}
                                    style={{ padding: '5px' }}
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
