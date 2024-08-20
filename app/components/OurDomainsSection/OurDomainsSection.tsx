import { useState } from "react";
import { Button } from "components";
import { cn } from "utils/cn";
import { Domain } from "./Domain";

import web3DomainSrc from "./images/web3Domain.png";
import corporateDomainSrc from "./images/corporateDomain.png";
import bitcoinsDomainSrc from "./images/bitcoinsDomain.png";
import ecommerceDomainSrc from "./images/ecommerceDomain.png";

export const OurDomainsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const isAll = activeFilter === "all";
  const isWeb3 = activeFilter === "web3";
  const isFinance = activeFilter === "finance";
  const isEcommerce = activeFilter === "e-commerce";

  const domains = [
    {
      title: "Web3",
      description:
        "It’s all about creativity and originality. That’s the key to making a splash in any field. Being too stuffy and serious just won’t cut it anymore. If you want your brand to be aspirational and exclusive, you gotta show some personality and dare to be different.",
      primaryImage: web3DomainSrc,
      mainImagePosition: "right",
    },
    {
      title: "Finance",
      description:
        "It’s all about creativity and originality. That’s the key to making a splash in any field. Being too stuffy and serious just won’t cut it anymore. If you want your brand to be aspirational and exclusive, you gotta show some personality and dare to be different.",
      primaryImage: corporateDomainSrc,
      secondaryImage: bitcoinsDomainSrc,
      mainImagePosition: "left",
    },
    {
      title: "E-commerce",
      description:
        "It’s all about creativity and originality. That’s the key to making a splash in any field. Being too stuffy and serious just won’t cut it anymore. If you want your brand to be aspirational and exclusive, you gotta show some personality and dare to be different.",
      primaryImage: ecommerceDomainSrc,
      mainImagePosition: "right",
    },
  ];

  const filteredDomains = domains.filter(
    (domain) => isAll || domain.title.toLowerCase() === activeFilter,
  );

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
            variant="filter"
            className={cn("rounded-s-2xl", {
              "text-black": isAll,
            })}
          >
            All
          </Button>
          <Button
            onClick={() => handleClickFilter("web3")}
            variant="filter"
            className={cn({
              "text-black": isWeb3,
            })}
          >
            Web3
          </Button>
          <Button
            onClick={() => handleClickFilter("finance")}
            variant="filter"
            className={cn({
              "text-black": isFinance,
            })}
          >
            Finance
          </Button>
          <Button
            onClick={() => handleClickFilter("e-commerce")}
            variant="filter"
            className={cn("rounded-e-2xl", {
              "text-black": isEcommerce,
            })}
          >
            E-commerce
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-9">
        {filteredDomains.map((domain) => (
          <Domain
            key={domain.title}
            title={domain.title}
            description={domain.description}
            primaryImage={domain.primaryImage}
            secondaryImage={domain.secondaryImage}
            mainImagePosition={domain.mainImagePosition}
          />
        ))}
      </div>
    </section>
  );
};
