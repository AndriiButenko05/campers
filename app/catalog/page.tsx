import { dehydrate, QueryClient, Hydrate } from "@tanstack/react-query";
import CampersClient from "./Campers.client";
import { getCampers } from "@/lib/api/clientapi";

export default async function CampersPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["campers"],
    queryFn: () => getCampers({}),
  });
  return (
    <section className="my-12">
      <Hydrate state={dehydrate(queryClient)}>
        <CampersClient />
      </Hydrate>
    </section>
  );
}
