This lesson is about advance routing.
You can do dynamic routing by using req.params.id

The code run from top to bottom so first:
app.get('/', (req,res) => {
console.log("Your Console Msg")
res.send("This Msg will be displayed at http://localhost:3000")
})

the above code will run first and display "Your Console Msg" on http://localhost:3000

then adding any number or name after http://localhost:3000 will display that name because it is storing in the id.
app.get('/:id', (req, res) => {
res.send(`Get User with ID ${req.params.id}`)
})

So even this code after:
app.get('/new', (req, res) => {
res.send(`User display new`)
})

after id code will not display "User display new. But instead it will display "Get User with ID new"
