import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav "" main"`, //single column
          lg: `"nav nav""aside main"`, //1024 Two columns in lg devices
        }}
        templateColumns={{
          base: "1fr", // the column takes up all available spaces
          lg: "200px 1fr", //On lg devices we have 2 columns, the first one take 200px
          //The second column w/c we have the grid will take the rest spaces
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
