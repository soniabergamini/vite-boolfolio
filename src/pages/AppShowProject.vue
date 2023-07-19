<script>
import {store} from '../data/store';
import axios from 'axios';

  export default {
    name: "AppShowProject",
    data () {
      return {
        store,
        project: undefined,
        loadingError : false
      }
    },
    methods: {
        // Returns Project Data via API Call
        getProject(id) {
            this.store.loading = true,
            console.log('api: ', this.store.baseAPIurl + this.store.projAPIpath + '/' + id)
            axios.get(this.store.baseAPIurl + this.store.projAPIpath + '/' + id).then((response) => {
                console.log(response.data),
                this.store.loading = false,
                this.project = response.data.results
            }).catch(err=> {
                this.store.loading = false,
                this.loadingError = "Cannot load project data. " + err,
                this.$router.push({ name: 'error', params: { code: 404 } })
            })
        }
    },
    mounted() {
        this.getProject(this.$route.params.id)
    }
  }
</script>

<template>
    <section v-if="project" class="h-full flex justify-center items-start py-5">

        <!-- Project Card -->
        <div class="border w-2/3 rounded flex flex-wrap items-center justify-between">

            <h2 class="w-full font-bold text-3xl text-primary-blu uppercase tracking-wider text-center py-5">{{ project.name }}</h2>
            <img :src='"http://localhost:8000/storage/" + project.image' :alt="project.name" class="w-1/2 max-h-96 object-center object-cover px-5">
        
            <!-- Project Details -->
            <div class="flex flex-col gap-y-2 justify-between w-1/2 p-5 border-l">
                <p>
                    <strong>Domain: </strong>
                    <span>{{ project.domain }}</span>
                </p>
                <p>
                    <strong>Type: </strong>
                    <span>{{ project.type ? project.type.name : "N/A"}}</span>
                </p>
                <p>
                    <strong>Technologies: </strong>
                    <template v-for="item in project.technologies">
                        <span>{{ item.name}}&nbsp </span>
                    </template>
                </p>
                <p>
                    <strong>Project Abstract: </strong>
                    <span>{{ project.description }}</span>
                </p>
                <p>
                    <strong>Release Date: </strong>
                    <span>{{ project.date.slice(0, 10) }}</span>
                </p>
            </div>

            <!-- Visit Button -->
            <a :href="project.link" class="font-bold border tracking-wider bg-primary-blu hover:border-spacing-2 border-primary-blu hover:bg-white hover:text-primary-blu py-1 w-full text-center mt-5">VISIT</a>
        </div>
    </section>
    
</template>
    

<style lang="scss" scoped>
@use '../variables.scss' as *;

</style>