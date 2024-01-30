<template>
  <div class="home">
    <div class="filter-bar">
      <!-- Filter options here -->
    </div>
    <div class="meal-list">
      <div class="meal-card" v-for="meal in meals" :key="meal.id">
        <div class="meal-image">
          <!-- Placeholder for meal image -->
          <span>IMG</span>
        </div>
        <div class="meal-info">
          <h3>{{  }}</h3>
          <!-- More info like 'Meal X' etc -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>

</style>