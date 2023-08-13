<template>
  <div>
    <div class="flex-items">
      <img :src="Meta.Logo" class="img-tm"/>
      <h2>{{ Meta.TM }}</h2>
      <div style="font-size: .6rem;">CURRENT: {{ queryArgs }} *** {{ run }}</div>
  </div>
      <fieldset class="flex-items">
        <button @click="refreshPage()">Refresh page</button>
        <div style="font-size: .6rem;">*{{ currentType }}*</div>
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
  </div>
</template>

<script>
import DoorVariables from '../components/CITY/CITY-Variables.vue'
import DoorData from '../TM_CITY/CityDoors'
export default {
  components: { DoorVariables },
  mixins: { DoorData },
  data () {
    return {
      Meta: DoorData.Meta,
      FrameDoors: DoorData.FrameDoors,
      PanelDoors: DoorData.PanelDoors,
      modelQueryList: Object.keys(DoorData.PanelDoors),
      Decors: DoorData.Decors,
      currentType: 'PanelDoors',
      queryModel: Object.keys(DoorData.PanelDoors)[4],
      run: false
    }
  },
  watch: {
    currentType: function () {
      if (this.currentType === 'FrameDoors') {
        this.modelQueryList = Object.keys(this.FrameDoors)
        this.queryModel = Object.keys(this.FrameDoors)[0]
      }
      if (this.currentType === 'PanelDoors') {
        this.modelQueryList = Object.keys(this.PanelDoors)
        this.queryModel = Object.keys(this.PanelDoors)[0]
      }
    }
  },
  computed: {
    FrameDoorList () { return Object.keys(this.FrameDoors) },
    PanelDoorList () { return Object.keys(this.PanelDoors) },
    queryArgs () {
      return {
        qModel: this.queryModel,
        qType: this.currentType
      }
    }
  },
  methods: {
  }
}
</script>
