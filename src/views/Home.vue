<template>
  <div class="home">
    <p>欢迎使用</p>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
  },
})
export default class Home extends Vue {}
</script>
