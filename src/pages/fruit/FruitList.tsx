import React, { useState, useEffect } from 'react'
import { Button, Table, message } from 'antd'
import { fruitList } from '../../api/fruit'
import { fruitStateType } from '../../types/fruit.type'
import { returnParams } from '../../types/event.type'

type appendType = {
    readonly _id: string
    readonly key: string
}
type fruitsType = Array<fruitStateType & appendType>



const FruitList = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [fruits, setFruits] = useState<fruitsType>(
        [
            { _id: '', title: '', price: 0, key: '' }
        ]
    )

    const columns = [
        { title: 'Id', dataIndex: '_id', key: '_id' },
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <p>Delete</p>,
        },
    ]
    

    useEffect(() => {
        const fetchList = async () => {
            let { 
                status, 
                total, 
                result, 
                info 
            }: returnParams<fruitsType> & { total?: number } 
            = await fruitList()
            if (status < 0) {
                setFruits([])
                return message.error(info)
            }
            setFruits(result)
        }

        fetchList()
    }, [])

    

    const search = () => {
        console.log('search')
        
    }

    return (
        <>
            <Button 
                onClick={search} 
                type="primary" 
                style={{ marginBottom: 16 }}
            >
                search
            </Button>
            <Table 
                columns={columns} 
                dataSource={fruits} 
            />
        </>
    )
}

export default FruitList
