import { ArrowButton, H2, MainContainer, P, WhatWeDoCard } from "components";

import styles from "./whatWeDo.module.scss";

export const WhatWeDo = () => {
	return (
		<MainContainer>
			<section className={styles.component}>
				<H2>What we do</H2>
				<div className="flex gap-6">
					<WhatWeDoCard title={"Web3"}>
						<P className="text-black">
							Decentralized finance Blockchain-based lending Tokenization of
							assets
						</P>
					</WhatWeDoCard>
					<WhatWeDoCard title={"Finance"}>
						<P className="text-black">
							Decentralized finance Blockchain-based lending Tokenization of
							assets
						</P>
					</WhatWeDoCard>
					<WhatWeDoCard title={"E-commerse"}>
						<P className="text-black">
							Decentralized finance Blockchain-based lending Tokenization of
							assets
						</P>
					</WhatWeDoCard>
					<WhatWeDoCard className={styles.card}>
						<ArrowButton width="14px" height="14px" className={styles.btn}>
							Learn more
						</ArrowButton>
					</WhatWeDoCard>
				</div>
			</section>
		</MainContainer>
	);
};
