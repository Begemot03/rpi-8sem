import { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FullOffer } from "../../types/offer";

interface CitiesMapProps {
	offers: FullOffer[];
}

const CitiesMap: FC<CitiesMapProps> = ({ offers }) => {
	const pos: [number, number] = [
		offers[0].location.latitude,
		offers[0].location.longitude,
	];

	return (
		<section className="map" style={{ width: "100%", height: "100%" }}>
			<MapContainer
				key={pos.join("-")}
				center={pos}
				zoom={6}
				scrollWheelZoom={false}
				style={{ width: "100%", height: "100%" }}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				{offers.length > 0 &&
					offers.map((offer) => (
						<Marker
							position={[offer.location.latitude, offer.location.longitude]}
							key={offer.id}
						>
							<Popup>
								{offer.title}: {offer.price}₽
							</Popup>
						</Marker>
					))}
			</MapContainer>
		</section>
	);
};

export default CitiesMap;
