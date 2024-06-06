function ToDoList({ tasks, setTasks }) {
    
    const handleComplete = (id) => {
        const listTasks = tasks.map((task) => task.id === id ? { ...task, complete: !task.complete } : task)
        setTasks(listTasks)
        localStorage.setItem('tasks', JSON.stringify(listTasks))
        //console.log(listTasks)
    }

    const handleDelete = (id) => {
        const listTasks = tasks.filter((task) => task.id !== id)
        setTasks(listTasks)
        localStorage.setItem('tasks', JSON.stringify(listTasks))
    }

    if (tasks.length) {
        return <main className="container">
            {
                tasks.map((task) => (
                    task.complete ?
                        <div className="card shadow p-3 mb-5" key={task.id}
                            style={{
                                backgroundColor: "#00ff80"
                            }}>
                            <div className="card-body">
                                <span className="card-title">{task.taskName}</span>
                                &nbsp;<span className="badge bg-success">Completed</span>
                                <br />
                                <button type="button" className="btn btn-danger delete"
                                    onClick={() => handleDelete(task.id)}>Delete Task</button>
                            </div>
                        </div>
                        :
                        <div className="card shadow p-3 mb-5" key={task.id}
                            style={{
                                backgroundColor: "#FAEBD7"
                            }}>
                            <div className="card-body">
                                <span>{task.taskName}</span>&nbsp;
                                <span className="badge bg-warning">Pending</span><br />
                                <button type="button" className="btn btn-success complete"
                                    onClick={() => handleComplete(task.id)}>Complete Task</button>
                                <button type="button" className="btn btn-danger delete"
                                    onClick={() => handleDelete(task.id)}>Delete Task</button>
                            </div>
                        </div>

                ))
            }
        </main>
    }
    else {
        return <main>
            <div className="card noTask container shadow p-3 mb-5">
                <p>Yaay!! You have no pending tasks &#128512;</p>
            </div>
        </main>
    }
}

export default ToDoList
