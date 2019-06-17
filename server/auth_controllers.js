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
        },
    login: (req, res) => {
        const{password, email} = req.body
        console.log(password, email)
        const db = req.app.get('db');
        const hashedPassword = bcrypt.hashSync(password, 15)
        db.find_user_by_email({email})
        .then((dbres) => {
            console.log(dbres)
            if(dbres.length === 0){
                res.send('Email is Incorrect')
            }
            if(bcrypt.compareSync(password, hashedPassword)) {
                delete dbres[0].pass
                res.send(dbres[0])
            }
            else{
                res.send('Incorrect Password')
            }
        })
    },
    submitComment: (req, res) => {
        const db = req.app.get('db')
        console.log(req.body)
        db.post_comments([req.body.comment]).then(response => {
            console.log(response)
            res.send(response)
        })
    },

    getComment: (req, res) => {
        const db = req.app.get('db')
        db.get_all_comments().then(response => {
            res.send(response)
        })
    },

    deleteComment: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete_comment({id}).then(response => {
            res.send('Comment Deleted')
        })
    },

    updateComment: (req, res) => {
        const {id} = req.params
        const {updatedInput} = req.body
        const db = req.app.get('db')
        db.update_comment({id, comment: updatedInput}).then(response => {
            res.send('Comment updated')
        })
    }

    // deleteComment: (req, res) => {
    //     const db = req.app.delete('db')
    //     console.log(req.body)
    //     db. 
    // }
}

