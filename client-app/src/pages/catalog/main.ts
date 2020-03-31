import Vue from "vue";
import App from "@catalog/App.vue";
import Comp from "@catalog/components/Comp.vue";
import InitializationService from '@common/services/initialization.service';
import store from "./store"

InitializationService.initializeCommon();

// 1. Hydrate one element
// new Vue({
//   render: h => h(App)
// }).$mount("#app", true);

// 2. Hydration. Mounting to several elements with passing data from mount attributes
const elements = document.getElementsByClassName("app") as any;

for(const el of elements){
  new Vue({
    data: {
      productId: 0
    },
    store,
    mounted: function () {
      this.productId = +this.$el.attributes.getNamedItem("product-id")!.value;
    },
    render ( h ) {
      return h(App, {
        props: {
          productId: +this.productId
        }
      })
    }
  }).$mount(el, true);
}


// 3. runtime + compiler. Mount app to server rendered html
// new Vue({
//   delimiters: [ "${", "}$" ], //it works only into server rendered. It does not inherit by child components
//   data: {
//     message: "Hello world",
//     counter: 0
//   },
//   methods: {
//     increment: function () {
//       this.counter++;
//     }
//   }
// }).$mount("#app");


// 4. runtime+compiler with repeated components
// new Vue({
//   //delimiters: [ "${", "}$" ], //it works only into server rendered. It does not inherit by child components
//   store,
//   components: {
//     Comp
//   }
// }).$mount("#app");
