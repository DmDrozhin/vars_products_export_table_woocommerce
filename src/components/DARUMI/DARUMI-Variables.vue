<template>
      <table>
        <thead>
          <tr><th v-for="title in headers" :key="title.id">{{ title }}</th></tr>
        </thead>
        <tbody>
          <!-- VARIABLE product data, table template from WooCommerce API -->
        <tr v-for="vrb in VariableProductData" :key="vrb.id">
          <td data-ID>{{ vrb.ID }}</td>
          <td data-variable>variable</td>
          <td></td>
          <td class="w5 change">{{ vrb.Model }} {{ vrb.Decor }}</td>
          <td data-1>1</td><td data-0>0</td>
          <td data-visible>visible</td>
          <td data-price class="w15">
            Ціна за «Стандартне» полотно:
            <span v-if="vrb.DoorType==='FrameDoors'">
              <span class="door-price">{{ vrb.DoorPrice }} &#8372;. </span>
            </span>
            <span v-if="vrb.DoorType==='PanelDoors'">
              від <span class="door-price" >{{ vrb.DoorPrice[0] | edgePrice }} &#8372; до {{ vrb.DoorPrice[1] | edgePrice }} &#8372;.</span>, в залежності від вибраної кромки.
            </span>
            <span>«Стандартні» полотна: &#8596; 400mm / 600mm / 700mm / 800mm / 900mm &#8597; 2000mm</span>
          </td>
          <td></td>
          <td data-0>0</td><td data-0>0</td>
          <td data-taxable>taxable</td>
          <td></td>
          <td data-1>1</td>
          <td></td><td></td>
          <td data-0>0</td><td data-0>0</td>
          <td></td><td></td><td></td><td></td>
          <td data-0>0</td>
          <td></td><td></td><td></td>
          <td data-categories class="w30 change">{{ vrb.Categories }}</td>
          <td></td><td></td>
          <td data-pics class="w20 change">{{ vrb.Pics.join(', ') }}</td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          <td data-ID>{{ vrb.ID }}</td>
          <td data-size>Розмір</td>
          <td> &#8596;400mm &#8597;2000mm,  &#8596;600mm &#8597;2000mm,  &#8596;700mm &#8597;2000mm,  &#8596;800mm &#8597;2000mm,  &#8596;900mm &#8597;2000mm</td>
          <td data-1>1</td><td data-1>1</td>
          <td data-def-size> &#8596;800mm &#8597;2000mm</td>
          <td data-glass>
            <span v-if="vrb.DoorType==='FrameDoors'">Скло</span>
            <span v-if="vrb.DoorType==='PanelDoors'">Декор. накладка</span>
          </td>
          <td>
            <span v-if="vrb.DoorType==='FrameDoors'">{{ vrb.GlassSet.join(', ') }}</span>
            <span v-if="vrb.DoorType==='PanelDoors'">{{ vrb.OnLay.join(', ') }}</span>
          </td>
          <td data-1>1</td><td data-1>1</td>
          <td data-def-glass>
            <span v-if="vrb.DoorType==='FrameDoors'">{{ vrb.GlassSet[0] }}</span>
            <span v-if="vrb.DoorType==='PanelDoors'">{{ vrb.OnLay[0] }}</span>
          </td>
          <td data-door-case>Коробка</td>
          <td class="w10">{{vrb.DoorCases.join(', ') }}</td>
          <td data-1>1</td><td data-1>1</td>
          <td data-def-door-case>{{ vrb.DoorCases[2] }}</td>
          <td data-jumb>Лиштва</td>
          <td class="w15">{{ vrb.DoorJambs.join(', ') }}</td>
          <td data-1>1</td><td data-1>1</td>
          <td data-def-jamb>{{ vrb.DoorJambs[2] }}</td>
          <td data-extension>Добірна дошка</td>
          <td class="w10">{{ vrb.DoorExtensions.join(', ') }}</td>
          <td data-1>1</td><td data-1>1</td>
          <td data-def-extension>{{ vrb.DoorExtensions[0] }}</td>
          <td v-if="vrb.DoorType==='PanelDoors'">Кромка</td>
          <td v-if="vrb.DoorType==='PanelDoors'" class="w10">{{ vrb.Edge.join(', ') }}</td>
          <td v-if="vrb.DoorType==='PanelDoors'">1</td>
          <td v-if="vrb.DoorType==='PanelDoors'">1</td>
          <td v-if="vrb.DoorType==='PanelDoors'">{{ vrb.Edge[0] }}</td>
          <td data-0>0</td>
          <td data-def>default</td>
          <td data-yoast1>{{ Meta.Yoast1 }}</td>
          <td data-yoast2 class="w15">{{ Meta.Yoast2 }}</td>
          <td data-60>60</td>
          <td></td><td data-1>1</td><td></td>
        </tr>
    </tbody>
      <DoorVariations :qArr="VariableProductData" :currentType="currentType"></DoorVariations>
    </table>
