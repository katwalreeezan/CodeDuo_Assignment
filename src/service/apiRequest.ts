import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Endpoint from "./Endpoint";
const API_URL=import.meta.env.VITE_API_URL
export const spellApi=createApi({
    reducerPath:'spell',
    baseQuery:fetchBaseQuery({
        baseUrl:API_URL
    }),
    tagTypes:['Spell'],
    endpoints:(builder)=>({
        getSpells:builder.query({
            query:()=>({
                url:Endpoint.GET_SPELL,
                method:"GET"
            }),
            providesTags:['Spell']
        }),
        individualSpell:builder.query({
            query:(name)=>({
                url:Endpoint.INDIVIDUAL_SPELL_BY_NAME(name),
                method:"GET"
            }),
            providesTags:['Spell']
        }),
        
        addSpells:builder.mutation({
            query:(data)=>({
                url:Endpoint.ADD_STUDENT,
                method:"POST",
                body:data
            }),
            invalidatesTags:['Spell']
        })
    })
})
export const {useGetSpellsQuery, useAddSpellsMutation,useIndividualSpellQuery}=spellApi