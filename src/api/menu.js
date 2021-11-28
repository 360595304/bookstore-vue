import instance from '../utils/request'

export function getMenuTree() {
    return instance({
        url: '/menu/getTree',
        method: 'GET'
    })
}