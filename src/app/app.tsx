import { FC } from "react";
import MainPage from "../pages/main-page";
import { Setting } from "../const";
import NotFoundPage from "../pages/not-found-page";

const App: FC = () => {
	return (
		<>
			<MainPage rentalOffersCount={Setting.rentOffersCount} />
			<NotFoundPage />
		</>
	);
};

export default App;
