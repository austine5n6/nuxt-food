import axios from 'axios';

export default function( {params, store} ) {

  return axios({
    "method":"GET",
    "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
    "headers":{
    "content-type":"application/json",
    "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key":"a3ad3eb22cmsh354a562d01e9643p16724fjsn3e406c92ef77",
    "useQueryString":true
    },"params":{
    "diet":"vegetarian",
    "excludeIngredients":"coconut",
    "intolerances":"egg%2C gluten",
    "number":"10",
    "offset":"0",
    "type":"main course",
    "query":`${params.id}`

   
    }
    })
    .then((response)=>{
      let res = response.data.results;
      store.dispatch('searchRecipe', res);
      console.log(res);
       
      // console.log(response.data);
    })
    .catch((error)=>{
      console.log(error)
    })

}
