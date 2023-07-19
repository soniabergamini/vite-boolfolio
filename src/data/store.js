import { reactive } from 'vue'

export const store = reactive({
    loading: true,
    baseAPIurl: "http://localhost:8000/api/",
    projAPIpath: "projects",
});