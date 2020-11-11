import { ActionContext, createStore } from "vuex";

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

interface Verse {
  content: string;
  book: string;
  chapterNum: number | undefined;
  verseNum: number;
}

interface State {
  progress: number;
  question: string;
  answers: [string, string, string, string];
  wrapperVerses: [Verse, Verse] | undefined;
}

export default createStore<State>({
  state: {
    progress: 0,
    question: "What is a question?",
    answers: ["Strong", "Independent", "Sensible", "Not too shy to sing"],
    wrapperVerses: [
      {
        content:
          "O Lord, you will ordain peace for us, for you have indeed done for us all our works.",
        book: "Isaiah",
        chapterNum: 26,
        verseNum: 12
      },
      {
        content:
          "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
        book: "Psalms",
        chapterNum: 73,
        verseNum: 26
      }
    ]
  },
  mutations: {
    setProgress: function(state, newProgress: number) {
      if (newProgress >= 0) {
        state.progress = newProgress;
      }
    }
  },
  actions: {
    submitAnswer: function(
      ctx: ActionContext<State, State>,
      answerIdx: number
    ) {
      if (answerIdx === 3) {
        if (ctx.state.progress < progressSteps.length - 1) {
          ctx.commit("setProgress", ctx.state.progress + 1);
        }
      } else if (ctx.state.progress > 0) {
        ctx.commit("setProgress", ctx.state.progress - 1);
      }
    }
  },
  modules: {}
});
