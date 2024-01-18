<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { useUserStore } from '@/stores/user'
let userStore = useUserStore()
console.log(userStore.name)
</script>

<template>
  <HelloWorld msg="Vite + Vue111" />
</template>
