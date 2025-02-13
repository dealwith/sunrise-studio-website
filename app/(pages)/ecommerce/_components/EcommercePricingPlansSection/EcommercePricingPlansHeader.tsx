import { featureHeaders } from "../../_data/featureHeaders";

export const EcommercePricingPlansHeader = () => {
  return (
    <div className="flex flex-col mt-[196px] w-full">
      <h3 className="text-2xl text-accent font-bold">Feature</h3>
      {Object.entries(featureHeaders).map(([key, section]) => (
        <div key={key}>
          <h4 className="text-xl font-bold text-accent flex items-center md:h-20 border-b">
            {section.title}
          </h4>
          <ul>
            {section.headers.map((header) => (
              <li
                key={header}
                className="flex items-center md:h-20 h-16 md:text-base text-sm border-b"
              >
                {header}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
