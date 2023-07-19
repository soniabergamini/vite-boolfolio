<script>

export default {
    name: "AppHeader",
    data() {
        return {
            menuItems: [
                { name: 'homepage', label: 'Home', path: '/'},
                { name: 'projects', label: 'Projects', path: '/projects'},
            ]
        }
    },
}

</script>

<template>
    <!-- Nav Menu -->
    <nav class="flex justify-between px-5 my-2 h-20 items-center">
        <router-link :to="{name : 'homepage'}">
            <img src="../assets/logoo.png" alt="logo" width="100">
        </router-link>
        <router-link :to="{name : 'projects'}">
            <h1 class="font-bold text-2xl text-center text-primary-blu my-4"><i class="fa-solid fa-laptop-code fa-lg mr-2"></i> BOOLFOLIO</h1>
            <img src="../assets/logoo.png" alt="logo" width="100">
        </router-link>
        
        <!-- Nav Menu Links -->
        <div>
            <ul class="flex gap-[1em] text-[0.75rem] md:text-xs h-full items-center">
                <li v-for="item in menuItems">
                    <router-link class="text-lg font-bold hover:text-primary-blu" :to="item.path">{{item.label}}</router-link>
                </li>
            </ul>
        </div>

    </nav>
    
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;
</style>