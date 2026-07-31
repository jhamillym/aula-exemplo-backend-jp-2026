import express from 'express'// TYPE MODULE
//const express = required("express") // Type common JS

//inicializando o esxpress - new
const app = express()

app.get("/api/somar", (req, res) => {
    //cons recebe o valor uma vez e não muda nunca mais 
    //let  recebe u valor e pode ser alterada 
    //var não tem funcionalidade é um bug
    const num1 = Number (req.query.num1)
    const num2 =  Number (req.query.num2)
  res.send({message: num1 + num2 })

})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})