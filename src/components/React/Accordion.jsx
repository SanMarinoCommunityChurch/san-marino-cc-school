import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";

export default function Accordion({ question, children }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="">
            <div className="flex items-center gap-2">
              {question}
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </Disclosure.Button>
          <Transition show={open}>
            <Disclosure.Panel static>
              <div className="p-8 prose max-w-3xl mx-auto prose-h2:text-3xl prose-p:text-gray-500 prose-p:leading-normal prose-p:text-lg prose-a:text-brand-dark prose-a:underline hover:prose-a:no-underline prose-img:rounded-md">
                {children}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
