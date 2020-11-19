module.exports = {
    success: (data) => {
        return {
            code: 200,
            data,
        }
    },

    badRequest: (data) => {
        return {
            code: 400,
            data,
        }
    },

    forbidden: () => {
        return {
            code: 403,
            data: 'No tiene acceso'
        }
    },

    notFound: (data) => {
        return {
            code: 404,
            data,
        }
    }
}