import React from 'react'

const AddTask = ({newFootballer, setNewFootballer, handleSubmit}) => {

    return (
        <section className="container mt-5 pt-5">
            <form className="w-100 form-horizontal" onSubmit={handleSubmit}>
                <label htmlFor="AddTask" className="form-label text-white bg-dark rounded-2 p-1 d-flex align-items-center justify-content-center col-lg-1 mt-3">Add Task</label>
                <div className="input-group mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="AddTask" 
                    placeholder="Add Task" 
                    autoFocus 
                    required 
                    value={newFootballer} 
                    onChange={(e) => setNewFootballer(e.target.value)} />

                    <span className="input-group-text btn-danger bg-gradient" id="basic-addon2">
                        <button type="submit" className="btn btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </button>

                    </span>
                </div>
            </form>
        </section>
    )
}

export default AddTask
