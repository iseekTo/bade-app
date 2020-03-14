import React, { useState, useEffect, useRef } from 'react'
import { Button, Table, message } from 'antd'
import { fruitList, removeFruit } from '../../api/fruit'
import { arrayFruitStateKeys, fruitStateType } from '../../types/fruit.type'
import { ColumnProps } from 'antd/lib/table'

type pl = {
    price: Pick<fruitStateType, 'price'> & any
}


const FruitList = () => {
    // const [loading, setLoading] = useState<boolean>(true)
    const fruitListRef = useRef<any>()
    const [fruits, setFruits] = useState<arrayFruitStateKeys>(
        [
            { id: '', title: '', price: 0, key: '', create_at: '' }
        ]
    )

    const columns: ColumnProps<fruitStateType>[] = [
        { title: 'Id', dataIndex: 'id', key: 'id' },
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Price', dataIndex: 'price', key: 'price', sorter: (a: pl, b: pl) => a.price - b.price },
        { title: 'CreateAt', dataIndex: 'create_at', key: 'create_at' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: ({ id }: any) => <p onClick={() => remove(id)}>Delete</p>,
        }
    ]

    const remove = async (id: number) => {
        let { status, info } = await removeFruit(id)
        if (status < 0) return message.warn(info)
        message.success('删除成功')
        fruitListRef.current()
    }
    

    useEffect(() => {
        fruitListRef.current = async () => {
            let { 
                status, 
                result, 
                info,
                total
            } 
            = await fruitList()
            if (status < 0) {
                setFruits([])
                return message.error(info)
            }
            setFruits(result)
        }

        fruitListRef.current()
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
