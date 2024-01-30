<template>
  <div class="MenuView">
    <header>
      <h1 @click="backToHome">Go back</h1>
    </header>

    <div class="container">
      <img :src="getImageUrl(meal.image)" alt="Meal Image" class="meal-image">

      <div class="title-container">
        <h2 class="image-title">{{meal.name}}</h2>
      </div>

      <div class="details-container">
        <div class="ingredients-container">
          <h2>Ingredients</h2>
          <ul class="ingredients-list">
            <li v-for="(ingredient, index) in meal.ingredients" :key="index">{{ ingredient }}</li>
            <!-- Add more ingredients as needed -->
          </ul>
        </div>

        <div class="nutrition-container">
          <h2>Nutritional Information</h2>
          <ul class="nutrition-info">
            <li>Cook Time: {{meal.preparationTime}} minutes</li>
            <li>Calories: {{meal.calories}}</li>
            <li>Carbs: {{meal.carbs}}g</li>
            <li>Protein: {{meal.protein}}g</li>
            <li>Fat: {{meal.fat}}g</li>
          </ul>
        </div>
      </div>

      <div class="steps-container">
        <h2>Steps</h2>
        <ol class="steps-list">
          <li v-for="(steps, index) in meal.steps" :key="index">{{ steps }}</li>
          <!-- Add more steps as needed -->
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealView",
  props: {
    meal: Array,
  },
  methods: {
    backToHome() {
      this.$emit("back");
    },
    getImageUrl(imageName) {
      // Directly return the path as the images are in the public folder
      return `/images/${imageName}`;
    },
  }
};
</script>

<style scoped>

body {
  font-family: Arial, sans-serif;
}

header {
  background-color: #3dd944; /* Green */
  color: #fff;
  text-align: center;
  font-size: 30px;
  border-radius: 15px;
}

header h1 {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  display: block; /* Make it a block-level element */
  padding: 10px; /* Add padding for better aesthetics */
  box-sizing: border-box; /* Include padding in width calculation */
  font-size: 35px;
}

.container {
  margin: 20px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container h2 {
  font-weight: bold;
}

.title-container {
  background-color: #3dd944;
  text-align: center;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;
}

.image-title {
  color: #fff;
  margin: 0; /* Remove margin for better alignment */
}

.meal-image {
  width: 100%;
  max-height: 250px; /* Adjust the maximum height */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.details-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.ingredients-container,
.nutrition-container,
.steps-container {
  flex: 1;
  background-color: #3dd944;
  border-radius: 15px;
  padding: 10px; /* Adjust the padding */
  margin-bottom: 10px; /* Add margin for separation */
}

.ingredients-list,
.nutrition-info,
.steps-list {
  list-style-type: none;
  padding: 0;
  color: #fff; /* Set text color to white */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Add text shadow for better contrast */
}

/* Green and Black Theme */
.ingredients-container h2,
.nutrition-container h2,
.steps-container h2 {
  color: #fff; /* White */
}
</style>