import http from './http-common'

const getAllMember = () => {
    return http.get(`/api/library/member/all`);
}

const MemberService = {
    getAllMember
};

export default MemberService;
