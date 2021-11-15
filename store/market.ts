import { Module, VuexModule } from "vuex-module-decorators";

@Module({
  name: "Market",
  namespaced: true,
  stateFactory: true
})
export default class Market extends VuexModule {
  wheels = 2;

  get axles() {
    return this.wheels;
  }
}