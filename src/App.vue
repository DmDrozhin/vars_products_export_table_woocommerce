<template>
  <div id="app">
    <router-link :to="{name: 'Darumi_config'}"><Button>DARUMI Config page</Button></router-link>
    <router-link :to="{name: 'Darumi_table'}"><button>DARUMI Table</button></router-link>
    <router-view/>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  margin: 0;
  padding: 0;
  border: none;
  box-shadow: none;
}
</style>
