<script>
import axios from 'axios'


export default {
    name: "AppMain",
    props: {
        project: Object
    }
}

</script>

<template>
    <div class="border w-[calc(100%/3-8px)] rounded text-center flex flex-col justify-between">

        <!-- On Click Redirect to Route 'show-projects' -->
        <router-link :to="{ name:'show-projects', params: {id: project.id} }">
            <img :src='"http://localhost:8000/storage/" + project.image' :alt="project.name" class="w-full max-h-80 object-center object-cover rounded">
        </router-link>
        
        <!-- Project Info -->
        <div class="flex flex-col gap-2 justify-between">
            <h2 class="font-bold text-lg text-primary-blu uppercase tracking-wider">{{ project.name }}</h2>
            <p>
                <strong>Type: </strong>
                <span>{{ project.type ? project.type.name : "N/A"}}</span>
            </p>
            <div class="px-3 text-xs text-left">
                <p>{{ project.description }}</p>
            </div>
            <p class="text-sm italic text-gray-500 my-2">({{ project.stack }})</p>
        </div>
        <a :href="project.link" class="font-bold border tracking-wider bg-primary-blu text-white hover:border-spacing-2 border-primary-blu hover:bg-white hover:text-primary-blu py-1">VISIT</a>
    </div>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;
</style>