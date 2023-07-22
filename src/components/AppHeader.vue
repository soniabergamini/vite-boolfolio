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
    <nav class="flex justify-between sm:px-5 px-3 h-20 items-center">

        <!-- Logo: Onclick Redirect to Route 'homepage' -->
        <router-link :to="{name : 'homepage'}">
            <img src="../assets/logoo.png" alt="logo" class="min-h-[30px] max-h-20">
        </router-link>

        <!-- Site Title: Onclick Redirect to Route 'projects' -->
        <router-link :to="{name : 'projects'}">
            <h1 class="font-bold text-xl sm:text-3xl text-center text-primary-blu my-4"><i class="fa-solid fa-laptop-code fa-lg mr-1 sm:mr-2"></i> BOOLFOLIO</h1>
        </router-link>
        
        <!-- Nav Menu Links -->
        <div>
            <ul class="flex gap-[1em] text-[0.75rem] md:text-xs h-full items-center">
                <li v-for="item in menuItems">
                    <router-link class="text-sm sm:text-lg font-bold hover:text-primary-blu" :to="item.path">{{item.label}}</router-link>
                </li>
            </ul>
        </div>

    </nav>
    
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
</style>