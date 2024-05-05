import { ArrowButton, H2, P, Section, WhatWeDoCard } from "components";

import styles from "./whatWeDo.module.scss";

export const WhatWeDoSection = () => {
  return (
    <Section>
      <div id="services" className="flex flex-col gap-[60px]">
        <H2>What we do</H2>
        <div className="flex gap-3 lg:gap-6">
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
          <WhatWeDoCard title="E-commerce">
            <P className="text-black">
              Digital storefronts with integrated content management systems and
              payment processing solutions
            </P>
          </WhatWeDoCard>
          <WhatWeDoCard className={styles.card}>
            <a href="#contactUs">
              <ArrowButton width="14px" height="14px" className={styles.btn}>
                Much More
              </ArrowButton>
            </a>
          </WhatWeDoCard>
        </div>
      </div>
    </Section>
  );
};
