import { GameQuery } from "../App";
import { useData } from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

//To clean the code a little better we use a technique called Query Object Pattern

function useGames(
  gameQuery: GameQuery
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
) {
  //The query request is based on the api doc https://api.rawg.io/docs/#operation/games_list, check search for genre
  //The third parameter  [selectedGenre?.id] is a dependency array, to much with the one defined in useData hook
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder, //ordering=> Is the query name given by API
        search: gameQuery.searchText,
      },
    },
    [gameQuery] //we don't need to pass individual object
    // [selectedGenre?.id, selectedPlatform?.id]
  );

  // const [games, setGames] = useState<Game[]>([]);
  // const [error, setError] = useState("");
  // //To implement the skeleton loading, first we need to track the loading of images
  // const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   setLoading(true);
  //   apiClient
  //     .get<FetchGamesResponse>("/games", { signal: controller.signal })
  //     .then((res) => {
  //       setGames(res.data.results);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //       setLoading(false);
  //     });
  //   return () => controller.abort();
  // }, []);
  // return { games, error, isLoading };
}

export default useGames;
