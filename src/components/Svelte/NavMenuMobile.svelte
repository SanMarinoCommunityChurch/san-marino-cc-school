<script>
    import { slide } from "svelte/transition"
    import { Popover, PopoverButton, PopoverPanel } from "@rgossiaux/svelte-headlessui";
</script>

<Popover class="relative" let:open>
    <PopoverButton class="relative z-50 inline-block py-2 px-4 text-brand">
        <span class="sr-only">{open ? 'Close Menu' : 'Open Menu'}</span>
        <span class={open ? 'hidden' : 'inline-block'}>
            <i class="fa-solid fa-bars fa-xl"></i>
        </span>
        <span class={open ? 'inline-block' : 'hidden' }>
            <i class="fa-solid fa-xmark-large fa-lg"></i>
        </span>
    </PopoverButton>
    {#if open}
        <div class="fixed z-0 inset-0 h-full w-full" transition:slide={{ duration: 300 }}>
            <PopoverPanel class="relative w-[100vw] h-[100vh] bg-white pt-16 pb-20 px-6 overflow-y-scroll">
                <slot name="panel"></slot>
                <div class="fixed menu-pattern-bg inset-0 w-full h-full" style="mask-image: linear-gradient(to bottom, black, transparent 80%); -webkit-mask-image: linear-gradient(to bottom, black, transparent 80%)"></div>
            </PopoverPanel>
        </div>
    {/if}
</Popover>