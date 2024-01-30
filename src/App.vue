<template>
  <div id="app">
    <FilterView/>
    <shoppingListView/>
    <router-view />

  </div>
</template>

<script>

import FilterView from "@/views/FilterView.vue";
import ShoppingListView from "@/views/ShoppingListView.vue";


export default {
  name: 'App',
  components: {
    ShoppingListView,
    FilterView

  }
};
</script>

<style>
/* Global styles */
</style>
