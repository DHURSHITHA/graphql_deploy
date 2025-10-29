npm init -y
npm install cors dotenv express express-graphql graphql mongoose
npm install --save-dev nodemon
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
  "dev": "nodemon server.js"
  }, in package.json

cd path_in_our_system(of vs code)
node server.js
open new terminal
run this
1st
Invoke-WebRequest -Uri "http://localhost:4000/graphql" `
  -Method POST `
  -Headers @{ "Content-Type" = "application/json" } `
  -Body '{"query":"mutation { createTask(input: { title: \"Finish Ansible Setup\", description: \"Deploy API with Ansible\", dueDate: \"2025-09-30\" }) { id title description status dueDate createdAt updatedAt } }"}'
2nd-get all task
(Invoke-WebRequest -Uri "http://localhost:4000/graphql" `
  -Method POST `
  -Headers @{ "Content-Type" = "application/json" } `
  -Body '{"query":"{ tasks { id title description status dueDate createdAt updatedAt } }"}').Content
