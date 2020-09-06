
module.exports = {
    port: process.env.PORT || 3000, 
    db:{
        database:process.env.DB_NAME || 'listAppWeb',
        user:process.env.DB_USER || 'wastech',
        password:process.env.DB_PASS || 'wastech',
        options:{
            dialect:process.env.DIALECT || 'sqlite',
            host:process.env.HOST || 'http://127.0.0.1',
            storage:'./listAppWeb.sqlite'
        }
    },
    authentication:{
        jwtSecret:process.env.JWT_SECRET || 'secret'
    }
    
};