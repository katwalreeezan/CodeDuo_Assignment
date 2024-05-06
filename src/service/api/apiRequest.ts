import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Endpoint from "./Endpoint";
import { Spell } from "../../utils/types";
const API_URL:string = import.meta.env.VITE_API_URL;
export const spellApi = createApi({
  reducerPath: "spell",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["Spell"],
  endpoints: (builder) => ({
    getSpells: builder.query<Spell[],void>({
      query: () => ({
        url: Endpoint.GET_SPELL,
        method: "GET",
      }),
      providesTags: ["Spell"],
    }),
    individualSpell: builder.query<Spell ,string>({
      query: (name:string) => ({
        url: Endpoint.INDIVIDUAL_SPELL_BY_NAME(name),
        method: "GET",
      }),
      providesTags: ["Spell"],
    }),

  }),
});
export const {
  useGetSpellsQuery,
  useIndividualSpellQuery,
} = spellApi;
