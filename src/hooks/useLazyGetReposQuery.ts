import { useState } from "react";

const URL = 'https://api.github.com/search/repositories';

export type UseLazyGetReposQueryReturnType = [
  (query: string) => Promise<DataType | undefined>,
  {
    data?: DataType,
    isLoading: boolean,
    isError: boolean
  }
]

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
}

export interface DataType {
  total_count: number;
  incomplete_results: boolean;
  items: Repo[];
}

export const useLazyGetReposQuery = (): UseLazyGetReposQueryReturnType => {
  const [data, setData] = useState<DataType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = async (query: string): Promise<DataType | undefined> => {
    setIsLoading(true);
    setIsError(false);
    setData(undefined);

    try {
      const response = await fetch(`${URL}?q=${query}&per_page=10`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      setData(data);
      return data;
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, { data, isLoading, isError }];
};