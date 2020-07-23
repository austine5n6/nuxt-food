<template>
    <div class="column" style="padding: 10px;">

<div class="card" style="width: 350px; margin: 10px;">
        <div class="card-image" >
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
                    <nuxt-link :to="`/recipes/${id}`">View Recipe</nuxt-link>
                </p>
        
                </div>
            </div>
        </div>

        </div>
    </div>
    
</template>

<script>
export default {
    props:['image','title','readyTime','id'],
    
}
</script>

<style>

</style>
