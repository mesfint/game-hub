import { useData } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

/*Since we have a generic data fetching hook we don't need to re implement
the logic here in useGenres, therefore we we implement useData as a generic 
data fetching hook, In this case the useGenres does not know about the fetching data 
from endpoint, It does'nt have any knowledge about the endpoint fetching
*/

// interface FetchGamesResponse {
//   count: number;
//   results: Genre[];
// }

export const useGenres = () => {
  return useData<Genre>("/genres");
  //   const [genres, setGenres] = useState<Genre[]>([]);
  //   const [error, setError] = useState("");
  //   //To implement the skeleton loading, first we need to track the loading of images
  //   const [isLoading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const controller = new AbortController();

  //     setLoading(true);

  //     apiClient
  //       .get<FetchGamesResponse>("/genres", { signal: controller.signal })
  //       .then((res) => {
  //         setGenres(res.data.results);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         if (err instanceof CanceledError) return;
  //         setError(err.message);
  //         setLoading(false);
  //       });

  //     return () => controller.abort();
  //   }, []);

  //   return { genres, error, isLoading };
};
