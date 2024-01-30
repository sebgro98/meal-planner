<template>
  <div class="home">

    <div class="meal-list">
      <div
          v-for="meal in meals"
          :key="meal.id"
          @click="selectMeal(meal)"
      class="meal-card"
      >
        <img :src="getImageUrl(meal.image)" :alt="meal.name" class="meal-image" />



        <div class="meal-info">
        <h3>{{ meal.name }}</h3>
        <p>{{ meal.description }}</p>
        <ul class="meal-stats">
          <li><strong>Prep Time:</strong> {{ meal.preparationTime }} min</li>
          <li><strong>Calories:</strong> {{ meal.calories }}</li>
          <li><strong>Protein:</strong> {{ meal.protein }}g</li>
          <li><strong>Fat:</strong> {{ meal.fat }}g</li>
          <li><strong>Carbs:</strong> {{ meal.carbs }}g</li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    meals: Array,
  },
  methods: {
    selectMeal(meal) {
      // Redirect to the 'MealPresenter' route with the meal object as a parameter
      console.log('selectMeal called with meal:', meal);
      const formattedName = meal.name.replace(/ /g, '-');
      //this.$router.push({ name: 'mealView', params: { meal: JSON.stringify(meal) } });
      this.$router.push({ name: 'mealView', params: { name: formattedName } });
    },
    filterMeals() {
      // Implement your filter logic here
    },
    showShoppingList() {
      // Implement your shopping list logic here
    },

    getImageUrl(imageName) {
      // Directly return the path as the images are in the public folder
      return `/images/${imageName}`;
    },

  },

};
</script>

<style scoped>

  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .meal-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .meal-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
  }

  .meal-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }

  .meal-info {
    padding: 15px;
  }

  .meal-info h3 {
    margin-top: 0;
    color: #333;
  }

  .meal-info p {
    color: #666;
    font-size: 0.9rem;
    margin: 10px 0;
  }

  .meal-stats {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
  }

  .meal-stats li {
    margin: 5px 0;
    color: #333;
  }


</style>
