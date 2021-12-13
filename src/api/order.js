import instance from '../utils/request'

export function get() {
    return instance({
        url: '/order/get',
        method: 'GET'
    })
}

export function addGoods(bookId) {
    return instance({
        url: '/goods/addGoods',
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        params: {
            bookId: bookId
        }
    })
}


export function updateOrder(order) {
    return instance({
        url: '/order/updateOrder',
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        data: order
    })
}

export function deleteOrder(orderId) {
    return instance({
        url: '/order/delete/' + orderId,
        method: 'DELETE',
    })
}

export function creatOrder(receiveMsg, bookId) {
    return instance({
        url: '/order/createByTrolley',
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        params: {
            ...receiveMsg,
            bookId
        }
    })
}

export function getCartBook() {
    return instance({
        url: '/goods/get',
        method: 'GET'
    })
}

export function setChecked(id, checked) {
    return instance({
        url: '/goods/setChecked',
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        params: {
            checked,
            id
        }
    })
}

export function setNumber(id, number) {
    return instance({
        url: '/goods/setNumber',
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        params: {
            number,
            id
        }
    })
}

export function removeGoods(id) {
    return instance({
        url: '/goods/remove',
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        params: {
            id
        }
    })
}

export function createOrder(map) {
    return instance({
        url: '/order/createByTrolley',
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        params: {
            ...map
        }
    })
}

export function getOrderById(id) {
    return instance({
        url: '/order/getById/' + id,
        method: 'GET'
    })
}

export function getOrderPrice(id) {
    return instance({
        url: '/order/getOrderPrice/' + id,
        method: 'GET'
    })
}


export function payOrder(id) {
    return instance({
        url: '/order/payOrder/' + id,
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8'}
    })
}

export function removeOrder(id) {
    return instance({
        url: '/order/delete/' + id,
        method: 'DELETE',
        headers: {'Content-Type': 'application/json;charset=UTF-8'}
    })
}
