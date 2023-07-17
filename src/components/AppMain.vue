<script>
import axios from 'axios'
import MainProjectCard from './MainProjectCard.vue';


export default {
    name: "AppMain",
    components: {
        MainProjectCard
    },
    data() {
        return {
            baseAPIurl: "http://localhost:8000/api/",
            projAPIpath: "projects",
            projects: [],
            loading: false,
            loadingError: false,
            projTotalPages: 0,
            projCurrentPage: 0

        }
    },
    methods: {
        getProjectData(pageNumber) {
            this.loading = true
            axios.get(this.baseAPIurl + this.projAPIpath, {params: {page: pageNumber}}).then((response) => {
                console.log(response.data.results),
                this.loading = false,
                this.projects = response.data.results.data,
                this.projCurrentPage = response.data.results.current_page,
                this.projTotalPages = response.data.results.last_page
            }).catch(err=> {
                this.loading = false,
                this.loadingError = "Cannot load projects data"
            })
        }
    },
    mounted() {
        this.getProjectData(1)
    }
}

</script>

<template>

    <!-- Project Card Section -->
    <section v-if="projects.length > 0" class="flex justify-between flex-wrap gap-2 p-6">
        <template v-for="project in projects">
            <MainProjectCard :project="project" />
        </template>
    </section>

    <!-- Buttons Page Card -->
    <section id="buttonSec" class="flex justify-center my-3">
        <div class="flex justify-center gap-7 border rounded px-3 py-1">
                <button v-show="projCurrentPage > 1" @click="getProjectData(projCurrentPage-1)" class="px-2 border-r hover:text-primary-blu"><i class="fa-solid fa-chevron-left fa-xs"></i> Preview</button>
            <div class="px-3">
                <template v-for="pageNumber in projTotalPages">
                    <button @click="getProjectData(pageNumber)" :class="projCurrentPage === pageNumber ? 'font-bold border text-primary-blu' : null" class="px-3 py-1 hover:bg-gray-200" >{{ pageNumber }}</button>
                </template>
            </div>
            <button v-show="projCurrentPage < projTotalPages" @click="getProjectData(projCurrentPage+1)" class="px-2 border-l hover:text-primary-blu">Next <i class="fa-solid fa-chevron-right fa-xs"></i></button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;

</style>