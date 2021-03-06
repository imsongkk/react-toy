import React,{Component, useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        });
    };
    return(
        <div>
            <h1>이벤트 연습</h1>
            <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            />
            <input
            type="text"
            name="message"
            value={message}
            onChange={onChange}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice;