import { SortOffersType } from "../const";
import { FullOffer } from "../types/offer";
import { SortOffer } from "../types/sort";

const sortOffersByType = (offers: FullOffer[], type: SortOffer): FullOffer[] => {
    const isToLower = SortOffersType[type][1];
    const v = SortOffersType[type][0];

    return [...offers].sort((a, b) => {
        //@ts-ignore
        return isToLower ? b[v] - a[v] : a[v] - b[v];
    })
}

export { sortOffersByType };