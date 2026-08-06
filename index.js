import express from 'express'// TYPE MODULE
//const express = required("express") // Type common JS

//inicializando o esxpress - new
const app = express()
// Exercício 1
app.get("/api/somar", (req, res) => {
    //cons recebe o valor uma vez e não muda nunca mais 
    //let  recebe u valor e pode ser alterada 
    //var não tem funcionalidade é um bug
    const num1 = Number (req.query.num1)
    const num2 =  Number (req.query.num2)
  res.send({message: num1 + num2 })
})

//exercício2
app.get("/api/salario/:valor/:hora", (req, res) => { 
  const valorGanho = Number(req.params.valor)
  const horasTrabalhadas = Number(req.params.hora)


  const resultado = valorGanho * horasTrabalhadas
  res.send({ message:resultado})
})
//esxercício 3
app.get("/api/mediaPeso/:peso1/:peso2/:peso3/:peso4/:peso5", (req, res) => {
  const peso1 = Number(req.params.peso1)
  const peso2= Number(req.params.peso2)
  const peso3= Number(req.params.peso3)
  const peso4 = Number(req.params.peso4)
  const peso5 = Number(req.params.peso5)

  const media =( peso1 + peso2 + peso3 + peso4 + peso5) /5
  
  res.send({message: media})
})


//exercicio 4
app.get("/api/CelpraFA/:cel/:fa", (req,res)  => {
  const cel = Number(req.params.cel)
  const fa = Number(req.params.fa)
  
  const conv = (  (9 * cel + 160) / 5)
  res.send({message:conv})
})
//exercicio 5
app.get("/api/DistMi/:dist/:Mi",)


app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})