import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

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
					<h2 className="text-2xl">EnDasmu</h2>
					<HiOutlineBars3 className="text-3xl cursor-pointer" />
				</div>
				<div
					className={`${
						menu && "grid-rows-[1fr]"
					} grid grid-rows-[0fr] transition-[grid-template-rows]`}
				>
					<ul className="overflow-hidden flex flex-col items-center gap-4 text-2xl capitalize">
						<li>
							<button>
								<a href="#">collection</a>
							</button>
						</li>
						<li>
							<button>
								<a href="#">market place</a>
							</button>
						</li>
						<li>
							<button>
								<a href="#">community</a>
							</button>
						</li>
						<li>
							<button className="border-neutral-50 px-4 py-2 border-2 rounded-full">
								<a href="#" onClick={() => alert("click")}>connect walet</a>
							</button>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}
