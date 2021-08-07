exports.getConfig = (env) => {
    const config = {
        dev: {
            env: 'dev',
            port: process.env.PORT || 8080,
            db: {
                host: 'localhost',
                port: 27017,
                name: 'userMock'
            },
            sctK: "bnnFyunU",
            tokenExp: '1h',
            mailer: {
                email: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD
            }
        },
        production: {
            env: 'production',
            port: process.env.PORT || 8080,
            db: {
                host: process.env.DB_HOST || 'localhost',
                port: process.env.DB_PORT || 27017,
                name: process.env.DB_NAME || 'userMock'
            },
            sctK: process.env.SECRET_KEY || "bnnFyunU",
            tokenExp: process.env.EXPIRE_TOKEN || '1h',
            mailer: {
                email: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD
            }
        }
    }
    if (!env) env = ""
    switch (env.trim()) {
        case 'dev':
            return config.dev;
        case 'production':
            return config.production;
        default:
            return config.dev;
    }
}