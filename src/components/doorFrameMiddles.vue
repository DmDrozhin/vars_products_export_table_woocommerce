<template>
  <div>
    <h4>{{ msg }}</h4>
    <table class="molded-table">
      <tr>
        <th style="writing-mode: vertical-lr; padding: .5rem; transform: rotate(180deg); text-align: left;">Середник</th>
        <th style="writing-mode: vertical-lr; padding: .5rem; transform: rotate(180deg);text-align: left; color: darkgreen" v-for="dec in decors" :key="dec.id">{{ dec }}</th>
      </tr>
      <tr>
        <td>фігурний</td><td class="yes">✔</td><td class="no">✖</td><td class="yes">✔</td><td class="yes">✔</td><td class="no">✖</td><td class="yes">✔</td><td class="no">✖</td><td class="yes">✔</td><td class="yes">✔</td><td class="no">✖</td><td class="yes">✔</td><td class="yes">✔</td><td class="no">✖</td>
      </tr>
      <tr>
        <td>плоский</td><td v-for="i of 13" :key="i.id" class="yes">✔</td>
      </tr>
    </table>
  </div>
</template>

<script>
import DarumiDoors from '../DarumiDoors'
export default {
  mixins: { DarumiDoors },
  data () {
    return {
      msg: 'Середник каркасу, в даній моделі полотна, може бути або «фігурний» - з канелюрами, або «плоский», в залежності від декору полотна:',
      decors: DarumiDoors.DarumiDecors.AllDecors
    }
  }
}
</script>

<style scoped>
.molded-table {
  table-layout: fixed;
  width: 30rem;
}
.no {color: rgb(130, 0, 0);}
.yes {color:rgb(35, 144, 23);}
</style>
