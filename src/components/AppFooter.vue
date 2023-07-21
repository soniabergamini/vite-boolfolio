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
    <section class="bg-gray-800 py-7 flex justify-between px-6">
        <FooterContactForm />
        <div class="w-[1/2]">
            footer links
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;
</style>