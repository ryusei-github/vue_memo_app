<template>
  <div class="home">
    <HelloWorld msg="Welcome to Memo App"/>
    <router-link to="/memo">Add your memo</router-link>
  </div>
  <div>
    <img alt="memo logo" class="image" src="../assets/memo2.png">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
