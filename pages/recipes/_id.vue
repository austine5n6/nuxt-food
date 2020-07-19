<template>
<div class="container">
  <div v-if="recipeExists">
      <h3> Result for {{ $route.params.id }}</h3>
          {{getSearch}}
  </div>
  <div v-else>
   
  </div>
  

    <section v-for="(detail, index) in getDetail" :key="index">
      <div class="tile is-parent">
         <article class="tile is-child box level">
           <p class="title">{{detail.title}}</p>
           <p class="subtitle"><strong>Ready Time:</strong> {{ detail.readyTime}} minutes</p>
              <figure class="image is-2by1">
                <img :src="detail.image" alt="image placeholder">  
               </figure>
            </article>
      </div>
     
        
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Recipe Summary</p>
          <p class="subtitle">Short Description</p>
          <div class="content">
            <p v-html="detail.summary"></p>
          </div>
        </article>
      </div>

                <div class="tile is-parent">
              <article class="tile is-child box">
                   <p class="title">Ingredients List</p>
                       <p class="subtitle">All you need!</p>
                   <div class="content">
                      <div class="table-container">
                        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                          <tr>
                          <th>Ingredients Name</th>
                          <th>Amount</th>
                          <th>Amount needed</th>
                          </tr>
                          <tr v-for="(ingredient,index) in getIngredient" :key="index">
                            <td>{{ ingredient.name }}</td>
                            <td>{{ ingredient.amount }}</td>
                            <td>{{ ingredient.originalString }}</td>
                           
                          </tr>
                        </table>
                      </div>
                
             </div>
        </article>
      </div>

       <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Recipe Instructions</p>
          <p class="subtitle">Description</p>
          <div class="content">
            <p>{{ detail.instructions}}</p>
          </div>
        </article>
      </div>      
    </section>
</div>
</template>

<script>
import axios from 'axios';
export default {
  
      // validate ({ params, store }) {
      //   // return /^\d+$/.test(params.id);
      //   return store.state.detail.filter((el, index) => {
      //     if (el.id === params.id)
      //         return true;
      //   })
      // },

 middleware: ['recipeinfo', 'search'], 
    computed: {
        getIngredient() {
        return this.$store.getters.getIngredient;
        },
        getDetail() {
           return this.$store.getters.getDetail.slice(0,1);
        },
        getSearch() {
          return this.$store.getters.getSearch;
        },
        recipeExists() {
          return this.$store.state.search.length > 0;
        }
  
    },
   
}
   

</script>

<style>
*{
    text-align: center;
}
</style>
