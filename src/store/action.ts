import { createAction } from "@reduxjs/toolkit";
import { CityOffer, FullOffer } from "../types/offer";

const changeCity = createAction("offers/changeCity", (city: CityOffer) => ({
    payload: city
}));

const offersCityList = createAction("offers/offersCityList", (offers: FullOffer[]) => ({
    payload: offers
}));

export {
    changeCity,
    offersCityList
};