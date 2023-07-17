<script>
import axios from 'axios'


export default {
    name: "AppMain",
    data() {
        return {
            baseAPIurl: "http://localhost:8000/api/",
            projAPIpath: "projects",
            projects: [],
            loading: false,
            loadingError: false

        }
    },
    methods: {
        getProjectData() {
            this.loading = true
            axios.get(this.baseAPIurl + this.projAPIpath).then((response) => {
                console.log(response.data.results),
                this.loading = false,
                this.projects = response.data.results
            }).catch(err=> {
                this.loading = false,
                this.loadingError = "Cannot load projects data"
            })
        }
    },
    mounted() {
        this.getProjectData()
    }
}

</script>

<template>
    <section class="flex justify-between flex-wrap gap-2 p-6">
        <div v-for="project in projects" class="border w-[calc(100%/5-8px)] rounded text-center flex flex-col justify-between">
            <img :src='"http://localhost:8000/storage/" + project.image' :alt="project.name" class="w-full max-h-72 object-center object-cover rounded">
            <div class="flex flex-col gap-2 justify-between">
                <h2 class="font-bold text-lg text-primary-blu uppercase tracking-wider">{{ project.name }}</h2>
                <div class="px-3 text-xs text-left">
                    <p>{{ project.description }}</p>
                </div>
                <p class="text-sm italic text-gray-500 my-2">({{ project.stack }})</p>
            </div>
            <a :href="project.link" class="font-bold border tracking-wider bg-primary-blu text-white hover:border-spacing-2 border-primary-blu hover:bg-white hover:text-primary-blu">VISIT</a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;
</style>