<template>
  <FilterView/>
  <shoppingListView/>
  <HomeView :meals="meals" />
  <MealView v v-if="selectedMeal" :meal="selectedMeal" @back="backToHome" />

</template>

<script>
import HomeView from "@/views/HomeView.vue";
import MealView from "@/views/MealView.vue";
import FilterView from "@/views/FilterView.vue";
import ShoppingListView from "@/views/ShoppingListView.vue";

export default {
  name: "HomePresenter",
  components: {
    FilterView,
    ShoppingListView,
    MealView,
    HomeView
  },
  data() {
    return {
      selectedMeal: null,
      meals: [
        {
          id: 1,
          name: "Sunny Spinach Pie",
          image: "spinach6.jpg",
          description: "A delightful pie filled with spinach and feta cheese, perfect for a healthy meal.",
          ingredients: ["Spinach", "Feta cheese", "Pie crust", "Eggs", "Onion"],
          preparationTime: 45,
          calories: 250,
          protein: 10,
          fat: 15,
          carbs: 20,
          steps: [
            "Preheat the oven to 350°F (175°C).",
            "Sauté chopped onion in a pan until translucent. Add spinach and cook until wilted.",
            "In a bowl, whisk eggs. Add crumbled feta cheese and the cooked spinach mixture. Stir to combine.",
            "Lay the pie crust in a pie dish. Pour the spinach and feta mixture into the crust.",
            "Bake for about 30 minutes, or until the crust is golden and the filling is set.",
            "Let the pie cool for a few minutes before serving."
          ]
        },
        {
          id: 2,
          name: "Classic Cheeseburger",
          image: "burger.jpg",
          description: "Juicy beef patty with melting cheese, lettuce, tomato, and a touch of secret sauce.",
          ingredients: ["Beef patty", "Cheese", "Lettuce", "Tomato", "Buns", "Secret sauce"],
          preparationTime: 30,
          calories: 550,
          protein: 30,
          fat: 35,
          carbs: 40,
          steps: [
            "Preheat a grill or skillet. Season beef patties with salt and pepper, then cook to your desired level of doneness.",
            "Place a slice of cheese on each patty during the last minute of cooking to melt.",
            "Toast the buns lightly.",
            "On the bottom bun, place lettuce, tomato, and the beef patty with melted cheese. Add a generous amount of secret sauce.",
            "Top with the other half of the bun and serve immediately."
          ]
        },
        {
          id: 3,
          name: "Mediterranean Quinoa Salad",
          image: "quinoa-salad-500x500.jpg",
          description: "A light and refreshing salad packed with quinoa, cucumbers, tomatoes, and olives.",
          ingredients: ["Quinoa", "Cucumber", "Tomatoes", "Olives", "Feta cheese"],
          preparationTime: 20,
          calories: 320,
          protein: 12,
          fat: 10,
          carbs: 55,
          steps: [
            "Rinse quinoa under cold water. Cook in boiling water until tender, about 15 minutes. Drain and let cool.",
            "Chop cucumber, tomatoes, and olives.",
            "In a large bowl, mix the cooled quinoa with the chopped vegetables. Crumble in feta cheese.",
            "Drizzle with olive oil and lemon juice, season with salt and pepper, and toss to combine. Serve chilled or at room temperature."
          ]
        },
        {
          id: 4,
          name: "Spicy Thai Noodles",
          image: "Spicy-Thai-Noodles-SQ.jpg",
          description: "Stir-fried noodles in a spicy sauce with vegetables and your choice of protein.",
          ingredients: ["Rice noodles", "Bell peppers", "Eggs", "Peanuts", "Chili sauce", "Protein choice"],
          preparationTime: 25,
          calories: 430,
          protein: 15,
          fat: 10,
          carbs: 65,
          steps: [
            "Cook rice noodles according to package instructions. Drain and set aside.",
            "Cook your choice of protein (tofu, chicken, shrimp, etc.) in a pan until done.",
            "In the same pan, stir-fry bell peppers (and any other vegetables) until just tender.",
            "Add the cooked noodles and protein to the pan with vegetables. Pour in chili sauce and toss everything to combine.",
            "Sprinkle with crushed peanuts and serve hot."
          ]
        },
        {
          id: 5,
          name: "Mexican Burrito Bowl",
          image: "burrito-bowls-15.jpg",
          description: "A deconstructed burrito, layered with rice, beans, grilled chicken, and fresh veggies.",
          ingredients: ["Rice", "Black beans", "Grilled chicken", "Corn", "Avocado", "Sour cream"],
          preparationTime: 35,
          calories: 600,
          protein: 40,
          fat: 25,
          carbs: 50,
          steps: [
            "Prepare rice according to package instructions. Warm black beans in a pot.",
            "Season chicken breasts and grill until fully cooked. Slice or shred for serving.",
            "In individual bowls, layer rice, black beans, grilled chicken, corn, and sliced avocado.",
            "Top with a dollop of sour cream and any other desired toppings (like salsa, cheese, or lime wedges).",
            "Enjoy your deconstructed burrito bowl!"
          ]
        }
      ]
    };
  },
  methods: {
    showMealPresenter(meal) {
      this.selectedMeal = meal;
    },
    backToHome() {
      this.selectedMeal = null;
    }
  }
    // Any methods related to business logic
  };
</script>

<style scoped>

</style>