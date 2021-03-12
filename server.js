const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const cors = require("cors")
const schema = require("./schema")
const path = require("path")
const app = express()

const PORT = process.env.PORT || 5000
app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("client/build"))
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
