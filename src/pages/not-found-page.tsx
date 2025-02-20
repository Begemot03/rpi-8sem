import { FC } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../const";

const NotFoundPage: FC = () => {
	return (
		<div className="page page--gray notfound">
			<div>404</div>
			<div>Страница не найдена</div>
			<div>
				<Link to={AppRoute.Main}>Вернуться на главную страницу</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
