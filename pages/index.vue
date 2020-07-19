<template>
  <div>
      <form @submit.prevent="submit">
            <input class="input is-rounded is-small" type="text" placeholder="Search for Recipes" style="width: 330px; margin-bottom:30px" v-model="search" autofocus >     
      </form>
     
      <br/>

              <!-- results objects contains the overall object -->
      <!-- results.extendedIngredients contains the recipes ingredients -->
        
    
        <ul class="columns">
          <li class="box columns">
              <Pack v-for="(detail,index) in getDetails" :key="index"
                            :id="detail.id"
                            :image="detail.image"
                            :title="detail.title"
                            :readyTime="detail.readyTime"
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
    return {
      results: [],
      extendedIngredients: [],
      mydetails: [],
      search: ''
     
    }
  },

  methods: {
      submit(event) {
        this.$router.push(`recipes/${this.search}`);
      },
  },
  computed: {
      getDetails() {
       return this.$store.getters.getDetails;
   
      },
      
  },

  mounted() {        
         let keyz = [479102,479103,345565];
         keyz.map(key => {
              return axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${key}/information`, {
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

ul {

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  
}

li {
  display: flex;
  flex: 0 1 auto;
 
  /* margin: 1em; */
  
}

</style>