</template>

<script>
// ***************************************************************************
import DoorData from '../../TM_DARUMI/DarumiDoors'
import DoorIMGs from '../../TM_DARUMI/DarumiIMGs'
import Molded from '../../TM_DARUMI/DarumiMoldedProducts'
import DoorVariations from '../DARUMI/DARUMI-Variations.vue'
export default {
  mixins: [DoorData, DoorIMGs, Molded],
  components: { DoorVariations },
  data () {
    return {
      // headers: '',
      VariableProductData: [],

      Meta: DoorData.Meta,
      Decors: DoorData.Decors,
      FrameDoors: DoorData.FrameDoors,
      PanelDoors: DoorData.PanelDoors,
      FrameHeaders: DoorData.FrameDoorsTableHeaders,
      PanelHeaders: DoorData.PanelDoorsTableHeaders,
      DoorIMGs: DoorIMGs,
      MoldSets: Object.entries(Molded.Variations),
      MoldPList: Molded.PriceList,
      counter: 1
    }
  },
  props: {
    qArgs: { required: true, type: Object },
    run: { required: true, type: Boolean },
    currentType: { required: true, type: String }
  },
  computed: {
    headers () {
      return this.currentType === 'FrameDoors' ? this.FrameHeaders : this.PanelHeaders
    }
  },
  watch: {
    run () {
      if (this.run) {
        this.handleRequest()
      }
    },
    currentType () {
      this.resetData()
    }
  },

  methods: {
    handleRequest () {
      this.resetData()
      // ******************* FRAME DOOR ***********************
      const resArr = [] // Main Array
      const Data1 = {}
      Data1.DoorType = this.currentType // 'FrameDoors'
      Data1.TM = this.Meta.TM
      Data1.FilmTM = this.Meta.DecFilm
      Data1.Model = this.qArgs.qModel
      const mData = Object.entries(this[this.currentType][this.qArgs.qModel])
      Data1.Edge = this.setEdge(this.currentType, mData[0][1])
      Data1.GlassSet = this.Decors[mData[2][1]]
      Data1.Panel = this.Decors[mData[3][1]]
      Data1.OnLay = this.Decors[mData[4][1]]
      Data1.Modern = mData[5][1]
      Data1.VLines = mData[6][1]
      const arr = Object.keys(this.MoldPList) // Looping through these two Groups of decors
      arr.forEach((dec, id) => {
        const Data2 = { ...Data1 }
        Data2.PriceGrp = dec
        const DecorSet = this.Decors[mData[id][0]] // Array. 1-White Mat / or 0-Base colors
        Data2.DoorPrice = mData[id][1] // Price for White Mat / or base color
        Data2.DoorCases = this.MoldSets[id][1].DoorCase
        Data2.DoorJambs = this.MoldSets[id][1].Jamb
        Data2.DoorExtensions = this.MoldSets[id][1].Extension
        Data2.DecSet = DecorSet
        // console.log(Data2)
        DecorSet.forEach(color => {
          const Data3 = { ...Data2 }
          Data3.ID = this.counter
          this.counter = Data3.ID + 1
          Data3.Decor = color
          Data3.Categories = this.setCategory(Data3)
          Data3.Pics = this.setImages(Data3.Model, color)
          resArr.push(Data3)
          // console.log(Data3)
        })
      })
      this.VariableProductData = resArr
    },
    resetData () {
      this.VariableProductData = []
      this.counter = 1
      this.$emit('runReset')
    },

    refreshPage () {
      this.$router.go(0)
    },

    thoughErr () {
      throw new Error('"***Error***')
    }
  },
  filters: {
    edgePrice (val) {
      return (Object.values(val)).join(', ')
    }
  }
}
</script>
