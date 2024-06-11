<script>
import axios from "axios";

export default {

    data() {
        return {
            posts: [],
        };
    },

    methods: {
        fetchData() {
            axios
                .get("http://localhost:3000/posts")
                .then((response) => {
                    console.log(response.data);
                    this.posts = response.data;
                });
        },
    },

    mounted() {
        this.fetchData();
    },
};
</script>

<template>
    <div class="container text-center">
            <h1>Benvenuto nel Blog</h1>
    </div>
    <div class="row">
        <div class="col-6">
            <div class="mt-5">
                <div class="card mb-4" v-for="post in posts">

                    <div class="card-body">

                        <h5 class="card-title text-primary">{{ post.title }}</h5>
                        <p class="card-text">{{ post.content }}</p>

                        <div class="mb-3">
                            Categoria:
                            <span class="badge text-bg-primary">{{ post.category.name }}</span>
                        </div>

                        <div class="d-flex gap-3">
                            <span v-for="tag in post.tags" class="badge text-bg-secondary">{{ tag.name }}</span>
                        </div>

                        <div class="text-success">Pubblicato il: {{ post.createdAt }}</div>

                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>