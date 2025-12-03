import { NextRequest, NextResponse } from "next/server";
import { isAxiosError } from "axios";
import { api } from "../api";
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page") ?? 1);
    const limit = Number(searchParams.get("limit") ?? 4);
    const location = searchParams.get("location");
    const form = searchParams.get("form");
    const transmission = searchParams.get("transmission");
    const AC = searchParams.get("AC");
    const bathroom = searchParams.get("bathroom");
    const kitchen = searchParams.get("kitchen");
    const TV = searchParams.get("TV");
    const engine = searchParams.get("engine");
    const radio = searchParams.get("radio");
    const refrigerator = searchParams.get("refrigerator");
    const microwave = searchParams.get("microwave");
    const gas = searchParams.get("gas");
    const water = searchParams.get("water");
    const res = await api("/campers", {
      params: {
        page,
        limit,
        ...(location && { location }),
        ...(form && { form }),
        ...(transmission && { transmission }),
        ...(AC && { AC: true }),
        ...(bathroom && { bathroom: true }),
        ...(kitchen && { kitchen: true }),
        ...(TV && { TV: true }),
        ...(engine && { engine }),
        ...(radio && { radio: true }),
        ...(refrigerator && { refrigerator: true }),
        ...(microwave && { microwave: true }),
        ...(gas && { gas: true }),
        ...(water && { water: true }),
      },
    });

    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json(
        { error: error.message, response: error.response?.data },
        { status: error.response?.status ?? 500 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
