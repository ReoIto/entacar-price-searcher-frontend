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
  const [isNoResult, setIsNoResult] = useState(false);

  function renderNoResultMessage() {
    return (
      <div
        class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
        role="alert"
      >
        <svg
          aria-hidden="true"
          class="flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        指定された検索条件に合致する結果がありませんでした。条件を変更して再度検索してください。
      </div>
    );
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
          setSearchResult={setSearchResult}
          setIsNoResult={setIsNoResult}
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
      {isNoResult && renderNoResultMessage()}
      <SearchResultTable carList={searchResult.carList} isLoading={isLoading} />
    </div>
  );
}
