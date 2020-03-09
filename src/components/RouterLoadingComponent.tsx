import React, { FC, useEffect, useState } from 'react'
import { Spin } from 'antd';


interface loadingProps {
    isLoading?: boolean
    error?: string | any
}

const loadStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh'
}

const RouterLoadingComponent = ({ isLoading = true, error }: loadingProps) => {
    const [loading, setLoading] = useState(isLoading)


    useEffect(() => {
        setLoading(false)

        return () => setLoading(false)
    }, [])


    if (isLoading) {
        return (
            <div style={loadStyle}>
                <Spin spinning={isLoading} tip='疯狂加载中！！！'></Spin>
            </div>
        );
    }
    else if (error) {
        console.log(error)
        return <div>抱歉，页面可能出现一些错误</div>;
    }
    else {
        return null;
    }

};

export default RouterLoadingComponent
