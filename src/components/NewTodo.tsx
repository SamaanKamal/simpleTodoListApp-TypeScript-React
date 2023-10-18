const NewTodo =()=>{
    const submitHanlder =(event:React.FormEvent)=>{
        event.preventDefault();
    };
    return (
        <form onSubmit={submitHanlder}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id ="text"></input>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;