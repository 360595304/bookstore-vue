import instance from '../utils/request'

export function getOrderList(current, size, key) {
    return instance({
        url: '/order/getOrderList',
        method: 'GET',
        params: {
            current,
            size,
            key
        },
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
