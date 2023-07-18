<script>

export default {
    name: "AppHeader"
}

</script>

<template>
    <!-- Nav Menu -->
    <nav class="flex justify-between px-5 my-2">
        <a href="/">
            <img src="../assets/logo.png" alt="logo" width="100">
        </a>
        <h1 class="font-bold text-2xl text-center text-primary-blu my-4"><i class="fa-solid fa-laptop-code fa-lg mr-2"></i> PROJECTS</h1>

        <!-- Nav Menu Links -->
        <div>
            <ul class="flex gap-[1em] text-[0.75rem] md:text-xs h-full items-center">
                <li>
                    <router-link class="text-xl" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="text-xl" to="/projects">Projects</router-link>
                </li>
            </ul>
        </div>

    </nav>
    
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;
</style>