let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let listName = {
    list: [
        { "id": 1, "idName": 5935512054, "firstName": "Sawalee", "lastName": "Khongyuen", "nickName": "Babie", "Email": "babie@gmail.com", "password": "123456", "date": "1998-12-25", "gender": "female", "tel": "0936512767" },
        { "id": 2, "idName": 5935512065, "firstName": "Apichat", "lastName": "Weedinu", "nickName": "Benz", "Email": "benz@gmail.com", "password": "536346", "date": "1990-01-08", "gender": "female", "tel": "0891234577", "gender": "male" },
        { "id": 3, "idName": 5935512034, "firstName": "Patricia", "lastName": "Donald", "nickName": "Ruth", "Email": "ruth@gmail.com", "password": "123456", "date": "1990-10-25", "gender": "female", "tel": "0936512767", "gender": "male" },
        { "id": 4, "idName": 5935512062, "firstName": "Robert", "lastName": "Paul", "nickName": "Janet", "Email": "Janet@gmail.com", "password": "536346", "date": "1990-05-08", "gender": "female", "tel": "0891234577", "gender": "female" },
        { "id": 5, "idName": 5935512051, "firstName": "Christopher", "lastName": "Brian", "nickName": "Nicole", "Email": "nicole@gmail.com", "password": "123456", "date": "1998-12-04", "gender": "female", "tel": "0936512767", "gender": "female" },
        { "id": 6, "idName": 5935512002, "firstName": "Daniel", "lastName": "Jason", "nickName": "Emma", "Email": "emma@gmail.com", "password": "536346", "date": "1997-05-08", "gender": "female", "tel": "0891234577", "gender": "male" },
        { "id": 7, "idName": 5935512066, "firstName": "Sompong", "lastName": "Sawaddee", "nickName": "Moo", "Email": "moo@gmail.com", "password": "434340", "date": "2010-10-25", "gender": "female", "tel": "0612233445", "gender": "male" }]
}

router.route('/listName')
    .get((req, res) => res.json(listName))

    .post((req, res) => {
        let newName = {}
        newName.id = (listName.list.length) ? listName.list[listName.list.length - 1].id + 1 : 1
        newName.idName = req.body.idName
        newName.firstName = req.body.firstName
        newName.lastName = req.body.lastName
        newName.nickName = req.body.nickName
        newName.date = req.body.date
        newName.Email = req.body.Email
        newName.password = req.body.password
        newName.tel = req.body.tel
        newName.gender = req.body.gender
        listName = { "list": [...listName.list, newName] }
        res.json(listName)
    })

router.route('/listName/:name_id')
    .get((req, res) => {
        const name_id = req.params.name_id
        const id = listName.list.findIndex(item => +item.id === +name_id)
        res.json(listName.list[id])
    })
    .put((req, res) => {
        const name_id = req.params.name_id
        const id = listName.list.findIndex(item => +item.id === +name_id)
        listName.list[id].idName = req.body.idName
        listName.list[id].firstName = req.body.firstName
        listName.list[id].lastName = req.body.lastName
        listName.list[id].nickName = req.body.nickName
        listName.list[id].date = req.body.date
        listName.list[id].Email = req.body.Email
        listName.list[id].password = req.body.password
        listName.list[id].tel = req.body.tel
        listName.list[id].gender = req.body.gender
        res.json(listName)
    })

    .delete((req, res) => {
        const name_id = req.params.name_id
        listName.list = listName.list.filter(item => +item.id !== +name_id)
        res.json(listName)
    })

app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(80, () => console.log('server is running...'))
