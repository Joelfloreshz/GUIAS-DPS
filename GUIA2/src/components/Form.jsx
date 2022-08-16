import { getValue } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';
import Todo from '../components/Todo';
const Form = () => {
    const [todos, setTodos]= useState([
    {todo:'todo 1'},
    {todo:'todo 2'},
    {todo:'todo 3'}
    ])

return (
    <>
    {
todos.map((value, index) =>  (<Todo todos={value.todo} />))
    }</>

)
}
export default Form
