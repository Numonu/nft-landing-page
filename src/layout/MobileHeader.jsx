import { useState } from "react";

export default function MobileHeader() {
	const [menu, setMenu] = useState(false);

	const on = () => setMenu(true);
	const off = () => setMenu(false);
	return (
		<>
			<header className="py-4 font-light">
				<div
					className="flex justify-between items-center"
					onClick={() => (menu ? off() : on())}
				>
					<h2 className="text-2xl">Numonu</h2>
					<i className="fa-solid fa-bars text-3xl cursor-pointer"></i>
				</div>
				<div
					className={`${
						menu && "grid-rows-[1fr]"
					} grid grid-rows-[0fr] transition-[grid-template-rows]`}
				>
					<ul className="overflow-hidden flex flex-col items-center gap-4 text-2xl capitalize">
						<li>
							<a href="#">Collection</a>
						</li>
						<li>
							<a href="#">Marketplace</a>
						</li>
						<li>
							<a href="#">Community</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
						<li>
							<button className="border-neutral-50 px-4 py-2 border-2 rounded-full">
								<a href="#">Connect Wallet</a>
							</button>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}
