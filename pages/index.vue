<template>
  <div>
      <form @submit.prevent="submit">
            <input class="input is-rounded is-small" type="text" placeholder="Search for Recipes" style="width: 330px; margin-bottom:30px" v-model="search" autofocus >     
      </form>
     
      <br/>

              <!-- results objects contains the overall object -->
      <!-- results.extendedIngredients contains the recipes ingredients -->
        
    
        <ul>
          <li class="columns" style="width: auto;">
            
              <Pack v-for="(detail,index) in getDetails" :key="index"
                            :id="detail.id"
                            :image="detail.image"
                            :title="detail.title"
                            :readyTime="detail.readyTime"
                            class="column"
                 />   
          </li>
        </ul>
        
  </div>
</template>

<script>
import vue from 'vue';
import Pack from '~/components/Pack.vue';

import axios from 'axios';
export default {
  components: {
    Pack,
  },
  data() {
    return{
      search: ''
    }
  },
middleware: 'search',
  methods: {
      submit(event) {
        this.$router.push(`recipes/search/${this.search}`);
      },
      
  },
  computed: {
      getDetails() {
       return this.$store.getters.getDetails;
   
      },
      
  },

  mounted() { 
    // '479102','479103','345565'
         var arrayKeyList = [...new Set([479102,479103,345565])];
         arrayKeyList.map(value => {
              axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${value}/information`, {
                            "method": "GET",
                              "headers": {
                                  "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                                  "x-rapidapi-key": "a3ad3eb22cmsh354a562d01e9643p16724fjsn3e406c92ef77"
                              }
                          })
                            .then((response) => {
                              let res = response.data;
                              
                              this.$store.dispatch('recipeDetails', res);
                              this.$store.dispatch('recipeIngredients', res);
                                      
               })
               .catch(error => {
                 console.log(error)
               })
                          
          })
  
      }
}
</script>

<style>
* {
  text-align: center;
}

h1 {
  padding: 20px;
}

/* ul {

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  
} */

/* li {
  display: flex;
  flex: 0 1 auto; 
 
  margin: 1em;
  
} */

</style>
