nodemon is a tool for Node.js that automatically restarts your server whenever you make changes to your code. It simplifies the development process by eliminating the need to manually stop and restart the server after each modification.

Replace scripts with:
"scripts": {
"devStart": "nodemon server.js"
},
in package.json file

run this command:
npm i --save-dev nodemon

now to start server run this command:
npm run devStart
