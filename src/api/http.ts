import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { parse } from 'querystring'
import { message } from 'antd'


interface HttpRequest {
    <T = any>(url: string, data: T, config?: Partial<AxiosRequestConfig>): Promise<T>
}

// instance.defaults.headers.common['Authorization'] = ''

class Http {
    protected service: any = axios
    protected axiosRequestConfig: Partial<AxiosRequestConfig> = {}
    private static _instance: Http

    private constructor() {
        this.requestConfig()
        this.service = axios.create(this.axiosRequestConfig)
        this.inteceptorRequest()
        this.interceptorsResponse()
    }

    //-- 初始化axios实例 --
    protected requestConfig(): void {
        this.axiosRequestConfig = {
            baseURL: 'https://api.weimou.info',
            timeout: 3000
        }
    }

    //-- 单例 --
    public static getInstance(): Http {
        this._instance || (this._instance = new Http())
        return this._instance
    }

    //-- 请求 --
    protected inteceptorRequest() {
        this.service.interceptors.request.use((config: Partial<AxiosRequestConfig>) => {
            // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            return {
                ...config,
                params: {
                    ...(config.params || {}),
                }
            }
        }, (err: any) => {
            console.error('inteceptor--Request', err);

            if (err.toString().includes('timeout')) {
                message.error('服务器请求超时😢')
            }
            return Promise.reject(err)
        })
    }

    //-- 响应 --
    protected interceptorsResponse() {
        this.service.interceptors.response.use((response: AxiosResponse) => {
            this.responseLog(response)

            if (response && response.data) {
                return Promise.resolve(response.data);
            }
        }, (err: any) => {
            console.error('【interceptors--Response】', err);
            if (err.toString().includes('timeout')) {
                message.error('服务器请求超时😢')
            }
            return Promise.reject(err)
        })
    }

    protected responseLog(response: any) {
        if (process.env.NODE_ENV === 'development') {
            const randomColor = `
                rgba(
                    ${Math.round(Math.random() * 255)},
                    ${Math.round(Math.random() * 255)},
                    ${Math.round(Math.random() * 255)}
                    )
                `
            console.log(
                '%c┍------------------------------------------------------------------┑',
                `color:${randomColor};`
            )
            console.log('| 请求地址：', response.config.url)
            console.log('| 请求参数：', parse(response.config.data))
            console.log('| 返回数据：', response.data)
            console.log(
                '%c┕------------------------------------------------------------------┙',
                `color:${randomColor};`
            )
        }
    }


    public async get<T>(url: string, params: T) {
        return await this.service.get(url, params)
    }

    public async post(url: string, params: any, config?: any) {
        return await this.service.post(url, params, config)
    }
}


export default Http.getInstance()

