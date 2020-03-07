import axios from 'axios'


type RequestType = "get" | "post" | "delete" | "put"

interface HttpRequest {
    <T = any>(url: string, config?: any): Promise<T>
}

// todo
// axios.interceptors.request.use()

// todo
// axios.interceptors.response.use() 
