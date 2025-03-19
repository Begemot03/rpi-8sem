import { createReducer } from "@reduxjs/toolkit";
import { CITIES_LOCATION } from "../const"
import { changeCity, offersCityList } from "./action";
import mockOffers from "../mocks/offer";

const getCity = (name: string) => CITIES_LOCATION.filter(city => city.name == name)[0];
const defaultCity = getCity("Москва");

const initialState = {
    city: defaultCity,
    offers: mockOffers.filter(offer => offer.city.name == defaultCity.name),
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeCity, (state, action) => {
            state.city = action.payload;
            state.offers = mockOffers.filter(offer => offer.city.name == action.payload.name);
        })
        .addCase(offersCityList, (state, action) => {
            state.offers = action.payload;
        });
});

export default reducer;