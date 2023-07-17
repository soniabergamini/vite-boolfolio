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
            loadingError: false

        }
    },
    methods: {
        getProjectData() {
            this.loading = true
            axios.get(this.baseAPIurl + this.projAPIpath).then((response) => {
                // console.log(response.data.results),
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
        <MainProjectCard :projects="projects" />
    </section>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;
</style>