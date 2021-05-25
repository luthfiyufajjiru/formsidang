<template>
  <v-app id="app">
    <div id="navbar">
      <navbar></navbar>
    </div>
    <div id="main">
      <v-main>
        <router-view/>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    navbar,
  }
};
</script>

<style>
  #main {
    margin: 10px
  }
</style>