import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

//This custom hook is designed to avoid a repetition of code from hooks such as useGame
// and useGenre, Since they are absolutely same we create a generic hook that can work
//for any cases

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  //The 3rd parameter is dependency parameter, whenever we have changes we render the app
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  //To implement the skeleton loading, first we need to track the loading of images
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);

      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  ); //since the deps optional, it could be undefined at some point, and we can't define dependency array of undefined, so we check with if

  return { data, error, isLoading };
};
