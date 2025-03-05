import { FC } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../const";

const Logo: FC = () => {
	return (
		<Link
			to={AppRoute.Main}
			className="header__logo-link header__logo-link--active"
		>
			<img
				className="header__logo"
				src="/img/logo.svg"
				alt="Rent service logo"
				width="81"
				height="41"
			/>
		</Link>
	);
};

export default Logo;
