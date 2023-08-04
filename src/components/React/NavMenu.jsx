import { Menu, Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import constructHref from "../../utils/constructHref";
import clsx from "clsx";

export default function NavMenu({ title, entries }) {
  return (
    <Menu as="div" className="relative inline-block text-center z-[50]">
      {({ open }) => (
        <>
          <Menu.Button
            // onMouseEnter={({ target }) => (open ? "" : target.click())}
            className={clsx(
              "inline-flex w-full justify-center items-center gap-2",
              open && "text-brand-dark"
            )}
          >
            {title}
            <span
              className={clsx("transition-transform", open && "rotate-180")}
            >
              <i className="fa-solid fa-chevron-down transition-transform fa-xs text-brand-light"></i>
            </span>
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items
              static
              className="absolute w-52 top-4 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-md flex flex-col gap-2 pt-4 pb-2 px-2"
            >
              {entries.map((entry, index) => {
                return (
                  <Menu.Item key={index} as={Fragment}>
                    {({ active }) => (
                      <a
                        href={constructHref(entry.link)}
                        className="hover:text-brand-dark hover:bg-brand-light/10 inline-block w-full rounded-md p-2 text-base leading-tight"
                      >
                        {entry.linkName || entry.link.pageName}
                      </a>
                    )}
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
