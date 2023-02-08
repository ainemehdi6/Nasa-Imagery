// ./src/hooks/useStarships.ts
import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const result = await fetch(`https://api.nasa.gov/planetary/apod?api_key=jfMaoCn2RGg9VhgZGJ1AKtKkCbyzh6WT2bOffz3p`);
  const json = await result.json();
  return json;
}

export function useStarships() {
  return useQuery(["starships"], fetchData);
}