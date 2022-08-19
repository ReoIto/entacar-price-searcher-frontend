import ProgressTableSkeleton from "./ProgressTableSkeleton";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

export default function SearchResultTable({ carList, isLoading }) {
  return (
    <div className="flex flex-col pb-10 rounded-lg border shadow-md">
      <div className="overflow-x-auto">
        <div className="w-full inline-block align-middle">
          {isLoading ? (
            <ProgressTableSkeleton />
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <TableHeader />
              <tbody className="divide-y divide-gray-200">
                <TableRows carList={carList} />
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
