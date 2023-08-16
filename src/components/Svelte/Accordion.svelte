<script>
    import { slide, fade } from "svelte/transition"
    import { Disclosure, DisclosureButton, DisclosurePanel } from "@rgossiaux/svelte-headlessui";
</script>

<Disclosure let:open class="w-full">
    <DisclosureButton class="w-full">
        <div class={open ? "flex items-center justify-between gap-2 font-heading text-xl p-6 rounded-md transition-colors w-full text-left text-gray-800 bg-brand-light/50 hover:bg-brand-light/60" : "flex items-center justify-between gap-2 font-heading text-xl p-6 rounded-md transition-colors w-full text-left text-gray-800 bg-brand-light/10 hover:bg-brand-light/20"}>
            <slot name="question">Question?</slot>
            <span class={open ? 'rotate-180 transition-transform inline-block' : 'rotate-0 transition-transform inline-block'}>
                <i class="fa-solid fa-chevron-down"></i>
            </span>
        </div>
    </DisclosureButton>

    {#if open}
        <div transition:slide>
            <DisclosurePanel static>
                <div class="pt-8 pl-6 pr-16 py-2 w-full flex flex-col gap-6 [&_h2]:text-3xl [&_a]:text-brand-dark [&_a]:underline hover:[&_a]:no-underline">
                    <slot name="answer">Answer</slot>
                </div>
            </DisclosurePanel>
        </div>
    {/if}
</Disclosure>