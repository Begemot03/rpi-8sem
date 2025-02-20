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

export { Setting, AppRoute, AuthStatus };