<template>

</template>

<script>
export default {
  name: "HomePresenter",
    data() {
      return {
        meals: [
          {
            id: 1,
            name: 'Sunny Spinach Pie',
            image: 'path-to-image/spinach-pie.jpg',
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
            image: 'path-to-image/cheeseburger.jpg',
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
            image: 'path-to-image/quinoa-salad.jpg',
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
            image: 'path-to-image/thai-noodles.jpg',
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
            image: 'path-to-image/burrito-bowl.jpg',
            description: 'A deconstructed burrito, layered with rice, beans, grilled chicken, and fresh veggies.',
            ingredients: ['Rice', 'Black beans', 'Grilled chicken', 'Corn', 'Avocado', 'Sour cream'],
            preparationTime: 35,
            calories: 600,
            protein: 40,
            fat: 25,
            carbs: 50,
          }
        ],
        // Other data properties
      };
    },
    // Methods and possibly lifecycle hooks
  };

</script>

<style scoped>

</style>