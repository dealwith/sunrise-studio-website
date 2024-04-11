import { ArrowButton, H2, P, Section, WhatWeDoCard } from "components";

import styles from "./whatWeDo.module.scss";

export const WhatWeDoSection = () => {
  return (
    <Section>
      <H2>What we do</H2>
      <div className="flex gap-6">
        <WhatWeDoCard title={"Web3"}>
          <P className="text-black">
            Decentralized, blockchain-based financial lending and support for
            tokenization of assets
          </P>
        </WhatWeDoCard>
        <WhatWeDoCard title={"Finance"}>
          <P className="text-black">
            Real-time financial data and visual tools for trading a variety of
            asset classes
          </P>
        </WhatWeDoCard>
        <WhatWeDoCard title={"E-commerse"}>
          <P className="text-black">
            Digital storefronts with integrated content management systems and
            payment processing solutions
          </P>
        </WhatWeDoCard>
        <WhatWeDoCard className={styles.card}>
          <ArrowButton width="14px" height="14px" className={styles.btn}>
            Learn more
          </ArrowButton>
        </WhatWeDoCard>
      </div>
    </Section>
  );
};
