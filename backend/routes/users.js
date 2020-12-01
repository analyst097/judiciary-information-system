const router =  require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const type = req.body.type;
    
    const newUser = new User({
        username,
        password,
        type
    });

    newUser.save()
        .then(()=> {
            res.status(200).json('User added');
            window.alert("Registration sucessful");
        })
        .catch(err => res.status(400).json('Error '+err));
});


router.route('/login').post((req,res)=>{
    User.findOne({username: req.body.username, password: req.body.password})
    .then(doc =>{
        console.log(doc);
        if(doc){
            res.json({username: doc.username, success: true});
        }
        else{
            res.json({success: false});
        }
    })
    .catch(err => res.status(400).json('failed'));
});

module.exports = router;