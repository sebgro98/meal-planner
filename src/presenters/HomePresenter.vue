<template>
  <HomeView :meals="meals" />
  <MealView v v-if="selectedMeal" :meal="selectedMeal" @back="backToHome" />
</template>

<script>
import HomeView from "@/views/HomeView.vue";
import MealView from "@/views/MealView.vue";

export default {
  name: "HomePresenter",
  components: {
    MealView,
    HomeView
  },
  data() {
    return {
      selectedMeal: null,
      meals: [
          {
            id: 1,
            name: 'Sunny Spinach Pie',
            image: '../assets/spinach6.jpg',
            description: 'A delightful pie filled with spinach and feta cheese, perfect for a healthy meal.',
            ingredients: ['Spinach', 'Feta cheese', 'Pie crust', 'Eggs', 'Onion'],
            preparationTime: 45,
            calories: 250,
            protein: 10,
            fat: 15,
            carbs: 20,
          },
          {
            id: 2,
            name: 'Classic Cheeseburger',
            image: ('../assets/burger.jpg'),
            description: 'Juicy beef patty with melting cheese, lettuce, tomato, and a touch of secret sauce.',
            ingredients: ['Beef patty', 'Cheese', 'Lettuce', 'Tomato', 'Buns', 'Secret sauce'],
            preparationTime: 30,
            calories: 550,
            protein: 30,
            fat: 35,
            carbs: 40,
          },
          {
            id: 3,
            name: 'Mediterranean Quinoa Salad',
            image: ('../assets/quinoa-salad-500x500.jpg'),
            description: 'A light and refreshing salad packed with quinoa, cucumbers, tomatoes, and olives.',
            ingredients: ['Quinoa', 'Cucumber', 'Tomatoes', 'Olives', 'Feta cheese'],
            preparationTime: 20,
            calories: 320,
            protein: 12,
            fat: 10,
            carbs: 55,
          },
          {
            id: 4,
            name: 'Spicy Thai Noodles',
            image: '../assets/Spicy-Thai-Noodles-SQ.jpg',
            description: 'Stir-fried noodles in a spicy sauce with vegetables and your choice of protein.',
            ingredients: ['Rice noodles', 'Bell peppers', 'Eggs', 'Peanuts', 'Chili sauce', 'Protein choice'],
            preparationTime: 25,
            calories: 430,
            protein: 15,
            fat: 10,
            carbs: 65,
          },
        {
          id: 5,
          name: 'Mexican Burrito Bowl',
          image: '../assets/burrito-bowls-15.jpg',
          description: 'A deconstructed burrito, layered with rice, beans, grilled chicken, and fresh veggies.',
          ingredients: ['Rice', 'Black beans', 'Grilled chicken', 'Corn', 'Avocado', 'Sour cream'],
          preparationTime: 35,
          calories: 600,
          protein: 40,
          fat: 25,
          carbs: 50,
        },
      ],
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