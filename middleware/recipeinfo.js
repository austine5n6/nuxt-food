import axios from 'axios';

export default function ( {params, store} ) {
   
        return axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${params.id}/information`, {
                      "method": "GET",
                        "headers": {
                            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                            "x-rapidapi-key": "a3ad3eb22cmsh354a562d01e9643p16724fjsn3e406c92ef77"
                        }
                    })
                      .then((response) => {
                          let res = response.data;
                            store.dispatch('recipeDetail', res);
                            store.dispatch('recipeIngredient', res);
                                                               
         })
         .catch(error => {
           console.log(error)
         })
                    
    
}