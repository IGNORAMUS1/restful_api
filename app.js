const express = require("express")
const { Client } = require("pg")


const app = express()

app.use(express.json())

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "test",
    port: "5432",
    password: "IGN321@pg"
})

const connect = client.connect()
connect.then(()=>{
    console.log(`database connected`)
})

app.get('/getAllUsers', (req, res) => {
    const allUsers = client.query('SELECT * FROM person',(err, result)=>{
        if(err) {
            res.send(err)
        } else {
            res.send(result.rows)
        }
    })
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id
    const user = client.query('SELECT * FROM person WHERE id = $1', [id], (err, result)=>{
        if(err) {
            res.send(err)
        } else if (result.rowCount == 0) {
            res.send(`User with the specified id does not exist.`)
        } else res.send(result.rows)
    })
})

app.post('/createUser', (req, res) => {
    
    const { first_name, last_name, email, gender, date_of_birth, country_of_birth } = req.body
    const newUser = client.query('INSERT INTO person (first_name, last_name, email, gender, date_of_birth, country_of_birth) VALUES ($1, $2, $3, $4, $5, $6)', 
        [first_name, last_name, email, gender, date_of_birth, country_of_birth], (err, result)=>{
            if(err) {
                res.send(err)
            } else {
                res.send(`New user has been added successfully.`)
            }
        })
})

app.put('/updateUser/:id',(req, res)=>{
    const id = req.params.id
    const last_name = req.body.last_name

    client.query('UPDATE person SET last_name = $1 WHERE id = $2', [last_name, id], (err, result)=>{
        if(err){
            res.send(err)
        } else if(result.rowCount == 0) {
            res.send(`user does not exist.`)
        } else {
            client.query('SELECT * FROM person WHERE id = $1', [id], (err, result) => {
                res.send(result.rows)
            })
        }
    })
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id
    client.query('DELETE FROM person WHERE id = $1', [id], (err, result) => {
        if(err) {
            res.send(err)
        } else if (result.rowCount > 0){
            res.send(`user with id ${id} was removed.`)
        } else {
            res.send(`user does not exist.`)
        }
    })
})

app.listen(5000, () => {
    console.log(`server connected to port 5000...`)
})