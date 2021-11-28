import instance from '../utils/request'
export function getBookList(current, size, map) {
    return instance({
        url: '/book/getBookList',
        method: 'POST',
        params: {
            current,
            size
        },
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        data: map

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
