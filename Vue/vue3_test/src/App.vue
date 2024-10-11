<template>
<div>
  <ToDoList></ToDoList>
</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Person from "@/components/Person.vue";
import type { Persons } from "./types";
import ToDoList from "./components/ToDoList.vue";
</script>

<style lang="css" scoped>

</style>