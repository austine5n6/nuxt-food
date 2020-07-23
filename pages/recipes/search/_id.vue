<template>
<div class="container">
    <div v-if="recipeExists">   
    <h3> Results for {{ $route.params.id }}</h3>
    <p><strong>Total recipe found:</strong> {{ getSearch.length }}</p>
  
    <ul>
        <li>
            <SearchCard v-for="(search,index) in getSearch" :key="index"
                :id="search.id"
                :title="search.title"
                :image="search.image"
                :readyTime="search.readyTime"
            />
        </li>
    </ul>
</div>
<div v-else>
    <h3>Sorry, recipe not found!</h3>
</div>
     </div>
</template>

<script>
import SearchCard from '~/components/SearchCard.vue';
export default {
   components: {
       SearchCard
   },
    middleware: 'search',
    computed: {
        getSearch() {
            return this.$store.getters.getSearch;
        },
        recipeExists() {
            return this.$store.getters.getSearch.length > 0;
        }
    }

}
</script>

<style>

</style>
