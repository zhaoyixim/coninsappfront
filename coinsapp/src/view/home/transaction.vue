<script setup lang="ts">
  import commonFooter from "@/components/common/commonFooter.vue";
  import commonHeader from "@/components/common/commonHeader.vue";
</script>

<template>
  <div class="container ">
    <commonHeader ftitle="交易市场" />

    <div class="disflex tap-box bgwhite">
      <div class="disflex tap-center fontgrey font14">
        <div class="tans-item item-active">购买USDT</div>
        <div class="tans-item">出售USDT</div>
      </div>
    </div>


    <div class="no-order fontgrey">暂无市场需求</div>
    <commonFooter factive='2' />
  </div>
</template>
<style lang="scss" scoped>
.container{height: 100vh;}
.tap-box{ align-items: center; justify-content: center; box-sizing: border-box; width: 100%; }
.tap-center{ width: 60%; justify-content: space-between;
  .tans-item{border: 1px transparent solid;width: 100px; padding: 12px 0; text-align: center; }
  .item-active{border-bottom: 2px #8950FC solid;}

}

.no-order{margin-top: 150px; width: 100%; text-align: center; }
</style>