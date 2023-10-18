import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import PLatformSelector from "./components/PLatformSelector";

//To clean the code a little better we use a technique called Query Object Pattern
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  //refactored by adding interface on top and also usestate
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PLatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameGrid
            gameQuery={gameQuery}
            // selectedGenre={gameQuery.genre}
            // selectedPlatform={gameQuery.platform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
