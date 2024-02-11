const { dirname } = require("path");
const db = require("./bd");
const fs = require("fs")
//const mysql = require("./mysql")


class userControllers{
    async createUser( req, res ){
        const {name,email} = req.body
        //const {name,email,id} = req.body
        console.log(name)
        await db.query(`INSERT INTO test (name, email) values ($1, $2) RETURNING *`,[name,email])
        res.send("users.rows")
    }
    async getUsers(req,res){
         const users = await db.query(`SELECT * FROM test`)
        // res.send(users.rows)
        // mysql.execute(
        //     'SELECT * FROM `lotus2`',
        //     function(err, results, fields) {
        //       console.log(results); // results contains rows returned by server
        //       //console.log(fields); // fields contains extra meta data about results, if available
        //       res.send(results)
        //       // If you execute same statement again, it will be picked from a LRU cache
        //       // which will save query preparation time and give better performance
        //     }
        //   );
        res.send(users.rows)
    }
    async getOneUser(req,res){
        const id = req.params.id
        const user = await db.query(`SELECT * FROM person where id = $1`,[id])
        res.send(user.rows[0])
        
    }
    async updateUser(req,res){
        const {name,email,id} = req.body
        const user = await db.query(`UPDATE test set name = $1 where id = $2 `,[name,id])
       // res.send(user.rows[0])
       console.log(name)
        
    }
    async deleteUser(req,res){
        const id = req.params.id
        const user = await db.query(`DELETE * FROM person where id = $1`,[id])
        res.send(user.rows[0])
    }

    async imglist(req,res){
        
        
         fs.readdir("/Users/sergejkapota/Downloads/app/back/build/img",(err,files)=>{
            console.log(files)
            res.send(files)
         })
        
        }


}

module.exports = new userControllers();