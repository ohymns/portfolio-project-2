import express, { request, response } from "express";
const ingredients = ['banana' , 'chocolate' , 'vanilla' , 'orange']
const app = express()
const PORT = 3000
app.use(logger)

app.get('/', (request , response ) => {
    response.send('welcome to my cookieshop')
})
app.get('/contact', (request , response ) => {
    response.send('Reach out to us if you have any questions')
})

app.post('/contact', (request , response ) => {
    response.send('Thank you for your message. We will be in touch soon')
})
app.get('/about', (request , response ) => {
    response.send('Here is the story about how our dough became cookies')
})
app.get('/calculate-average' , (request , response) => {
    const number1 = 5;
    const number2 = 10;
    const average = (number1 + number2) / 2;
    response.send(`The average of ${number1} and ${number2} is ${average}`)
});
app.get('/cookies/:slug' , (request, response) => {
    const cookieId = request.params.slug

    response.send(`You chose the cookie with the ID of ${cookieId}`)
})
app.get('/cookies' , (request, response) => {
    response.send(`You deserve a cookie today`)
})

app.get('/average-of/:num1/and/:num2', (request , response) =>{
    var num1 = request.params.num1
    var num2 = request.params.num2
    var average = ((num1 + num2) / 2)
    response.send(`the average of ${num1} and ${num2} is ${average} `)
})

app.get('/recipe/:slug' , (request, response) => {
    const sluging = request.params.slug
    response.send(`sorry we couldnt find ${sluging}`)
    response.send(`Do you really need slug ?`)
})

app.get('/users/:userId/tasks/:taskId' , (request , response)=> {
    const userId = request.params.userId
    const taskId = request.params.taskId

    response.send(`The user ID is ${userId} and the task ID is ${taskId}`)
})
app.listen(PORT , () => {
    console.log('Started server on port ${PORT}')
})
import { logger } from './middlewares/logger.js'
