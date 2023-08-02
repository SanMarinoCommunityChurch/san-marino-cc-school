import { Tab } from "@headlessui/react";
import { urlFor } from "@lib/sanity";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Features({ entries }) {
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <Tab.Group
      as="div"
      className="my-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 lg:grid-cols-12 lg:pt-0"
      vertical={tabOrientation === "vertical"}
    >
      {({ selectedIndex }) => (
        <>
          <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5 lg:order-2 lg:my-12">
            <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
              {entries.map((entry, index) => (
                <div
                  key={entry.heading}
                  className={clsx(
                    "group relative rounded-full px-4 py-1 lg:rounded-r-lg lg:rounded-l-none lg:py-8 lg:pl-12 lg:pr-8",
                    selectedIndex === index
                      ? "bg-[#ccecf3] lg:ring-1 lg:ring-inset lg:ring-white/10"
                      : "hover:bg-white/10 lg:hover:bg-white/5"
                  )}
                >
                  <h3>
                    <Tab
                      className={clsx(
                        "font-heading text-2xl [&:not(:focus-visible)]:focus:outline-none lg:text-left",
                        selectedIndex === index
                          ? "text-brand-dark"
                          : "text-gray-800 hover:text-brand-dark"
                      )}
                    >
                      <span className="absolute inset-0 pl-12 py-6 rounded-full lg:rounded-l-xl lg:rounded-r-none">
                        {entry.heading}
                      </span>
                    </Tab>
                  </h3>
                  <p className="mt-2 hidden text-base lg:block">{entry.text}</p>
                </div>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-6 lg:order-1 lg:h-full">
            {entries.map((entry) => (
              <Tab.Panel className="h-full" key={entry.heading} unmount={false}>
                <div className="relative sm:px-6 lg:hidden">
                  <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                  <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                    {entry.text}
                  </p>
                </div>
                <div className="overflow-hidden h-full rounded-xl shadow-xl">
                  <img
                    className="w-full object-cover h-full"
                    src={urlFor(entry.image)
                      .width(900)
                      .height(900)
                      .auto("format")
                      .url()}
                    alt={entry.image.asset.altText || ""}
                    width={900}
                    height={900}
                  />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  );
}
