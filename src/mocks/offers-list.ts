import { OffersList } from './../types/offer';
import { FullOffer } from "../types/offer";

const mockOffersList: OffersList[] = [
    {
        id: "1",
        title: "Уютная квартира в центре",
        type: "apartment",
        price: 120,
        city: {
            name: "Москва",
            location: {
                latitude: 55.7558,
                longitude: 37.6173,
                zoom: 12,
            },
        },
        location: {
            latitude: 55.751,
            longitude: 37.618,
            zoom: 15,
        },
        isFavorite: false,
        isPremium: true,
        rating: 4.7,
        previewImage:  "kremlnkvartira.webp",
    },
    {
        id: "2",
        title: "Просторный дом с садом",
        type: "house",
        price: 250,
        city: {
            name: "Санкт-Петербург",
            location: {
                latitude: 59.9343,
                longitude: 30.3351,
                zoom: 12,
            },
        },
        location: {
            latitude: 59.931,
            longitude: 30.338,
            zoom: 15,
        },
        isFavorite: true,
        isPremium: false,
        rating: 4.5,
        previewImage: "domwithsad.webp",
    },
    {
        id: "3",
        title: "Роскошный отель с видом на море",
        type: "hotel",
        price: 350,
        city: {
            name: "Сочи",
            location: {
                latitude: 43.6028,
                longitude: 39.7342,
                zoom: 12,
            },
        },
        location: {
            latitude: 43.600,
            longitude: 39.730,
            zoom: 15,
        },
        isFavorite: false,
        isPremium: true,
        rating: 4.8,
        previewImage: "otelwithmore.webp",
    },
    {
        id: "4",
        title: "Гостевой дом в горах",
        type: "guesthouse",
        price: 90,
        city: {
            name: "Красная Поляна",
            location: {
                latitude: 43.6803,
                longitude: 40.2104,
                zoom: 12,
            },
        },
        location: {
            latitude: 43.678,
            longitude: 40.208,
            zoom: 15,
        },
        isFavorite: true,
        isPremium: false,
        rating: 4.3,
        previewImage: "domwithgori.webp",
    },
];

export default mockOffersList;
