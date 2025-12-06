import { dehydrate, QueryClient, Hydrate } from "@tanstack/react-query";
import CampersClient from "./Campers.client";
import { getCampers } from "../../lib/api/clientApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog",
  description: "Search Campervans",
  openGraph: {
    title: "CamperVans Catalog",
    description: "Search Campervans",
    url: "",
    siteName: "CamperVans",
    locale: "en_US",
    type: "website",
  },
};

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
