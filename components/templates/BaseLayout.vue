<template>
    <div>
        <StyledHeader />
        <main class="min-h-screen">
            <slot />
        </main>
        <StyledFooter />
    </div>
</template>

<script>
import StyledHeader from "@/components/organisms/Header";
import StyledFooter from "@/components/organisms/Footer";

export default {
    name: "BaseLayout",
    components: {
        StyledHeader,
        StyledFooter
    }
}
</script>

<style>

</style>