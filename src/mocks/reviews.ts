type TUser = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export type TReview = {
    id: string;
    offerId: string;
    date: string;
    user: TUser;
    comment: string;
    rating: number;
}


const mockReviews: TReview[] = [
    {
        id: "review-1",
        offerId: "1",
        date: "2023-03-01T12:00:00Z",
        user: {
            name: "Иван Иванов",
            avatarUrl: "avatar.svg",
            isPro: false,
        },
        comment: "Отличная квартира, уютная и удобная.",
        rating: 4.7,
    },
    {
        id: "review-2",
        offerId: "1",
        date: "2023-02-15T15:30:00Z",
        user: {
            name: "Мария Петрова",
            avatarUrl: "avatar.svg",
            isPro: true,
        },
        comment: "Хорошее местоположение и чистота.",
        rating: 4.8,
    },
    {
        id: "review-3",
        offerId: "2",
        date: "2023-01-20T10:45:00Z",
        user: {
            name: "Александр Смирнов",
            avatarUrl: "avatar.svg",
            isPro: false,
        },
        comment: "Просторный дом с красивым садом.",
        rating: 4.5,
    },
    {
        id: "review-4",
        offerId: "3",
        date: "2023-04-05T08:20:00Z",
        user: {
            name: "Екатерина Сидорова",
            avatarUrl: "avatar.svg",
            isPro: true,
        },
        comment: "Отель на высшем уровне, великолепный сервис.",
        rating: 4.9,
    },
    {
        id: "review-5",
        offerId: "4",
        date: "2023-03-18T18:00:00Z",
        user: {
            name: "Дмитрий Кузнецов",
            avatarUrl: "avatar.svg",
            isPro: false,
        },
        comment: "Гостевой дом уютный, но немного шумно.",
        rating: 4.2,
    },
];

export default mockReviews;