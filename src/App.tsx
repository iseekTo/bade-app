import React, { useState } from 'react';
import { Button, message, Input } from 'antd'
import './App.css';
import axios from 'axios'

const ax = axios.create()
const baseUrl = 'https://api.weimou.info'

interface fruitStateType {
    title: string
    price: number | string
}

const handleFruit = (body: fruitStateType) => ax.post(`${baseUrl}/fruits/create_fruit`, body)
// const getOneFruit = (id: string) => ax.get(`${baseUrl}/fruits/${id}`)


function App() {
    const [title, setTitle] = useState<string>('')
    const [price, setPrice] = useState<number | string>('')
    const [loading, setLoading] = useState<boolean>(false)

    
    const cleanFruitInput = () => {
        setTitle('')
        setPrice('')
    }

    const submit = async () => {
        setLoading(true)
        let commit = await handleFruit({ title, price, })
        if (commit.status === 200) {
            setLoading(false)
            message.success('新增成功！', 2)
            cleanFruitInput()
            console.log(commit.data, '提交结果')
        }
    }
    

    return (
        <div className="App">
            <h1 style={{ marginTop: '50px' }}>back manage</h1>
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
            
            <Button 
                type="primary" 
                disabled={!title || !price} 
                onClick={submit}
                loading={loading}
            >
                新增水果
            </Button>
        </div>
    );
}

export default App;
