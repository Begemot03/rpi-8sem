type OfferLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
}

type CityOffer = {
    name: string;
    location: OfferLocation;
}

type HostOffer = {
    name: string;
    avatarUrt: string;
    isPro: boolean;
}

export type FullOffer = {
    ld: string;
    title: string;
    type: string;
    price: number;
    city: CityOffer;
    location: OfferLocation;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: HostOffer;
    images: string[];
    maxAdults: number;
}