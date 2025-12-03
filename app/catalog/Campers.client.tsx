"use client";
import CampersList from "@/components/CampersList/CampersList";
import Filters from "@/components/Filters/Filters";
import { getCampers } from "@/lib/api/clientapi";
import { useCampersStore } from "@/store/useCamperStore";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function CampersClient() {
  const { filters } = useCampersStore();
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam = 1 }) => {
      const featuresParams = filters.features.reduce((acc, feature) => {
        if (feature === "transmission") {
          acc[feature] = "automatic";
        } else {
          acc[feature] = true;
        }
        return acc;
      }, {} as Record<string, string | boolean>);

      return getCampers({
        page: pageParam,
        limit: 4,
        location: filters.location,
        form: filters.form,
        ...featuresParams,
      });
    },
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
