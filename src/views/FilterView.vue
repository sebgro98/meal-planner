<template>
  <div class="dropdown">
    <!-- Button to toggle the dropdown menu -->
    <button class="dropbtn">Tap to Select ingredients</button>
    <div class="dropdown-content">
      <!--A loop to go thorugh the item in the list -->
      <label v-for="item in items" :key="item">
        <input type="checkbox" v-model="selectedItems" :value="item" />
        {{ item }}
      </label>
    </div>

    <button @click="filterItems"  class="filter-button">Filter</button> <!--Calls the functin filterItems when clicket on filter-->
  </div>
</template>

<script>
export default {
  name: "FilterView",
  data() {
    return {
      items: ["Tomato", "Onion", "Garlic", "Salt", "Pepper", "Olive Oil", "Chicken", "Rice", "Broccoli", "Pasta", "Lemon", "Cumin", "Cilantro"],
      selectedItems: []
    };
  },
  methods: {
    filterItems() {
      this.$emit("filter", this.selectedItems);
    }
  }
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  background-color: #cdffc7;
  margin-left: 10%;
}

.dropbtn {
  padding: 15px;
  margin: 10px;
  background-color: #3dd944;
  border-radius: 10px;
  border-color: #dedede;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;

}

.dropdown-content label {
  display: block;
  padding: 10px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.filter-button {
  padding: 15px;
  margin: 10px;
  background-color: #3dd944;
  color: black;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 15px;
  border-color:  #dedede;
}

</style>
