import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './src/data/schema';
const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		rootValue: root,
		graphiql: true,
	})
);

const port = 8080 || process.env.PORT;
app.listen(port), () => console.log(`Listening to port ${port}`);
