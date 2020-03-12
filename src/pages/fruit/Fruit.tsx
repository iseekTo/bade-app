import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Button, message, Input } from 'antd'
import { addFruit } from '../../api/fruit'
import { inputBoxType } from '../../types/event.type'



const Fruit = () => {
    const [title, setTitle] = useState<string>('')
    const [price, setPrice] = useState<number | string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const history = useHistory()
    
    const cleanFruitInput = () => {
        setTitle('')
        setPrice('')
    }

    const submit = async () => {
        setLoading(true)
        let commit = await addFruit({ title, price, })
        console.log(commit, 'eeee');
        
        if (commit !== null) {
            setLoading(false)
            message.success('新增成功！', 1)
                // @ts-ignore
                .then(() => {
                    cleanFruitInput()
                    history.push('/fruit/list')
                })
            
        }
    }
    
    
    return (
        <>
            <h1 style={{ marginTop: '50px' }}>back manage</h1>
            <Input
                type='text'
                value={title}
                placeholder='水果名称'
                onChange={(e: inputBoxType)=> setTitle(e.target.value)}
                style={{ width: '200px' }}
            />

            <Input
                type='number'
                prefix='￥'
                suffix='RMB'
                value={price}
                placeholder={`${title || '水果'}价格`}
                onChange={(e: inputBoxType) => setPrice(e.target.value)}
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
        </>
    )
}

export default Fruit
