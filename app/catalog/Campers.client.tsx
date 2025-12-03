"use client";
import CampersList from "@/components/CampersList/CampersList";
import Filters from "@/components/Filters/Filters";
import { getCampers } from "@/lib/api/clientapi";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function CampersClient() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["campers"],
    queryFn: ({ pageParam = 1 }) => getCampers({ page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.flatMap((page) => page.items).length;
      if (totalFetched < lastPage.total) {
        return allPages.length + 1;
      }
      return undefined;
    },
  });
  const campers = data?.pages.flatMap((page) => page.items) ?? [];
  return (
    <div className="container">
      <div className="flex flex-row gap-22">
        <aside>
          <Filters />
        </aside>
        <div className="flex flex-col items-center">
          {campers && !isLoading && (
            <CampersList campers={campers}></CampersList>
          )}
          {hasNextPage && (
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="mt-10 py-4 px-8 w-[145px] h-14 border border-[#dadde1] rounded-full font-medium text-base leading-6 tracking-tighter hover:border-(--button-hover) transition-all ease-out disabled:opacity-50"
            >
              {isFetchingNextPage ? "Loading..." : "Load more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
