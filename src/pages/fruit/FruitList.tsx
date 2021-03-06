import React, { useState, useEffect, useRef } from 'react'
import { Button, Table, message } from 'antd'
import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';
import { fruitList, removeFruit } from '../../api/fruit'
import { arrayFruitStateKeys, fruitStateType } from '../../types/fruit.type'
import { ColumnsType } from 'antd/lib/table';

// 隐式泛型，避免编译器报错
type pl<T = any> = {
    price: Pick<fruitStateType, 'price'> & T
}

const FruitList = () => {
    // const [loading, setLoading] = useState<boolean>(true)
    const fruitListRef = useRef<any>()
    const [fruits, setFruits] = useState<arrayFruitStateKeys>(
        [
            { id: '', title: '', price: 0, key: '', create_at: '' }
        ]
    )
    const [isUpdate, setIsUpdate] = useState<boolean>(false)

    const columns: ColumnsType<fruitStateType> = [
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
            let { status, result, info } = await fruitList()
            if (status < 0) {
                setFruits([])
                return message.error(info)
            }
            setFruits(result)
        }

        fruitListRef.current()
    }, [])

    

    const search = () => {
        setIsUpdate(true)
        console.log('search')

        setTimeout(() => {
            setIsUpdate(false)
        }, 1000);
    }

    return (
        <>
            <Button 
                onClick={search} 
                type='primary' 
                style={{ marginBottom: 16 }}
                icon={ isUpdate ? <LoadingOutlined /> : <SearchOutlined /> }
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
