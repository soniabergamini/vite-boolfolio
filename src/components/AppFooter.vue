<script>

import FooterContactForm from './FooterContactForm.vue';

export default {
    name: "AppFooter",
    components: {
        FooterContactForm
    }
}

</script>

<template>
    <section class="bg-[#1a2233] h-full py-2 flex justify-center">
        <FooterContactForm />
    </section>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
</style>