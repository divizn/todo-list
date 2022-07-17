import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';


export default function Todo() {
    const paperStyle={padding:'50px 20px', width:600, margin:'20px auto'};
    const[name, setName] = React.useState('');
    const[message, setMessage] = React.useState('');
    const[todos, setTodos] = React.useState([]);

    const handleClick=(e)=>{
        e.preventDefault()
        const todo={name, message}
        console.log(todo)
        fetch("http://localhost:8080/todo/add",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(todo)

    }).then(()=>{
        console.log("New todo added")
    }) 
}

React.useEffect(()=>{
    fetch("http://localhost:8080/todo/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setTodos(result);
    }
    )
},[])

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Add todo item</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" fluid label="User name" variant="outlined"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" fluid label="Todo message" variant="outlined"
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
      />
    </Box>
    <Button variant="contained"
    onClick={handleClick}>
    Submit
    </Button>
    </Paper>
    <h1 style={{color:"blue"}}>Todo list</h1>
    <Paper elevation={3} style={paperStyle}>

        {todos.map(todo=>(
            <Paper elevation={6} style={{margin:'10px', padding:'15px', textAlign:'left'}}>
                Id:{todo.id}<br/>
                Name:{todo.name}<br/>
                Message:{todo.message}
            </Paper>
        )
        )}
    </Paper>
    </Container>
  );
}
