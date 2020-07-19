<template>
    <div class="columns" style="padding: 10px;">

<div class="card column" style="width: 350px; margin: 10px;">
        <div class="card-image" @click="doThis">
            <figure class="image is-5by3">
                <img :src="image" alt="placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="image" alt="placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ title }}</p>
                    <p class="subtitle is-6"><strong>Ready Time:</strong> {{ readyTime }} minutes</p>
                    
                       <p>
                    <nuxt-link :to="`recipes/${id}`">View Recipe Instructions</nuxt-link>
                </p>
        
                </div>
            </div>
        </div>
        <!-- <footer class="card-footer">
            
            <p class="card-footer-item">
                <span>
                    <nuxt-link :to="`recipes/${id}`">View Recipe Instructions</nuxt-link>
                </span>
            </p>
        </footer> -->
        </div>
    </div>
    
</template>

<script>
export default {
    props:['image','title','readyTime','id'],
    // props:['details', 'extendedIngredients'],
   
        methods: {
            doThis(){
                alert("To the link");
            }
        },
     
}
</script>

<style>
/* .my-card {
    display: flex;
    flex-flow: row wrap;
}
.this-card {
    display: flex;
    flex-direction: column;
} */

</style>
