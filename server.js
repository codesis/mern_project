const express = require('express')

const app = express()

app.get('/api/recipes', (req, res) => {
    //to be mongodb
    const recipes = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Doe', lastName: 'John'}
    ]

    res.json(recipes)
})

const port = 5000

app.listen(port, () => console.log(`Server started on ${port}`))