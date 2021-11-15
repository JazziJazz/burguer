import { Module, VuexModule } from "vuex-module-decorators";

@Module({
  name: "Vehicle",
  namespaced: true,
  stateFactory: true
})
export default class Vehicle extends VuexModule {
  wheels = 2;

  get axles() {
    return this.wheels;
  }
}
