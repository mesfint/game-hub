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
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

function useGames(selectedGenre: Genre | null) {
  //The query request is based on the api doc https://api.rawg.io/docs/#operation/games_list, check search for genre
  //The third parameter  [selectedGenre?.id] is a dependency array, to much with the one defined in useData hook
  return useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

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
