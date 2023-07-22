<script>
import axios from 'axios';

export default {
    name: "FooterContactForm",
    data() {
        return {
            requestData: { name: '', email: '', message: '' },
            loading: false,
            errors: [],
            success: false,
            failure: false
        }
    },
    watch: {
        // Immediately Sets Failure False When Success Becomes True
        success() {
            if (this.success) {
                this.failure = false
            }
        }
    },
    methods: {
        // Send Contact Request with API
        sendForm() {
            this.loading = true;
            this.errors = [];
            this.success = false;

            axios.post(import.meta.env.VITE_BASE_API_URL + "contacts", this.requestData).then((response) => {
                this.loading = false;
                if(!response.data.success) {
                    this.errors = response.data.errors;
                    // console.error('Contact Request POST API Failure.');
                    setTimeout(() => this.errors = [], 1 * 5000);
                } else {
                    this.success = true;
                    this.requestData = { name: '', email: '', message: '' },
                    // console.log('Contact Request POST API Success.');
                    setTimeout(() => this.success = false, 1 * 5000);
                }
            }).catch(err=>{
                this.loading = false,
                this.failure = true,
                setTimeout(() => this.failure = false, 1 * 5000);
                // console.error('Contact Request POST API Failure. ', err)
            })
        }
    }
}

</script>

<template>
    <section class="flex flex-col items-center sm:px-4 px-1 text-white">
        <!-- Contact Form -->
        <h4 class="font-bold text-lg sm:text-2xl mb-2">💌 &nbsp;CONTACT US</h4>
        <form @submit.prevent="sendForm()" class="flex justify-between gap-3">
        
            <!-- Name -->
            <div>
                <label for="formName" class="font-bold">Name</label>
                <input placeholder="Jane Doe" class="form-control mt-0.5" :class="{ 'is-invalid' : errors.name}" type="text" name="formName" id="formName" v-model="requestData.name">
                <div class="invalid-feedback">
                    <template v-for="error in errors.name">
                        <span>{{error}}. </span>
                    </template>
                </div>
            </div>
            
            <!-- Email -->
            <div>
                <label for="formMessage" class="font-bold">Email</label>
                <input placeholder="janedoe@mail.com" class="form-control mt-0.5" :class="{ 'is-invalid' : errors.email}" type="email" name="formEmail" id="formEmail" v-model="requestData.email">
                <div class="invalid-feedback">
                    <template v-for="error in errors.email">
                        <span>{{error}}. </span>
                    </template>
                </div>
            </div>
            
            <!-- Message -->
            <div>
                <label for="formMessage" class="font-bold">Message</label>
                <textarea placeholder="Write here your message...." name="formMessage" id="formMessage" class="form-control mt-0.5" cols="50" rows="1" :class="{ 'is-invalid' : errors.message}" v-model="requestData.message"></textarea>
                <div class="invalid-feedback">
                    <template v-for="error in errors.message">
                        <span>{{error}}. </span>
                    </template>
                </div> 
            </div>
               
            <!-- Submit Button -->
            <v-btn type="submit" variant="flat" density="default" rounded="xs" :class="{ 'self-center mb-3' : Object.keys(errors).length>0 }" class="hover:text-primary-blu font-bold self-end bg-primary-blu hover:bg-white text-slate-50 px-3 mb-2" :disabled="loading">{{ loading ? 'SENDING...' : 'SEND'}}</v-btn>
            
    
        </form>

        <!-- Confirmation Message -->
        <p class="text-green-500 text-sm" v-if="success">Your message has been successfully sent!</p>
        <p class="text-red-700 text-sm" v-if="failure">Something went wrong while sending your message</p>
    </section>
    
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
</style>