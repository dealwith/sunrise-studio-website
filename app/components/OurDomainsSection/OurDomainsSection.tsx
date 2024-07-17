import Image from "next/image";
import { useState } from "react";
import { ArrowButton, BorderedContainer, Button, H5 } from "components";
import { cn } from "utils/cn";
import { useWindowSize } from "hooks";

import web3DomainSrc from "./images/web3Domain.png";
import corporateDomainSrc from "./images/corporateDomain.png";
import bitcoinsDomainSrc from "./images/bitcoinsDomain.png";
import ecommerceDomainSrc from "./images/ecommerceDomain.png";

export const OurDomainsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { isLaptopS } = useWindowSize();
  const isAll = activeFilter === "all";
  const isWeb3 = activeFilter === "web3";
  const isFinance = activeFilter === "finance";
  const isEcommerce = activeFilter === "e-commerce";

  const handleClickFilter = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section className="flex flex-col items-center lg:my-[120px] sm:my-[100px] my-[60px]">
      <div className="flex justify-between w-full items-end sm:items-center gap-4 sm:flex-row flex-col sm:mb-[60px] mb-6">
        <h2 className="sm:w-fit w-full lg:text-[52px] md:text-[42px] text-[26px] font-unbounded">
          Our domains
        </h2>
        <div className="flex">
          <Button
            onClick={() => handleClickFilter("all")}
            size="filter"
            className={cn("rounded-s-2xl", {
              "text-black": isAll,
            })}
          >
            All
          </Button>
          <Button
            onClick={() => handleClickFilter("web3")}
            size="filter"
            className={cn({
              "text-black": isWeb3,
            })}
          >
            Web3
          </Button>
          <Button
            onClick={() => handleClickFilter("finance")}
            size="filter"
            className={cn({
              "text-black": isFinance,
            })}
          >
            Finance
          </Button>
          <Button
            onClick={() => handleClickFilter("e-commerce")}
            size="filter"
            className={cn("rounded-e-2xl", {
              "text-black": isEcommerce,
            })}
          >
            E-commerce
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-9">
        {isAll || isWeb3 ? (
          <BorderedContainer>
            <div className="flex flex-col sm:gap-4 gap-2.5 lg:w-[43%] md:w-[47%] w-full">
              <H5 className="font-medium">Web3</H5>
              <p className="text-base lg:text-xl font-light">
                t’s all about creativity and originality. That’s the key to
                making a splash in any field. Being too stuffy and serious just
                won’t cut it anymore. If you want your brand to be aspirational
                and exclusive, you gotta show some personality and dare to be
                different.
              </p>
            </div>
            <Image
              src={web3DomainSrc}
              alt="web3"
              object-fit={"contain"}
              className="lg:w-[34%] md:w-80 w-full"
            />
          </BorderedContainer>
        ) : null}
        {isAll || isFinance ? (
          <div className="flex justify-between items-center lg:gap-2.5 gap-4 md:flex-row flex-col lg:mb-10 md:mb-6 mb-4">
            <Image
              src={corporateDomainSrc}
              alt="corporate"
              object-fit={"contain"}
              className="md:w-1/2 w-full md:order-first order-last"
            />
            <BorderedContainer>
              <div className="flex flex-col sm:gap-4 gap-2.5 lg:w-[64%] w-full">
                <H5 className="font-medium">Finance</H5>
                <p className="text-base lg:text-xl font-light min-[950px]:mb-32 md:mb-24 mb-0">
                  t’s all about creativity and originality. That’s the key to
                  making a splash in any field. Being too stuffy and serious
                  just won’t cut it anymore. If you want your brand to be
                  aspirational and exclusive, you gotta show some personality
                  and dare to be different.
                </p>
              </div>
              {!isLaptopS && (
                <Image
                  src={bitcoinsDomainSrc}
                  alt="bitcoins"
                  className="bottom-[-40px] right-0 absolute w-[43%]"
                />
              )}
            </BorderedContainer>
          </div>
        ) : null}
        {isAll || isEcommerce ? (
          <BorderedContainer>
            {isLaptopS && (
              <H5 className="font-medium text-start w-full">E-commerce</H5>
            )}
            <Image
              src={ecommerceDomainSrc}
              alt="e-commerce"
              object-fit={"contain"}
              className="lg:w-[55%] md:w-3/5 w-full"
            />
            <div className="flex flex-col self-stretch gap-4 w-full">
              {!isLaptopS && <H5 className="font-medium">E-commerce</H5>}
              <p className="text-base lg:text-xl font-light">
                t’s all about creativity and originality. That’s the key to
                making a splash in any field. Being too stuffy and serious just
                won’t cut it anymore. If you want your brand to be aspirational
                and exclusive, you gotta show some personality and dare to be
                different.
              </p>
              <ArrowButton
                className="bg-accent md:mt-2 mt-0"
                width="10"
                height="10"
              >
                Learn more
              </ArrowButton>
            </div>
          </BorderedContainer>
        ) : null}
      </div>
    </section>
  );
};
