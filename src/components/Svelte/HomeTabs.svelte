<script>
    import { slide, fade } from "svelte/transition"
    import { 
    Tab, 
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionRoot } from "@rgossiaux/svelte-headlessui"
    import { urlFor } from "@lib/sanity";

    export let entries;
</script>

<TabGroup vertical class="relative z-[5] mt-4 mb-16 xl:my-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 lg:grid-cols-12 lg:pt-0">
    <div class="-mx-4 flex pb-4 sm:mx-0 sm:pb-0 lg:col-span-5 lg:order-2 lg:my-12">
    <TabList let:selectedIndex class="overflow-x-scroll lg:overflow-auto relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
        {#each entries as entry, index}
        <div class={selectedIndex == index ? "bg-[#ccecf3] lg:ring-1 lg:ring-inset lg:ring-white/10 | group relative rounded-full px-4 py-1 lg:rounded-r-lg lg:rounded-l-none lg:py-8 lg:pl-12 lg:pr-8" : "hover:bg-white/10 lg:hover:bg-white/5 | group relative rounded-full px-4 py-1 lg:rounded-r-lg lg:rounded-l-none lg:py-8 lg:pl-12 lg:pr-8"}>
            <Tab class="[&:not(:focus-visible)]:focus:outline-none lg:text-left">
                <div class="font-heading text-lg sm:text-2xl text-gray-800 group-hover:text-brand-dark">{entry.heading}</div>
                <p class="mt-2 hidden text-base lg:block">{entry.text}</p>
            </Tab>
        </div>
        {/each}
    </TabList>
    </div>
    <TabPanels unmount={false} class="lg:col-span-6 lg:order-1 lg:h-full overflow-hidden rounded-xl">
        {#each entries as entry}
            <TabPanel let:selected unmount={false} class="h-full">
                <TransitionRoot 
                appear
                unmount={false}
                show={selected}
                  enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="-opacity-0"
                >
                    <div class="text-center mt-2 mb-8 lg:hidden">{entry.text}</div>
                    <div class="relative h-full rounded-xl shadow-xl">
                        <img
                        class="w-full object-cover h-full rounded-xl"
                        src={urlFor(entry.image)
                        .width(900)
                        .height(900)
                        .auto("format")
                        .url()}
                        alt={entry.image.asset.altText || ""}
                        style={`background-image: url(${entry.image.asset.metadata.lqip})`}
                        width={900}
                        height={900}
                        loading="lazy"
                        decoding="async"
                    />
                    </div>
                </TransitionRoot>
            </TabPanel>
        {/each}
    </TabPanels>
</TabGroup>