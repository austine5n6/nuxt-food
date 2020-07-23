<template>
        <div class="container">
                <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
                 <nuxt-link to="/" class="navbar-item">
                <img src="../assets/images/good_food.png" width="" height="" alt="Good food logo">
            </nuxt-link>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu" id="navbarBasic">
            <div class="navbar-end">
                  <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
        
            </div>
        </div>
    </nav>

        </div>
    
</template>

<script>
import vue from 'vue';
export default {
    //      mounted(){
    //          document.addEventListener('DOMContentLoaded', () => {
    //         const $navBurgers = Arrray.prototype.slice.call(document.querySelectorAll('navbar-burger'), 0);

    //         if($navbarBurgers.length > 0) {
    //             $navbarBurgers.forEach(el => {
    //                 el.addEventListener('click', () => {
    //                     const target = el.dataset.target;
    //                     const $target = document.getElementById(target);

    //                     el.classList.toggle('is-active');
    //                     $target.classList.toggle('is-active');
    //                 });
    //             });
    //         }
    //     });
    // }
}
</script>

<style scope>
    body{
        padding-bottom: 100px;
    }
</style>
