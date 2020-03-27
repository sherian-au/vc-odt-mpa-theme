import Vue from "vue";
import App from "@catalog/App.vue";
import InitializationService from '@common/services/initialization.service';

InitializationService.initializeCommon();

// new Vue({
//   el: "#app",
//   render: h => h(App)
// });

const elements = document.getElementsByClassName("app") as any;

for(const el of elements){
  new Vue({
    delimiters: [ "${", "}$" ],
    render: h => h(App)

  }).$mount(el, true);
}

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
