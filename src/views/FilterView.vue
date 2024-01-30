<template>
  <div class="filter-view">
    <!-- Filter Button -->
    <div class="dropdown">
    <button class="filter-Shooingbutton"  @click="toggleShoppingDropdown" >Shopping List</button>
    <div v-show="isShoppingOpen" class="dropdown-content" >
      <div>milk</div>
      <div>egg</div>
      <div>potato</div>
      <!-- Add more categories as needed -->
    </div>
    </div>

    <!-- Main Category Dropdown -->
    <div class="dropdown">
      <button class="dropbtn" @click="toggleCategoryDropdown">Select Category</button>
      <div v-show="isCategoryDropdownOpen" class="dropdown-content">
        <div @click="selectCategory('ingredients')">Ingredients</div>
        <div @click="selectCategory('time')">Time to Make</div>
        <div @click="selectCategory('nutritions')">Nutritions</div>
        <!-- Add more categories as needed -->
      </div>
    </div>

    <!-- Ingredients List -->
    <div v-if="selectedCategory === 'ingredients'" class="ingredient-list">
      <ul class="styled-list">
        <li v-for="item in items" :key="item" class="ingredient-list-item">
          <label class="ingredient-label">
            <input type="checkbox" v-model="selectedItems" :value="item" class="ingredient-checkbox" />
            <span class="ingredient-name">{{ item }}</span>
          </label>
        </li>
      </ul>
    </div>

    <div v-if="selectedCategory === 'nutritions'" class="ingredient-list">
      <ul class="styled-list">
        <li v-for="item in nutritions" :key="item" class="ingredient-list-item">
          <label class="ingredient-label">
            <input type="checkbox" v-model="selectedNut" :value="item" class="ingredient-checkbox" />
            <span class="ingredient-name">{{ item }}</span>
          </label>
        </li>
      </ul>
    </div>

    <div v-if="selectedCategory === 'time'" class="ingredient-list">
      <ul class="styled-list">
        <li v-for="item in timeToMake" :key="item" class="ingredient-list-item">
          <label class="ingredient-label">
            <input type="checkbox" v-model="selectedtimeToMake" :value="item" class="ingredient-checkbox" />
            <span class="ingredient-name">{{ item }}</span>
          </label>
        </li>
      </ul>
    </div>
    <!-- Add more sections/lists for other categories -->
    <!-- Filter Button -->
    <button @click="filterItems" class="filter-button">Filter</button>
  </div>


</template>

<script>
export default {
  name: "FilterView",
  data() {
    return {
      isCategoryDropdownOpen: false,
      isShoppingOpen: false,
      selectedCategory: null,
      items: ["Tomato", "Onion", "Garlic", "Salt", "Pepper", "Olive Oil", "Chicken", "Rice", "Broccoli", "Pasta", "Lemon", "Cumin", "Cilantro"],
      selectedItems: [],
      nutritions: ["Minerals", "Carbohydrates", "Protein", "Calcium"],
      selectedNut:[],
      timeToMake: ["less then 30min", "less then 60min"],
      selectedtimeToMake:[]
    };
  },
  methods: {
    toggleCategoryDropdown() {
      this.isCategoryDropdownOpen = !this.isCategoryDropdownOpen;
    },
    selectCategory(category) {
      this.selectedCategory = category;
      this.isCategoryDropdownOpen = false;
    },
    filterItems() {
      this.$emit("filter", this.selectedItems);
    },
    toggleShoppingDropdown(){
      this.isShoppingOpen =  !this.isShoppingOpen;
    }
  }
};
</script>

<style scoped>
.filter-view {
  /* Add styling for the main container */
}

.filter-Shooingbutton{
  padding: 10px 20px;
  font-size: 18px;
  background-color: #3dd944;
  border-radius: 10px;
  border-color: #dedede;
}

.dropdown {
  position: relative;
  display: inline-block;

}

.dropbtn {
  padding: 10px 18px;
  background-color: #3dd944;
  border-radius: 10px;
  border-color: #dedede;
  font-size: 18px;
  font-weight: 300;
  margin-left: 2px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
}

.dropdown-content div {
  display: block;
  padding: 10px;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.ingredient-list {
  margin-top: 10px;
}

.filter-button {
  padding: 5px 10px;
  margin: 10px;
  font-size: 15px;
  background-color: #3dd944;
  color: black;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 15px;
  border-color: #dedede;
}

.ingredient-list {
  margin-top: 10px;
}

.styled-list {
  list-style-type: none;
  padding: 0;
}

.ingredient-list-item {
  border: 1px solid #ccc;
  margin-bottom: 8px;
  padding: 10px;
  background-color: #d2ffdd;
}

.ingredient-label {
  display: block;
  font-size: 16px;
}

.ingredient-checkbox {
  margin-right: 8px;
}

.ingredient-name {
  font-weight: bold;

}

</style>
