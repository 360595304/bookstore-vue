import instance from '../utils/request'

export function getList(current, size, key) {
    return instance({
        url: '/book/getList/' + key,
        method: 'GET',
        params: {
            current,
            size
        }
    })
}

export function deleteBook(bookId) {
    return instance({
        url: '/book/deleteBook/' + bookId,
        method: 'DELETE'
    })
}

export function updateBook(newBook) {
    return instance({
        url: '/book/updateBook',
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        data: newBook
    })
}


export function addBook(newBook) {
    return instance({
        url: '/book/addBook',
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        data: newBook
    })
}


export function getBook(bookId) {
    return instance({
        url: '/book/getBook/' + bookId,
        method: 'GET',
    })
}

export function getRecommendedBook(num) {
    return instance({
        url: '/book/getRecommendedBook/' + num,
        method: 'GET',
    })
}

export function getNewBook(num) {
    return instance({
        url: '/book/getNewBook/' + num,
        method: 'GET',
    })
}

export function getHotBook(num) {
    return instance({
        url: '/book/getHotBook/' + num,
        method: 'GET',
    })
}

export function getSimilarBook(type) {
    return instance({
        url: '/book/getSimilarBook/' + type,
        method: 'GET',
    })
}
