<template>
  <div>
    <div class="container">
      <div class="columnContainer">
        <p class="subtitle">{{ question }}</p>
        <input
          class="answerform"
          v-model="userAnswer"
          type="text"
          placeholder="回答する"
        />
        <button
          class="myButton"
          v-if="answerButtonDisplay"
          v-on:click="answerButtonClicked"
        >
          答えを見る
        </button>
        <p class="subtitle" v-if="answerDisplay">答え {{ answer }}</p>
        <button
          class="myButton"
          v-if="answerDisplay"
          v-on:click="nextButtonClicked"
        >
          次の問題
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, SetupContext, ref } from "@vue/composition-api";

interface Props {}

interface QAData {
  list: QAEntity[];
}

interface QAEntity {
  question: string;
  answer: string;
}

let qalist: QAEntity[] = [
  {
    question: "光の速さｃ(m/s)はいくらか？（有効数字2桁)",
    answer: "3.0*10^8(m/s)"
  },
  {
    question: "ボルツマン定数ｋ(J/K)はいくらか？（有効数字2桁)",
    answer: "1.4*10^-23(m/s)"
  },
  {
    question: "プランク定数h(Js)はいくらか？（有効数字2桁)",
    answer: "6.6*10^-34(Js)"
  }
];

let qaData: QAData = {
  list: qalist.slice()
};

export default defineComponent({
  setup(props: Props, context: SetupContext) {
    let question = ref("");
    let answer = ref("");
    let userAnswer = ref("");
    let answerDisplay = ref(false);
    let answerButtonDisplay = ref(true);

    let qa = null;

    let nextQuestion = () => {
      qa = qaData.list.pop();
      if (qa == undefined) {
        qaData.list = qalist.slice();
        nextQuestion();
        return;
      }
      answerDisplay.value = false;
      userAnswer.value = "";
      answerButtonDisplay.value = true;
      question.value = qa.question;
      answer.value = qa.answer;
    };

    let nextButtonClicked = () => {
      nextQuestion();
    };

    let answerButtonClicked = () => {
      answerDisplay.value = true;
      answerButtonDisplay.value = false;
    };

    nextQuestion();

    return {
      userAnswer,
      question,
      answer,
      answerDisplay,
      answerButtonDisplay,
      nextButtonClicked,
      answerButtonClicked
    };
  }
});
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.columnContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  text-align: left;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  font-size: 50px;

  color: #35495e;
  letter-spacing: 1px;
}

@media screen and (min-width: 769px) {
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
}

@media screen and (max-width: 768px) {
  .subtitle {
    font-weight: 300;
    font-size: 21px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
}

@media screen and (min-width: 769px) {
  .answerform {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
    outline-width: 1px;
    outline-color: #526488;
    outline-style: auto;
  }
}

@media screen and (max-width: 768px) {
  .answerform {
    font-weight: 300;
    font-size: 21px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
    outline-width: 1px;
    outline-color: #526488;
    outline-style: auto;
  }
}

@media screen and (min-width: 769px) {
  .myButton {
    /* font-weight: 300; */
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
    border-color: green;
    border-radius: 10px;
    margin: 0px;
  }
}

@media screen and (max-width: 768px) {
  .myButton {
    /* font-weight: 300; */
    font-size: 21px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
    border-color: green;
    border-radius: 10px;
    margin: 0px;
  }
}

.links {
  padding-top: 15px;
}
</style>
