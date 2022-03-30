import { get } from "../utils/request"

export const sayHello = () => {
    return get('/default')
}