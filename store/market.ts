import { Module, VuexModule } from "vuex-module-decorators";

@Module({
  name: "market",
  namespaced: true,
  stateFactory: true
})
export default class Market extends VuexModule {
  products = 23;

  // @Mutation
  // FILL_PRODUCTS(object: Object): any {
  //   return this.products
  // }

  // @Action({ commit: "FILL_PRODUCTS" })
  // fillProducts(): any {
  //   let myObject = {"name": "Oloco", "description": "nosfa", "price": 50.5}

  //   return myObject
  // }

  get $products(): number {
    console.log("Hello World!");

    return this.products
  }
}
