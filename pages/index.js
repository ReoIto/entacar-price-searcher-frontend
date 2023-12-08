import Head from "next/head";
import { useState } from "react";
import CalculatedPrices from "../components/CalculatedPrices";
import FlashMessage from "../components/FlashMessage";
import SearchForm from "../components/SearchForm";
import SearchResultTable from "../components/SearchResultTable";

export default function Home() {
  const [searchResult, setSearchResult] = useState({
    averagePrice: "",
    highestPrice: "",
    cheapestPrice: "",
    averagePriceBetweenAverageAndCheapest: "",
    carList: [],
    isServerError: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isNoResult, setIsNoResult] = useState(false);

  function renderFlashMessages() {
    if (searchResult.isServerError) {
      return (
        <FlashMessage
          content="検索処理中に予期せぬエラーが発生しました。時間を空けてから再度操作してください。"
          severityLevel="ERROR"
        />
      );
    } else if (isNoResult) {
      return (
        <FlashMessage
          content="指定された検索条件に合致する結果がありませんでした。条件を変更して再度検索してください。"
          severityLevel="WARN"
        />
      );
    }
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
      {renderFlashMessages()}
      <SearchResultTable carList={searchResult.carList} isLoading={isLoading} />
    </div>
  );
}
