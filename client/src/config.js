
if (process.env.NODE_ENV === 'development') {
    module.exports  = {
        api_url: 'http://localhost:5000/api/'
    }
} else {
    module.exports  = {
        baseUrl: 'https://your_nodejs_server/api/'
    }
}
