<script>
// import axios from 'axios'
// import MainProjectCard from './MainProjectCard.vue';


export default {
    name: "AppHomepage",
    // components: {
    //     MainProjectCard
    // },
    // data() {
    //     return {
    //         baseAPIurl: "http://localhost:8000/api/",
    //         projAPIpath: "projects",
    //         projects: [],
    //         loading: false,
    //         loadingError: false,
    //         projTotalPages: 0,
    //         projCurrentPage: 0

    //     }
    // },
    // methods: {
    //     getProjectData(pageNumber) {
    //         this.loading = true
    //         axios.get(this.baseAPIurl + this.projAPIpath, {params: {page: pageNumber}}).then((response) => {
    //             console.log(response.data.results),
    //             this.loading = false,
    //             this.projects = response.data.results.data,
    //             this.projCurrentPage = response.data.results.current_page,
    //             this.projTotalPages = response.data.results.last_page
    //         }).catch(err=> {
    //             this.loading = false,
    //             this.loadingError = "Cannot load projects data. " + err
    //         })
    //     }
    // },
    // mounted() {
    //     this.getProjectData(1)
    // }
}

</script>

<template>

   <h3>CIAO IO SONO HOMEPAGE</h3>
   
</template>
    

<style lang="scss" scoped>
@use '../variables.scss' as *;

</style>