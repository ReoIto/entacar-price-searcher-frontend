import Head from "next/head";
import { useState } from "react";
import CalculatedPrices from "../components/CalculatedPrices";
import SearchForm from "../components/SearchForm";
import SearchResultTable from "../components/SearchResultTable";

export default function Home() {
  const [searchResult, setSearchResult] = useState({
    averagePrice: "",
    highestPrice: "",
    cheapestPrice: "",
    averagePriceBetweenAverageAndCheapest: "",
    carList: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container mx-auto">
      <Head>
        <title>Rentacar Price Searcher</title>
        <meta
          name="description"
          content="沖縄のレンタカーの価格の平均値などを検索できるサービスです"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row w-full items-center my-5">
        <SearchForm
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setSearchResult={setSearchResult}
        />
        <CalculatedPrices
          averagePrice={searchResult.averagePrice}
          highestPrice={searchResult.highestPrice}
          cheapestPrice={searchResult.cheapestPrice}
          averagePriceBetweenAverageAndCheapest={
            searchResult.averagePriceBetweenAverageAndCheapest
          }
          isLoading={isLoading}
        />
      </div>
      <SearchResultTable carList={searchResult.carList} isLoading={isLoading} />
    </div>
  );
}
