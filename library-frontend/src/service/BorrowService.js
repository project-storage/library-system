import http from './http-common'

const getAllBorrow = () => {
    return http.get(`/api/library/borrow-book/all`);
}

const getSearchBorrow = (id, m_user) => {
    return http.get(`/api/library/borrow-book/search?b_id=${id}`);
}

const createBorrow = () => {
    return http.post(`/api/library/borrow-book/create`)
}

const BorrowService = {
    getAllBorrow,
    getSearchBorrow
};

export default BorrowService;
