// 错误类型
const failMsgCode = {
    params: {
        code: 50001,
        msg: 'Parameters you passed in is not correct.',
        data: {},
    },
    queryError: {
        code: 50002,
        msg: 'An error occurred with the query.',
        data: {},
    },
    userNotFound: {
        code: 50003,
        msg: 'User does not exist.',
        data: {},
    },
    userNotAuthorized: {
        code: 50004,
        msg: 'User not authorized.',
        data: {},
    },
    userPasswordError: {
        code: 50005,
        msg: 'Username or password is not correct.',
        data: {},
    },
    fileDoesNotExist: {
        code: 50006,
        msg: 'File does not exist.',
        data: {},
    },
    // 其他错误
    other: (errMsg = 'Unknow error') => {
        return {
            code: 50010,
            msg: errMsg,
            data: {},
        };
    },
};

const successMsgCode = (data) => {
    return {
        code: 20000,
        msg: 'Success',
        data,
    };
};
module.exports = {
    failMsgCode,
    successMsgCode,
};
