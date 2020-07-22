import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
        return new Vuex.Store({
            state: {
                ingredients: [],
                details: [],
                detail:[],
                ingredient:[],
                search: []
                

            },
            mutations: {
                recipeDetails(state,payload) {            
                  Object.keys(payload).forEach(key => {
                        if (key === 'title')
                            state.details.push({
                            id: payload.id,
                            title: payload.title,
                            image: payload.image,
                            instructions: payload.instructions,
                            summary: payload.summary,
                            readyTime: payload.readyInMinutes
                        })
                    
                        
                    });
                   
                   
                },
                recipeIngredients: (state, payload) => {
                           
                        Object.keys(payload).forEach(key => {
                            if(key === 'extendedIngredients') {
                                payload.extendedIngredients.forEach(ingredients => {
                                    state.ingredients.push({
                                        id: ingredients.id,
                                        name: ingredients.name,
                                        image: ingredients.image,
                                        amount: ingredients.amount,
                                        originalString: ingredients.originalString
                                })
                               
                                 
                                })
                            }
                        })
                },
                recipeDetail: (state, payload) => {
                    // return state.detail = payload;
                    state.detail = [];
                    Object.keys(payload).forEach(key => {
                        if (key === 'title')
                            state.detail.push({
                            id: payload.id,
                            title: payload.title,
                            image: payload.image,
                            instructions: payload.instructions,
                            summary: payload.summary,
                            readyTime: payload.readyInMinutes
                        })
                      

                    });
                },
                recipeIngredient: (state, payload) => {
                    state.ingredient = [];
                    Object.keys(payload).forEach(key => {
                        if(key === 'extendedIngredients') {
                            payload.extendedIngredients.forEach(ingredients => {
                                state.ingredient.push({
                                    id: ingredients.id,
                                    name: ingredients.name,
                                    image: ingredients.image,
                                    amount: ingredients.amount,
                                    originalString: ingredients.originalString
                            })
                            
                             
                            })
                        }
                    })
                },
                searchRecipe: (state, payload) => {
                    state.search = payload;     
                },   
            },
          actions: {
              recipeDetails: (context, payload) => {
                  context.commit('recipeDetails', payload);
              },
              recipeIngredients: (context, payload) => {
                  context.commit('recipeIngredients', payload);
              },
              recipeAction: (context, payload) => {
                return axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${payload}/information`, {
                                        "method": "GET",
                                          "headers": {
                                              "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                                              "x-rapidapi-key": "a3ad3eb22cmsh354a562d01e9643p16724fjsn3e406c92ef77"
                                          }
                                      })
                                        .then((response) => {
                                            let res = response.data;
                                              context.commit('recipeDetail', res);
                                              context.commit('recipeIngredient', res);
                                
                                       })
                                .catch(error => {
                                  console.log(error)
                                })
              },
            
              searchRecipe: (context, payload) => {
                  context.commit('searchRecipe', payload);
              }
              
          },
            getters: {
                getDetails: state => {
                 return state.details;
             },
                getIngredients: state => {
                    return state.ingredients;
                },
                getDetail: state => {
                    return state.detail;
                },
                getIngredient: state => {
                    return state.ingredient;
                },
                getSearch: state => {
                    var mySearch = state.search.map(search => {
                        return {
                            id: search.id,
                            title: search.id,
                            image: search.id
                        }
                    });
                    return mySearch;
                }
               
        }
    })

}
export default createStore
