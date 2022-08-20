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
    carList: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleSearchResultData(json) {
    setSearchResult((res) => ({
      ...res,
      averagePrice: json.search_result.average_price,
      highestPrice: json.search_result.highest_price,
      cheapestPrice: json.search_result.cheapest_price,
      carList: json.search_result.car_list,
    }));
  }

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
          handleSearchResultData={handleSearchResultData}
        />
        <CalculatedPrices
          averagePrice={searchResult.averagePrice}
          highestPrice={searchResult.highestPrice}
          cheapestPrice={searchResult.cheapestPrice}
          isLoading={isLoading}
        />
      </div>
      <SearchResultTable carList={searchResult.carList} isLoading={isLoading} />
    </div>
  );
}
