<template>
  <Header :links='links' />
  <router-view />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      links: [
        {
          url: '/',
          name: 'home',
        },
        {
          url: '/about',
          name: 'about',
        },
      ],
    };
  },
};
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .clickable{
    cursor: pointer;
  }
}
</style>
