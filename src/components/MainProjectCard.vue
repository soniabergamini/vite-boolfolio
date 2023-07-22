<script>

export default {
    name: "AppMain",
    props: {
        project: Object
    }
}

</script>

<template>
    <!-- Project Card -->
    <div class="border w-4/5 sm:w-[calc(100%/3-8px)] rounded text-center flex flex-col justify-between">

        <!-- On Click Redirect to Route 'show-projects' -->
        <router-link :to="{ name:'show-projects', params: {id: project.id} }">
            <img :src='"http://localhost:8000/storage/" + project.image' :alt="project.name" class="w-full max-h-80 object-center object-cover rounded">
        </router-link>
        
        <!-- Project Details -->
        <div class="flex flex-col gap-1.5 justify-between">
            <h2 class="font-bold text-xl text-primary-blu uppercase tracking-wider pt-2">{{ project.name }}</h2>
            <p>
                <strong>Type: </strong>
                <span>{{ project.type ? project.type.name : "N/A"}}</span>
            </p>
            <div class="px-3 text-sm text-left">
                <p class="overviewText">{{ project.description }}</p>
            </div>
            <p class="text-sm italic text-gray-500 my-2">({{ project.stack }})</p>
        </div>

        <!-- Show More Button -->
        <router-link :to="{ name:'show-projects', params: {id: project.id} }">
            <v-btn variant="flat" density="default" rounded="0" class="hover:text-primary-blu font-bold bg-primary-blu hover:bg-white text-slate-50 w-full showmoreBtn">SHOW MORE</v-btn>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

p.overviewText {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.showmoreBtn {
    border-radius: 0 0 3px 3px !important;
}

</style>