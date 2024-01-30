<template>
  <div>
    <header>
      <router-link to="/" class="go-back">Go back</router-link>
    </header>

    <div class="container">
      <img src="../assets/burger.jpg" alt="Meal Image" class="meal-image">

      <div class="details-container">
        <div class="ingredients-container">
          <h2>Ingredients</h2>
          <ul class="ingredients-list">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <!-- Add more ingredients as needed -->
          </ul>
        </div>

        <div class="nutrition-container">
          <h2>Nutritional Information</h2>
          <ul class="nutrition-info">
            <li>Cook Time: 30 minutes</li>
            <li>Calories: 500</li>
            <li>Carbs: 50g</li>
            <li>Protein: 30g</li>
            <li>Fat: 20g</li>
          </ul>
        </div>
      </div>

      <div class="steps-container">
        <h2>Steps</h2>
        <ol class="steps-list">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Consectetur adipiscing elit.</li>
          <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <!-- Add more steps as needed -->
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealView",
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

header {
  background-color: #ececec;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 30px;
}

.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.go-back {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
}

.meal-image {
  width: 100%;
  max-height: 300px;
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
.nutrition-container {
  flex: 1;
}

.ingredients-list {
  list-style-type: none;
  padding: 0;
}

.nutrition-info {
  list-style-type: none;
  padding: 0;
  text-align: left;
}

.steps-container {
  margin-top: 20px;
}

.steps-list {
  list-style-type: decimal;
  padding-left: 20px;
}
</style>
