import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";

import UserLogin from "@/store/user-login";

let exampleUser: UserLogin;

function initializeStores(store: Store<any>): void {
  exampleUser = getModule(UserLogin, store);
}

export { initializeStores, exampleUser };