import React, { useState } from 'react';
import { Button, message, Input } from 'antd'
import './App.css';
import axios from 'axios'

const ax = axios.create()
const baseUrl = 'http://localhost:10101'

interface fruitStateType {
    title: string
    price: number | string
}

const handleFruit = (body: fruitStateType) => ax.post(`${baseUrl}/fruits/create_fruit`, body)
// const getOneFruit = (id: string) => ax.get(`${baseUrl}/fruits/${id}`)


function App() {
    const [title, setTitle] = useState<string>('')
    const [price, setPrice] = useState<number | string>('')

    
    const submit = async () => {
        let commit = await handleFruit({ title, price, })
        commit.status === 200 && message.success('新增成功！', 2)
        console.log(commit.data, '提交结果')
    }


    return (
        <div className="App">
            <h1 style={{ marginTop: '50px' }}>后台管理</h1>
            <Input
                type='text'
                value={title}
                placeholder='水果名称'
                onChange={e => setTitle(e.target.value)}
                style={{ width: '200px' }}
            />

            <Input
                type='number'
                prefix='￥'
                suffix='RMB'
                value={price}
                placeholder={`${title || '水果'}价格`}
                onChange={e => setPrice(e.target.value)}
                style={{ width: '200px' }}
            />
            
            <Button type="primary" disabled={!title || !price} onClick={submit}>新增水果</Button>
        </div>
    );
}

export default App;
