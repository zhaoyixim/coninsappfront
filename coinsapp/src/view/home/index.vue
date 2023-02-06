<script lang="ts">
export default {
  name:"homeIndex"
}
</script>
<script setup lang="ts">
import commonFooter from "@/components/common/commonFooter.vue";
import { ref } from 'vue';
 
let showbarTap = ref<boolean | true>()
showbarTap.value = true

defineExpose({
  showbarTap
});
</script>

<template>
  <div>
    <div class="showbar-wrap borderred" v-if="showbarTap"> 
      <div class="showbar"></div>
    </div>
    <h2>hosafsdfgsme</h2> 
    <commonFooter factive='0' />
  </div>
</template>
<style lang="scss">
  .showbar-wrap{
    height:160px;
    .showbar{
      width: 100%; height: 100%;
    }
  }
</style>