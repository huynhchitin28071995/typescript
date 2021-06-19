import axios from 'axios';

const url ='https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    // console.log(response.data);
    const todo = response.data as Todo;
    const ID = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    console.log(`
        The TODO with ID: ${ID}
        Has the title of: ${title}
        Is it finished? ${finished}
    `)
});