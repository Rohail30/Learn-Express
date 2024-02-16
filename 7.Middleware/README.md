This lesson is about middleware

# Middleware

functions are functions that have access to the request object (req), the response object (res), and the next function in theapplication’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middlewaresucceeding the current middleware.

Middleware functions can perform the following tasks:

1.Execute any code.

2.Make changes to the request and the response objects.

3.End the request-response cycle.

4.Call the next middleware in the stack.

I have made a simple logger function
function logger(req, res, next){
console.log(req.originalUrl)
next()
}

by using "app.use(logger)" every mthod with app will use logger function and display its url
