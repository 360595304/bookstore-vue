import instance from '../utils/request'
export function getHistory() {
    return instance({
        url: '/history/getHistory',
        method: 'GET'
    })
}
