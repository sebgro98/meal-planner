<template>
  <div class="container">
    <!-- Search input as a search bar -->
    <h3>Search Ingredients</h3>
    <input v-model="searchQuery" @input="filterIngredients" placeholder="Search" class="search-bar" />

    <!-- Display the filtered list of meal ingredients in the shopping list -->
    <ul class="ingredient-list" v-if="showResults">
      <li v-for="ingredient in filteredIngredients" :key="ingredient.id">
        <div class="ingredient-box">
          <span class="ingredient-text">{{ ingredient.name }}</span>
          <button class="add-button" @click="addToShoppingList(ingredient)">Add</button>
        </div>
      </li>
      <li v-if="filteredIngredients.length === 0">
        No results found.
      </li>
    </ul>

    <!-- Shopping list -->
      <h3>Shopping List</h3>
      <ul class="ingredient-list">
        <li v-for="ingredient in shoppingList" :key="ingredient.id">
          <div class="ingredient-box">
            <span class="ingredient-text">{{ ingredient.name }}</span>
            <button class="remove-button" @click="removeFromShoppingList(ingredient)">Remove</button>
          </div>
        </li>
        <li v-if="shoppingList.length === 0">
          Shopping list empty.
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "ShoppingListView",
  data() {
    return {
      searchQuery: "",
      allIngredients: [
        { id: 1, name: "Ingredient 1" },
        { id: 2, name: "Ingredient 2" },
        { id: 3, name: "Ingredient 3" },
        { id: 4, name: "Ingredient 4" },
        { id: 5, name: "Ingredient 5" },
        // Add more ingredients as needed
      ],
      shoppingList: [],
      showResults: false,
    };
  },
  computed: {
    filteredIngredients() {
      const query = this.searchQuery.toLowerCase();
      return this.allIngredients.filter(ingredient => ingredient.name.toLowerCase().includes(query));
    },
  },
  methods: {
    filterIngredients() {
      this.showResults = this.searchQuery.length > 0;
    },
    addToShoppingList(ingredient) {
      this.shoppingList.push(ingredient);
      // Optionally, clear the search bar and hide the results after adding to the shopping list
      this.searchQuery = "";
      this.showResults = false;
    },
    removeFromShoppingList(ingredient) {
      const index = this.shoppingList.indexOf(ingredient);
      if (index !== -1) {
        this.shoppingList.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}


.search-bar {
  width: 100%;
  height: 60px;
  font-size: 16px;
  padding: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.ingredient-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.ingredient-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ingredient-box button {
  margin-left: 10px;
}

.ingredient-text {
  font-family: 'YourChosenFont', sans-serif;
}

.add-button,
.remove-button {
  padding: 12px 12px;
  background-color: #3dd944;
  color: #fff;
  border: none;
  cursor: pointer;
}

.add-button:hover,
.remove-button:hover {
  background-color: #3dd944;
}
</style>