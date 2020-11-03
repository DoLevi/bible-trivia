import { createStore } from "vuex";

export const progressSteps = [
  0,
  50,
  100,
  200,
  500,
  1_000,
  2_000,
  4_000,
  8_000,
  16_000,
  32_000,
  64_000,
  125_000,
  500_000,
  1_000_000
];

interface State {
  progress: number;
}

export default createStore<State>({
  state: {
    progress: 0
  },
  mutations: {},
  actions: {},
  modules: {}
});
