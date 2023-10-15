import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav "" main"`,
          lg: `"nav nav""aside main"`, //1024
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem bg="yellow.500" area="aside">
            Aside
          </GridItem>
        </Show>
        <GridItem bg="blue.400" area="main">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
