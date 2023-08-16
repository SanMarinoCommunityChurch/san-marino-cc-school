<script>
    import { slide, fly, fade } from "svelte/transition"
    import { Popover, PopoverButton, PopoverPanel, TransitionRoot } from "@rgossiaux/svelte-headlessui";
    import constructHref from "../../utils/constructHref";

    export let title;
    export let entries;
</script>

<Popover let:open class="relative inline-block text-center z-[50]">
    <PopoverButton class="inline-flex w-full justify-center items-center gap-2">
        <span class={open && 'text-brand-dark'}>{title}</span>
        <span class={open ? 'rotate-180 transition-transform inline-block' : 'rotate-0 transition-transform inline-block'}>
            <i class="fa-solid fa-chevron-down transition-transform fa-xs text-brand-light"></i>
        </span>
    </PopoverButton>
    <TransitionRoot
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0">
        <PopoverPanel class="">
            <ul class="absolute w-52 left-1/2 translate-y-4 -translate-x-1/2 bg-white shadow-md rounded-md flex flex-col gap-2 pt-4 pb-2 px-2">
                {#each entries as entry}
                    <li><a href={constructHref(entry.link)} class="hover:text-brand-dark hover:bg-brand-light/10 inline-block w-full rounded-md p-2 text-base leading-tight">{entry.linkName || entry.link.pageName}</a></li>
                {/each}
            </ul>
        </PopoverPanel>
    </TransitionRoot>
</Popover>