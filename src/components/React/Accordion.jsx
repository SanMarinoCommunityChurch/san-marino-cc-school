import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";

export default function Accordion({ question, children }) {
  return (
    <Disclosure className="w-full max-w-3xl">
      {({ open }) => (
        <>
          <Disclosure.Button className="">
            <div
              className={clsx(
                "flex items-center justify-between gap-2 font-heading text-xl p-6 rounded-md transition-colors w-full text-gray-800",
                open
                  ? "bg-brand-light/50 hover:bg-brand-light/60"
                  : "bg-brand-light/10 hover:bg-brand-light/20"
              )}
            >
              {question}
              <span
                className={clsx("transition-transform", open && "rotate-180")}
              >
                <i className="fa-solid fa-chevron-down transition-transform"></i>
              </span>
            </div>
          </Disclosure.Button>
          <Transition
            show={open}
            // enter="transition-all duration-200 ease-in-out"
            // enterFrom="opacity-0 h-0"
            // enterTo="opacity-100 h-auto"
            // leave="transition-all duration-100 ease-in-out"
            // leaveFrom="opacity-100 h-auto"
            // leaveTo="opacity-0 h-0"
          >
            <Disclosure.Panel static>
              <div className="pl-6 pr-16 py-2 w-full flex flex-col gap-6 [&_h2]:text-3xl [&_a]:text-brand-dark [&_a]:underline hover:[&_a]:no-underline">
                {children}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
