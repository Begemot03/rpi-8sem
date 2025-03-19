import { CityOffer } from "./types/offer";

const Setting = {
    rentOffersCount: 312,
} as const;

const AppRoute = {
    Main: "/",
    Login: "/login",
    Favorites: "/favorites",
    Offer: "/offer"
} as const;

const AuthStatus = {
    Auth: "AUTH",
    NoAuth: "NO_AUTH",
    Unknown: "UNKNOWN"
} as const;

const CITIES_LOCATION: CityOffer[] = [
    {
        name: "Москва",
        location: { latitude: 55.7558, longitude: 37.6173, zoom: 12 }
    },
    {
        name: "Санкт-Петербург",
        location: { latitude: 59.9343, longitude: 30.3351, zoom: 12 }
    },
    {
        name: "Сочи",
        location: { latitude: 43.6028, longitude: 39.7342, zoom: 12 }
    },
    {
        name: "Красная Поляна",
        location: { latitude: 43.6803, longitude: 40.2104, zoom: 12 }
    }
];

const SortOffersType = {
    "Price: lower to high": { 0: "price", 1: false },
    "Price: high to low": { 0: "price", 1: true },
    "Top rated": { 0: "rating", 1: false },         
};


export { Setting, AppRoute, AuthStatus, CITIES_LOCATION, SortOffersType };