const bcrypt = require('bcryptjs')

module.exports = {
    register : (req, res) => {
        const{firstname, lastname, email, password} = req.body
        const db = req.app.get('db');
        db.find_user_by_email({email})
            .then((dbres) => {
                if(dbres.length === 0){
                    const hashedPassword = bcrypt.hashSync(password, 15)
                    return db.create_user({firstname, lastname, email, password: hashedPassword})
                }
                res.send('Email Already Exists')
            })
            .then(user => {
                delete user[0].pass;
                res.send(user[0])
            })
    }
}

