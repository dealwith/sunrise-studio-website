import { ArrowButton, H2, P, Section, WhatWeBuildCard } from "components";

import styles from "./whatWeBuild.module.scss";

export const WhatWeBuildSection = () => {
  return (
    <Section>
      <div id="services" className="flex flex-col gap-[60px]">
        <H2>What we build</H2>
        <div className="grid grid-cols-1 min-[484px]:grid-cols-2 min-[940px]:grid-cols-4 gap-3 lg:gap-6">
          <WhatWeBuildCard
            title={"Web3"}
            className="lg:h-[322px] md:h-[274px] h-[254px]"
          >
            <P className="text-black">
              Decentralized, blockchain-based financial lending and support for
              tokenization of assets
            </P>
          </WhatWeBuildCard>
          <WhatWeBuildCard
            title={"Finance"}
            className="lg:h-[322px] md:h-[274px] h-[254px]"
          >
            <P className="text-black">
              Real-time financial data and visual tools for trading a variety of
              asset classes
            </P>
          </WhatWeBuildCard>
          <WhatWeBuildCard
            title="E-commerce"
            className="lg:h-[322px] md:h-[274px] h-[254px]"
          >
            <P className="text-black">
              Digital storefronts with integrated content management systems and
              payment processing solutions
            </P>
          </WhatWeBuildCard>
          <WhatWeBuildCard className="lg:h-[322px] md:h-[274px] h-[254px] bg-accent justify-center items-center">
            <a href="#contactUs">
              <ArrowButton width="14px" height="14px" className={styles.btn}>
                Much More
              </ArrowButton>
            </a>
          </WhatWeBuildCard>
        </div>
      </div>
    </Section>
  );
};
