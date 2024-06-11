<script>
import axios from "axios";

export default {

    data() {
        return {
            tags: [],
            categories: [],
            form: {
                title: '',
                slug: '',
                content: '',
                published: '',
                categoryId: '',
                tags: []
            }
        };
    },

    methods: {
        submitForm() {
            axios
                .post("http://localhost:3000/posts", this.form)
                .then((response) => {

                })
        },
    },

    mounted() {
        axios
            .get("http://localhost:3000/tags")
            .then((response) => {
                this.tags = response.data
            })

        axios
            .get("http://localhost:3000/categories")
            .then((response) => {
                this.categories = response.data
            })
    },
};
</script>

<template>
    <div class="container">
        <h1 class="text-primary text-center">Crea Nuovo Post</h1>

        <div class="row">
            <div class="col">
                <form @submit.prevent="submitForm">

                    <div class="mb-3">
                        <label class="form-label">Title</label>
                        <input type="text" class="form-control" v-model="form.title">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Slug</label>
                        <input type="text" class="form-control" v-model="form.slug">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Content</label>
                        <input type="text" class="form-control" v-model="form.content">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Published</label>
                        <select v-model="form.published">
                            <option disabled value="">Please select one</option>
                            <option :value="true">yes</option>
                            <option :value="false">no</option>
                        </select>
                    </div>

                    <div class="d-flex gap-3">
                        <div class="mb-3" v-for="category in categories">
                            <label class="form-label">{{ category.name }}</label>
                            <input type="checkbox" :name="category.name" :value="category.id" v-model="form.categoryId">
                        </div>
                    </div>

                    <div class="d-flex gap-3">
                        <div class="mb-3" v-for="tag in tags">
                            <label class="form-label">{{ tag.name }}</label>
                            <input type="checkbox" :name="tag.name" :value="tag.id" v-model="form.tags">
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>

                </form>
            </div>
        </div>

        <router-link :to="{ name: 'home' }">Torna alla home</router-link>

    </div>

</template>

<style scoped></style>