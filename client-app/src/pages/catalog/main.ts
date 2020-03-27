import Vue from "vue";
import App from "@catalog/App.vue";
import InitializationService from '@common/services/initialization.service';
import store from "./store"

InitializationService.initializeCommon();

// new Vue({
//   el: "#app",
//   render: h => h(App)
// });


// Hydration. Mounting to several elements with passing data from mount attributes
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
          productId: this.productId
        }
      })
    }
  }).$mount(el, true);
}

// Hydrate one element
// new Vue({
//   delimiters: [ "${", "}$" ],
//   // data: {
//   //   message: "Hello world",
//   //   counter: 0
//   // },
//   // methods: {
//   //   increment: function () {
//   //     this.counter++;
//   //   }
//   // },
//   render: h => h(App)

// }).$mount("#app", true);

// runtime + compiler. Mount app to server
