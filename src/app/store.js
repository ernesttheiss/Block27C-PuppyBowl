import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players"; 


export const store = configureStore({
  
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});


export const { useFetchPlayersQuery } = puppyBowlApi;
