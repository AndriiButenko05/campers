import { QueryClient, Hydrate, dehydrate } from "@tanstack/react-query";

import { fetchCamperById } from "@/lib/api/fetch";
import CamperInfo from "./CamperDetails.client";
import { Metadata } from "next";

interface CamperDetailsProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CamperDetailsProps): Promise<Metadata> {
  const { id } = await params;
  const camper = await fetchCamperById(id);
  return {
    title: `${camper.name}`,
    description: `${camper.description}`,
    openGraph: {
      title: `${camper.name}`,
      description: `${camper.description}`,
      url: `https://campers-snowy.vercel.app/catalog/${id}`,
    },
  };
}

export default async function CamperDetails({ params }: CamperDetailsProps) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["camper", id],
    queryFn: () => fetchCamperById(id),
  });
  return (
    <Hydrate state={dehydrate(queryClient)}>
      <CamperInfo camperId={id} />
    </Hydrate>
  );
}
