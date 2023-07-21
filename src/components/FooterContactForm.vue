<script>
import axios from 'axios';

export default {
    name: "FooterContactForm",
    data() {
        return {
            formName: '',
            formEmail: '',
            formMessage: '',
            loading: false,
            errors: [],
            success: false
        }
    },
    methods: {
        // Send Contat Request With API
        sendForm() {
            this.loading = true;
            this.errors = [];
            this.success = false;

            let requestData = {
                name: this.formName,
                email: this.formEmail,
                message: this.formMessage
            }

            axios.post(import.meta.env.VITE_BASE_API_URL + "contacts", requestData).then((response) => {
                console.log(response);
                this.loading = false;
                if(!response.data.success) {
                    this.errors = response.data.errors;
                    console.log('Contact Request POST API Failure.');
                } else {
                    this.success = true;
                    this.formName = '';
                    this.formEmail = '';
                    this.formMessage = '';
                    console.log('Contact Request POST API Success.');
                }
            }).catch(err=>{
                this.loading = false,
                console.log('Contact Request POST API Failure. ', err)
            })
            
        }
    }
}

</script>

<template>
    <section>
        <!-- Contact Form -->
        <form @submit.prevent="sendForm()">
        
            <!-- Name -->
            <label for="formName" class="font-bold text-white">Name</label>
            <input placeholder="Jane Doe" class="form-control" :class="{ 'is-invalid' : errors.name}" type="text" name="formName" id="formName" v-model="formName">
            <div class="invalid-feedback">
                <template v-for="error in errors.name">
                    <span>{{error}}. </span>
                </template>
            </div>

            <!-- Email -->
            <label for="formMessage" class="font-bold text-white">Email</label>
            <input placeholder="janedoe@mail.com" class="form-control" :class="{ 'is-invalid' : errors.email}" type="email" name="formEmail" id="formEmail" v-model="formEmail">
            <div class="invalid-feedback">
                <template v-for="error in errors.email">
                    <span>{{error}}. </span>
                </template>
            </div>

            <!-- Message -->
            <label for="formMessage" class="font-bold text-white">Message</label>
            <textarea placeholder="Write here your message...." name="formMessage" id="formMessage" class="form-control" cols="30" rows="5" :class="{ 'is-invalid' : errors.message}" v-model="formMessage"></textarea>
            <div class="invalid-feedback">
                <template v-for="error in errors.message">
                    <span>{{error}}. </span>
                </template>
            </div>    
    
            <!-- Submit Button -->
            <v-btn type="submit" variant="flat" density="default" size="small" rounded="xs" class="hover:text-primary-blu font-bold px-3 py-1 bg-primary-blu hover:bg-white text-slate-50">SEND</v-btn>
    
        </form>

        <!-- Confirmation Message -->
        <p v-if="success" class="text-green-500">Your message has been successfully sent. </p>
    </section>
    
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;
</style>

