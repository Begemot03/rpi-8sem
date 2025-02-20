import { FC, PropsWithChildren } from "react";
import { AppRoute, AuthStatus } from "../../const";
import { Navigate } from "react-router-dom";

type AuthStatusEnum = (typeof AuthStatus)[keyof typeof AuthStatus];

type PrivateRouteProps = {
	authStatus: AuthStatusEnum;
};

const PrivateRoute: FC<PropsWithChildren<PrivateRouteProps>> = ({
	authStatus,
	children,
}) => {
	return authStatus === AuthStatus.Auth ? (
		children
	) : (
		<Navigate to={AppRoute.Login} />
	);
};

export default PrivateRoute;
