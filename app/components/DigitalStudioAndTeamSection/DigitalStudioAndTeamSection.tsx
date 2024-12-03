import Image from "next/image";

import { P } from "components";

export const DigitalStudioAndTeamSection = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex md:flex-row flex-col md:gap-8 gap-6 lg:mb-40 md:mb-24 mb-14">
        <h2 className="w-full lg:text-4xl md:text-3xl text-2xl font-unbounded">
          <Image
            src="/images/quote.png"
            alt="Quote"
            style={{
              transform: "scaleX(-1) scaleY(-1)",
              opacity: 0.4,
            }}
            width={50}
            height={50}
          />
          Our mission needs to be simple: to make scaling a project as easy as
          having the idea in the first place.
          <div className="flex justify-start items-center mt-4">
            <small className="flex justify-between w-full relative">
              -Gleb Kryshyn
              <Image
                src="/images/quote.png"
                alt="Flipped Quote"
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  opacity: 0.5,
                }}
                width={50}
                height={50}
              />
            </small>
          </div>
        </h2>

        <div className="w-full flex flex-col gap-4">
          <P className="lg:text-xl font-light">
            Founded by a talented team of developers and designers, our goal has
            always been to reduce the barriers to entry for those with ideas. As
            entrepreneurs ourselves, we&apos;ve experienced the challenges of
            finding quality, affordable talent to scale our own projects. These
            hardships shaped our mission to create a solution that bridges the
            gap between vision and execution. We believe that cost and access to
            expertise should never limit innovation, which is why we offer
            flexible, scalable, and tailored solutions to help businesses bring
            their ideas to life.
          </P>
          <P className="lg:text-xl font-light">
            Based in Poland, we leverage our extensive network of skilled
            developers to support others who face similar challenges. Our
            outsourcing studio is built on the principles of collaboration,
            efficiency, and trust. Whether you&apos;re a startup looking to
            scale or an established company in need of additional expertise, we
            provide the support you need to achieve your goals. By combining our
            technical know-how with firsthand experience, we&apos;re uniquely
            positioned to help businesses save time, reduce costs, and build
            meaningful, long-lasting partnerships.
          </P>
        </div>
      </div>
    </section>
  );
};
