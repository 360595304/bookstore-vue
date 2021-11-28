import instance from '../utils/request'

/*获取用户列表*/
export function getUserList(userVO,current,size) {
    return instance({
        url: '/users/getUserList',
        method: 'POST',
        params: {
            current,
            size
        },
        data: userVO
    })
}

export function assignRoles(id) {
    return instance({
        url: '/users/roles/'+id,
        method: 'GET'
    })
}

export function doAssignRoles(id,rids) {
    return instance({
        url: '/users/assignRoles/'+id,
        method: 'POST',
        data: rids
    })
}
