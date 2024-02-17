import http from './http-common'

const getSearchBook = (id, m_user) => {
    return http.get(`/api/library/book/search?b_id=${id}`);
}
const getAllBoook = (id, m_user) => {
    return http.get(`/api/library/book/all`);
}

const BookService = {
    getSearchBook,
    getAllBoook
};

export default BookService;
