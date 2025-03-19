import { FC, useState } from "react";
import { SortOffer } from "../../types/sort";
import { SortOffersType } from "../../const";

interface ISortVariantsProps {
	activeSorting: SortOffer;
	onChange: (newSorting: SortOffer) => void;
}

const SortVariants: FC<ISortVariantsProps> = ({ activeSorting, onChange }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const iconStyle = {
		transform: `translateY(-50%) ${isOpen ? "rotate(180deg)" : ""}`,
	};

	const keyDownHandler = (e: React.KeyboardEvent<HTMLFormElement>) => {
		if (e.key == "Escape" && isOpen) {
			e.preventDefault();
			setIsOpen(false);
		}
	};

	const typeClickHandler = () => setIsOpen((prev) => !prev);

	const sortingItemClickHandler = (type: SortOffer) => {
		onChange(type);
		setIsOpen(false);
	};

	return (
		<form
			className="places__sorting"
			action="#"
			method="get"
			onKeyDown={(e) => keyDownHandler(e)}
		>
			<span className="places__sorting-caption">Sort by</span>
			<span
				className="places__sorting-type"
				tabIndex={0}
				onClick={() => typeClickHandler}
			>
				{activeSorting}
				<svg
					className="places__sorting-arrow"
					width="7"
					height="4"
					style={iconStyle}
				>
					<use xlinkHref="#icon-arrow-select"></use>
				</svg>
			</span>
			<ul className="places__options places__options--custom places__options--opened">
				{Object.keys(SortOffersType).map((type: string) => (
					<li
						key={type}
						className={`places__option ${
							type == activeSorting ? "places__option--active" : ""
						}`}
						tabIndex={0}
						onClick={() => sortingItemClickHandler(type as SortOffer)}
					>
						{type}
					</li>
				))}
			</ul>
		</form>
	);
};

export default SortVariants;
