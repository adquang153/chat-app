import React, { useEffect, useState } from 'react'
import axios from 'axios';
import openSocket, { Socket } from "socket.io-client";
import { Button, Card, CardBody, CardFooter, CardGroup, CardHeader, CardText, CardTitle, Form, FormGroup, Input } from 'reactstrap';
import './index.css';
import ChatItem from './../ChatItem';

export default function PublicChat() {

    const [msg, setMsg] = useState({
        content: ''
    });
    const socket = openSocket('http://localhost:4000');

    useEffect(() => {
        socket.on('chat', data => {
            alert(data.content);
        });
    });

    const setNull = () => {
        setMsg({
            content: ''
        });
    }

    const chatSubmit = (e) => {
        e.preventDefault();
        socket.emit('chat', msg);
        setNull();
    }

    const handleChange = (e) => {
        const content = { [e.target.name]: e.target.value };
        setMsg({ ...msg, ...content });
    }

    return (
        <Card className="w-100">
            <CardHeader>
                <CardTitle className="mb-0 "><span>Chat</span></CardTitle>
            </CardHeader>
            <CardBody className="chat-body" tag="ul">
                <ChatItem content={'a'} me={false} />
                <ChatItem content={'b'} me={true} />
            </CardBody>
            <CardFooter>
                <Form id="form-chat" className="form-inline" onSubmit={chatSubmit}>
                    <FormGroup className="w-100 d-flex justify-content-between">
                        <Input name="content" type="text" className="w-75" value={msg.content} onChange={handleChange} />
                        <Button>Submit</Button>
                    </FormGroup>
                </Form>
            </CardFooter>
        </Card>
    )
}
