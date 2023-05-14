<template>
  <div>
    <div class="flex-items"></div>
      <!-- <img :src="logoIMG" class="img-tm"/> -->
      <span>{{ yyy }}</span></div>
      <!-- <h2>{{ Meta.TM }}</h2> -->
      <!-- <div class="asist-text">CURRENT: {{ queryArgs }} *** {{ run }}</div>
      <router-link :to="{path:'/Korfad_table/assistant'}" class="vue-a"><button @click="resetData()">Assistant</button></router-link>
    </div>
      <fieldset class="flex-items">
        <button @click="refreshPage()">Refresh page</button>
        <div class="asist-text">*{{ currentType }}*</div>
        <select v-model="currentType" :value="currentType">
          <option value="FrameDoors">Frame doors</option>
          <option value="PanelDoors">Panel doors</option>
        </select>
        <select v-model="queryModel" :value="queryModel">
          <option v-for="model in modelQueryList" :key="model.id" :value="model">{{ model }}</option>
        </select>
        <button @click="run = true">RUN</button>
        <div style="font-size: .6rem;">{{ queryModel }}</div>
      </fieldset>
    <DoorVariables :qArgs="queryArgs" :run="run" @runReset="run=false" :currentType="currentType"></DoorVariables>
    <router-view></router-view> -->
  <!-- </div> -->
</template>

<script>
// import DoorVariables from '../components/OMEGA/OMEGA-Variables.vue'
import DoorData from '../TM_OMEGA/OmegaDoors'
import { mapState } from 'vuex'
export default {
  // components: { DoorVariables },
  mixins: { DoorData },
  data () {
    return {
      // yyy: this.$store.state.MSG,
      Meta: DoorData.Meta,
      // FrameDoors: DoorData.FrameDoors,
      PanelDoors: DoorData.PanelDoors,
      modelQueryList: Object.keys(DoorData.PanelDoors),
      Decors: DoorData.Decors,
      currentType: 'PanelDoors',
      queryModel: Object.keys(DoorData.PanelDoors)[0],
      run: false
    }
  },
  watch: {
    // currentType: function () {
    //   if (this.currentType === 'FrameDoors') {
    //     this.modelQueryList = Object.keys(this.FrameDoors)
    //     this.queryModel = Object.keys(this.FrameDoors)[0]
    //   }
    //   if (this.currentType === 'PanelDoors') {
    //     this.modelQueryList = Object.keys(this.PanelDoors)
    //     this.queryModel = Object.keys(this.PanelDoors)[0]
    //   }
    // }
  },
  computed: {
    // FrameDoorList () { return Object.keys(this.FrameDoors) },
    // PanelDoorList () { return Object.keys(this.PanelDoors) },
    // queryArgs () {
    //   return {
    //     qModel: this.queryModel,
    //     qType: this.currentType
    //   }
    // },
    // logoIMG () {
    //   return require('../TM_OMEGA/OMEGA_logo.jpg')
    //   // return require(this.Meta.Logo)
    // }
    ...mapState(['MSG']),
    yyy () {
      return this.MSG + ' world'
    }
  }
}
</script>
