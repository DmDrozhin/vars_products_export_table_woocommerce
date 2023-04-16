<template>
  <div id="app">
    <router-link :to="{name: 'DoorConfig'}"><Button>Door config page</Button></router-link>
    <router-link to="/"><button>To exp/imp table</button></router-link>
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
