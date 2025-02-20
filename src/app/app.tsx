import { FC } from "react";
import MainPage from "../pages/main-page";
import { AppRoute, AuthStatus, Setting } from "../const";
import NotFoundPage from "../pages/not-found-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OfferPage from "../pages/offer-page";
import LoginPage from "../pages/login-page";
import FavoritesPage from "../pages/favorites-page";
import PrivateRoute from "../components/private-route/private-route";
import mockOffers from "../mocks/offer";

const App: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path={AppRoute.Main}
					element={
						<MainPage
							rentalOffersCount={Setting.rentOffersCount}
							offers={mockOffers}
						/>
					}
				/>
				<Route
					path={AppRoute.Favorites}
					element={
						<PrivateRoute authStatus={AuthStatus.Auth}>
							<FavoritesPage />
						</PrivateRoute>
					}
				/>
				<Route path={AppRoute.Login} element={<LoginPage />} />
				<Route path={AppRoute.Offer} element={<OfferPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
