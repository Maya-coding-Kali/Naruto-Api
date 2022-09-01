import logo from './logo.svg';
import './App.css';
import Cards from "./Components/Cards/Cards"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
function App() {
  const client = new ApolloClient({
    uri:"https://narutoql.up.railway.app/graphql",
    cache: new InMemoryCache()

   })
  return (
    <ApolloProvider client={client}>
    <Cards></Cards>
    </ApolloProvider>
  );
}

export default App;
