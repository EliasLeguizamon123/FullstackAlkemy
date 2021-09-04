const {Router} = require('express');
const router = Router();
const connection = require('../database/database.js')

//MYSQL CONNECTION
connection.connect((err) =>{
    if(err){
        console.log(err);
    } else{
        console.log(`DB connected correctly..`);
    }
});

//Set connection every 5 second's
setInterval(()=>{
    connection.query('SELECT 1');
}, 5000);

//* Route to get All forms
router.get('/', (req, res) => {
    connection.query(`SELECT ID, concept, amount,  isType, date_format(creationDate, \'%Y/%m/%d\') as creationDate, category FROM form`, (err, rows) => {
        if(!err){
            res.json(rows)
        }else{
            throw err;
        }
    })
})

//*Route to get only 1 form by ID
router.get('/get/:ID', (req, res) => {
    const {ID} = req.params;
    connection.query(`SELECT * FROM form WHERE ID = ?`, [ID], (err, rows) => {
        !err ? res.json(rows) : console.log(err);
    });
});

//* Route to post new Form
router.post('/new', (req, res) => {
    const {ID, concept, amount,  isType, category} = req.body
    connection.query(`INSERT INTO form VALUES(?, ?, ?, ?, ?, ?)`,
     [ID, concept, amount, new Date(), isType, category], 
        (err, rows) => {
            !err ? res.json(rows) : console.log(err);
        });
});

//* Route to delete an existing Form
router.delete('/:ID', (req, res) => {
    const {ID} = req.params;
    connection.query(`DELETE FROM form WHERE ID = ?`, [ID], (err, rows) => {
        !err ? res.json(rows) : console.log(err);
    });
});

//* Route to Update an existing Form
router.put('/:ID', (req, res) => {
    const { ID } = req.params;
    const newForm = req.body;
    connection.query(`UPDATE form SET ? WHERE ID = ?`, [newForm, ID], (err,rows) => {
        !err ? res.json(rows) : console.log(err);
    });
});

module.exports = router;