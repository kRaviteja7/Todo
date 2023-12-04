import { useState } from "react"

function Todo(){
    const[currentTodo,setCurrentTodo]=useState('')
    const[allTodos,setAllTodos]=useState([])
    const[editIndex,setEditIndex]=useState(undefined)

    const handleChange=(event)=>{
        setCurrentTodo(event.target.value)
    }
    const handleSubmit=()=>{
        if(editIndex!==undefined){
            const array=allTodos.map((todo,index)=>{
                if(index===editIndex) return currentTodo;
                return todo;
            });
            setAllTodos(array)
            setCurrentTodo('')
            setEditIndex(undefined)
        }else{
            const newarray=[...allTodos,currentTodo]
            setAllTodos(newarray)
            setCurrentTodo('')
        }
    }
    const handleEdit=(index)=>{
        setEditIndex(index)
        setCurrentTodo(allTodos[index])
    }
    const handleDelete=(index)=>{
        const fill=allTodos.filter((_,i)=>i!==index)
        setAllTodos(fill)
    }

    return(
        <>
            <input type="text"value={currentTodo} onChange={handleChange}/>
            <button style={{marginTop:10}} onClick={handleSubmit}>Submit</button>
            <table className="table table-dark table-striped-columns">
                <thead>
                    <tr>
                        <td>Index</td>
                        <td>Task</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        allTodos.map((todo,index)=>{
                            return(
                                <tr key={index+1}>
                                    <td>{index+1}</td>
                                    <td>{todo}</td>
                                    <td>
                                        <button onClick={()=>handleEdit(index)}>Edit</button>
                                        <button  onClick={()=>handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Todo