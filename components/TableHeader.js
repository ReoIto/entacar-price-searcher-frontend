import React from "react";

export default function TableHeader() {
  return (
    <thead className=" bg-gray-200">
      <tr>
        <th
          scope="col"
          className="px-6 py-3 text-xs font-bold text-left text-gray-800"
        >
          No
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-xs font-bold text-left text-gray-800"
        >
          販売元
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-xs font-bold text-left text-gray-800"
        >
          車種
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-xs font-bold text-left text-gray-800"
        >
          乗車人数
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-xs font-bold text-right text-gray-800"
        >
          予約日数
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-xs font-bold text-right text-gray-800"
        >
          価格
        </th>
      </tr>
    </thead>
  );
}
