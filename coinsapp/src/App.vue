<script setup lang="ts">
</script>

<template>
  <router-link to="/">go home</router-link>
  <router-view></router-view>
</template>

<style lang="scss">
@import "./assets/css/common.css";
@for $i from 8 through 68 {
	.font#{$i}{font-size: #{$i}px;}
}
body{margin: 0;}
</style>
