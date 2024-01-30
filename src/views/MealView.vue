<template>
  <div>
    <header>
      <router-link to="/" class="go-back">Go back</router-link>
    </header>

    <div class="container">
      <img src="../assets/burger.jpg" alt="Meal Image" class="meal-image">

      <div class="title-container">
        <h2 class="image-title">Burger Delight</h2>
      </div>

      <div class="details-container">
        <div class="ingredients-container">
          <h2>Ingredients</h2>
          <ul class="ingredients-list">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
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
          <li>1. Lorem ipsum dolor sit amet.</li>
          <li>2. Consectetur adipiscing elit.</li>
          <li>3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
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
  background-color: #ffffff;
}

header {
  background-color: #3dd944; /* Green */
  color: #fff;
  text-align: center;
  font-size: 30px;
  border-radius: 15px;
}

.go-back {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  display: block; /* Make it a block-level element */
  padding: 10px; /* Add padding for better aesthetics */
  box-sizing: border-box; /* Include padding in width calculation */
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