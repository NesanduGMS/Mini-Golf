import { check, logoSymbol } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <div className="lg:flex px-[10%] lg:px-[12%] bg-n-19 py-10">
      <div className="max-w-[25rem] lg:pt-15">
        <h2 className="h2 mb-4 md:mb-8">What We Offer</h2>

        <ul className="max-w-[22rem] mb-10 md:mb-14">
          {collabContent.map((item) => (
            <li className="mb-3 py-3" key={item.id}>
              <div className="flex items-center">
                <img src={check} width={24} height={24} alt="check" />
                <h6 className="body-2 ml-5">{item.title}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="ml-auto">
        <p className="mt-6 body-2 mb-8 text-n-4 md:mb-16 lg:mb-20 lg:w-[40rem] lg:mx-auto">
          At Mini Golf Hire, we go beyond just providing portable mini golf
          courses. Our comprehensive services are designed to make your event as
          seamless as possible. With $10 million in public liability insurance,
          flexible pick-up and delivery options, and on-site supervision, we
          ensure a hassle-free experience. We also offer custom course design
          and build services, along with portable fencing, scorecards, pencils,
          and golfer certificates to complete the fun!
        </p>

        <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-14 rounded-full -translate-x-1/2 scale:75 md:scale-100">
          <div className="flex w-60 aspect-square m-auto border border-n-2 rounded-full">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
              <div className="flex items-center justify-center w-full h-full bg-n-19 rounded-full">
                <img
                  src={logoSymbol}
                  width={48}
                  height={48}
                  alt="mini-golf-hire"
                />
              </div>
            </div>
          </div>

          <ul>
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                  index * 45
                }`}
              >
                <div
                  className={`relative bg-n-19 -top-[1.6rem] flex w-[3.2rem] border border-n-14 p-0.5 rounded-xl -rotate-${
                    index * 45
                  }`}
                >
                  <img
                    className="m-auto"
                    src={app.icon}
                    height={app.height}
                    alt={app.title}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
