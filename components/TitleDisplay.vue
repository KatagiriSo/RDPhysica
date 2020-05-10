<template>
<div>
    <div class="container">
        {{ descRef }}
    </div>
</div>    
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component({})
export default class TitleDisplay extends Vue {
    @Prop({ type:String, required:true, default:"test"})
    desc!: string;

    get descRef() {
        return this.desc;
    }
}
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
</style>
