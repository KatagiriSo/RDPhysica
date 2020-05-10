<template>
  <div class="container">
    <transition>
    <div v-if="display=='mainLogo'" v-on:click="onTitleClicked">
      <logo />
      <h1 class="title">
        RD-Physica
      </h1>
      <h2 class="subtitle">
        Physics Games
      </h2>      
      <!-- <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
    </div>
    <title-display v-if="display=='titleDisplay'"
            v-bind:desc="titleRef"
            v-on:click="onTitleClicked">
    </title-display>
    </transition>

  </div>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'
import TitleDisplay from '~/components/TitleDisplay.vue'
import { Component, Vue, Emit } from "vue-property-decorator";

@Component({
  components: {
    Logo,
    TitleDisplay
  }
})
export default class Lab extends Vue {

  display:"mainLogo"|"titleDisplay" = "mainLogo";
  title = "GAME START";

  get titleRef() {
    return this.title;
  }

  onTitleClicked() {
    this.display = "titleDisplay";
    setTimeout(()=> {
      this.$router.push("./fstgame");
    },3000);
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
