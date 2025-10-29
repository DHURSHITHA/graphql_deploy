require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/taskdb';
const GRAPHQL_PATH = process.env.GRAPHQL_PATH || '/graphql';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

app.use(GRAPHQL_PATH, graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: process.env.NODE_ENV !== 'production'
}));

app.get('/', (req, res) => res.send('Task GraphQL API is running. Go to ' + GRAPHQL_PATH));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


