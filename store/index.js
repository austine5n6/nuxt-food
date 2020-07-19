import Vuex from 'vuex'

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
              recipeDetail: (context, payload) => {
                context.commit('recipeDetail', payload);
              },
              recipeIngredient: (context, payload) => {
                context.commit('recipeIngredient', payload);
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
                    return state.search;
                }
               
        }
    })

}
export default createStore
