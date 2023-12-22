This lesson is about rendering static file with express

create a public folder and make an html file in it
now use middleware to render these file:
app.use(express.static("public"));

now local host will show the contents of the html file and if you give the path in local host you can run different html files
try this path: http://localhost:3000/test/test.html
