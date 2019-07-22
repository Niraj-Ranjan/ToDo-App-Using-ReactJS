import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-primary text-white">
                                <i className="fa fas fa-book"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Enter Your Work" aria-label="Username" aria-describedby="basic-addon1"
                            value = {item}
                            onChange={handleChange}>
                        </input>
                    </div>
                    <button type="submit" className= {
                        editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"
                    }> 
                    {editItem ? "Edit Task" : "Add Task"} 
                       </button>
                </form>
            </div>

        )
    }
}
