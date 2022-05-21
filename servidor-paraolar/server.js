const express = require("express")
const app = express ()
const cors = require("cors")
const filmesJson = require("./data/movies.json") //necessita do ponto e barra para chamar a outra pasta/arquivo

app.get("/", (request, response)=> {
    response.status(200).json([
        {
            "mensagem": "API de filmes" 
        }
    ])
})

app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)

    })

app.get("/filmes/buscar/:id", (request, response)=> {
    
    let idRequest = request.params.id
                        
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)

    console.log(idRequest)
    console.log(filmeEncontrado)
})
app.use(express.json()) //possibilita pegar o que está no body
app.use(cors())
app.post("/filmes/cadastrar", (request, response) => {
    let bodyRequest = request.body

    let novoFilme = {
        id: (filmesJson.length)+1,
        Title: bodyRequest.Title,
        Year: bodyRequest.Year,
        Rated: bodyRequest.Rated,
        Released: bodyRequest.Eeleased,
        Runtime: bodyRequest.Runtime,
        Genre: bodyRequest.Genre,
        Director: bodyRequest.Director,
        Writer: bodyRequest.Writer,
        Actors: bodyRequest.Actors,
        Plot: bodyRequest.Plot,
        Language: bodyRequest.Language,
        Country: bodyRequest.Country,
        Awards: bodyRequest.Awards
    }
    filmesJson.push(novoFilme) //push insere novos elementos na array

    response.status(201).send({
        "mensagem": "filmes cadastrados com sucesso",
        novoFilme
    })
})


app.listen(2020, ()=>{
    console.log("ufa subiu")
})
  
  ///////////////////////////////////////series


const seriesJson = require("./data/series.json") 

app.get("/", (request, response)=> {
    response.status(200).json([
        {
            "mensagem": "API de series" 
        }
    ])
})

app.get("/series", (request, response) => {
    response.status(200).send(seriesJson)

    })

app.get("/series/buscar/:id", (request, response)=> {
    
    let idRequest = request.params.id
                       
    let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)

    response.status(200).send(serieEncontrada)

    console.log(idRequest)
    console.log(serieEncontrado)
})
app.use(express.json())

app.post("/serie/cadastrar", (request, response) => {
    let bodyRequest = request.body

    let novaSerie = {
        id: (seriesJson.length)+1.,
        title: bodyRequest.title,
        totalSeasons: bodyRequest.totalSeasons,
        genre: bodyRequest.genre,
        writers: bodyRequest.writers,
        poster: bodyRequest.poster,
        actors: bodyRequest.actors,
        ratings: bodyRequest.ratings
    }
    seriesJson.push(novaSerie) 

    response.status(201).send({
        "mensagem": "series cadastrados com sucesso",
        novaSerie
    })
})


app.listen(2122, ()=>{
    console.log("agr vai")
} )

//O código não ficou dos melhores pq tive que fazer as pressas, não consegui usar o query
  
  