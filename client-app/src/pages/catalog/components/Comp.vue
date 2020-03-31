<template>
  <div>
    <h1>{{ message }}{{ productId }}</h1>
    <div>{{ counter }}</div>
    <button class="btn btn-primary" @click="increment">
      Increment
    </button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "Comp"
  //delimiters: ["${", "}$"] // it does not work
})
export default class Comp extends Vue {
  @Prop()
  productId!: number;

  message = "Product #";

  @Getter("counter")
  counter!: number;
  @Action("increment")
  increment() {
    this.counter++;
  }
}
</script>
