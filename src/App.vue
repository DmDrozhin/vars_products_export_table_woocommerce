<template>
  <div id="app">
    <!-- <router-link :to="{path: 'temp'}"><Button>to Temp table</Button></router-link> -->
    <router-link :to="{name: 'Darumi_table'}" class="vue-a"><button>DARUMI Table</button></router-link>
    <router-link :to="{name: 'Leador_table'}" class="vue-a"><button>LEADOR Table</button></router-link>
    <router-link :to="{name: 'Korfad_table'}" class="vue-a"><button>KORFAD Table</button></router-link>
    <router-link :to="{name: 'Omega_table'}" class="vue-a"><button>OMEGA Table</button></router-link>
    <router-link :to="{name: 'City_table'}" class="vue-a"><button>CITY Table</button></router-link>
    <hr class="hr2">
    <router-view/>
  </div>
</template>
