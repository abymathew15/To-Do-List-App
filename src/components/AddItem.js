import { useState } from 'react'

function AddItem({ tasks, setTasks }) {
    const [newTask, setNewTask] = useState('');

    const addTask = (task) =>{
        let newID = 1;
        if(tasks.length){
            newID = tasks[tasks.length-1].id+1;
        }
        const finalNewTask = {
            id:newID,
            isEdit:false,
            complete:false,
            taskName:task,
            description:'Test Description'
        }
        console.log(finalNewTask)
        const listTasks = [...tasks,finalNewTask]
        setTasks(listTasks)
        localStorage.setItem('tasks',JSON.stringify(listTasks))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        addTask(newTask)
        setNewTask('')
    }

    return <div className="AddItem">
        <div className='hover'>
            <p>What do you want to do today?</p>
            <form onSubmit={handleSubmit} className='addtask d-flex justify-content-center col-md-5'>
                <input type='text' placeholder='Add a task' className="form-control" value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>&nbsp;&nbsp;
                <button type='submit' className='btn btn-primary'>Add</button>
            </form>
        </div>
    </div>
}

export default AddItem