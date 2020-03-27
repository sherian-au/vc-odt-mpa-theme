<template>
  <div>
    <h1>{{ message }}</h1>
    <div>{{ counter }}</div>
    <button class="btn btn-primary" @click="increment">
      Increment
    </button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "Catalog",
  delimiters: [ "${", "}$" ]
})
export default class App extends Vue {

   message = "Hello world";

   counter = 0;

   increment() {
     this.counter++;
   }
}
</script>
