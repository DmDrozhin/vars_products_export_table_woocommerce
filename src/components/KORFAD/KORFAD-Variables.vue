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
          <td class="w10 change">{{ vrb.Model }} {{ vrb.Decor }}</td>
          <td data-1>1</td><td data-0>0</td>
          <td data-visible>visible</td>
          <td data-price class="w15">
            Ціна за «Стандартне» полотно:
            <span v-if="vrb.DoorType==='FrameDoors' && vrb.Model !== 'SANVITO SV-01 Glass'">
              <span>{{ vrb.DoorPrice | priceNumber }} &#8372;. </span>
            </span>
            <span v-if="vrb.Model === 'SANVITO SV-01 Glass'">
              від <span>{{ vrb.DoorPrice[0] | priceNumber }} &#8372; до {{ vrb.DoorPrice[1] | priceNumber }} &#8372;.</span>, в залежності від вибраного скла.
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
          <td data-categories class="w30 change">{{ vrb.Categories.join(', ') }}</td>
          <td></td><td></td>
          <td data-pics class="w30 change">{{ vrb.Pics.join(', ') }}</td>
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
          <td class="w15">
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
          <td data-def-door-case>{{ vrb.DoorCases[1] }}</td>
          <td data-jumb>Лиштва</td>
          <td class="w15">{{ vrb.DoorJambs.join(', ') }}</td>
          <td data-1>1</td><td data-1>1</td>
          <td data-def-jamb>{{ vrb.DoorJambs[1] }}</td>
          <td data-extension>Добірна дошка</td>
          <td class="w10">{{ vrb.DoorExtensions.join(', ') }}</td>
          <td data-1>1</td><td data-1>1</td>
          <td data-def-extension>{{ vrb.DoorExtensions[1] }}</td>
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
import DoorData from '../../TM_KORFAD/KorfadDoors'
import DoorIMGs from '../../TM_KORFAD/KorfadIMGs'
import Molded from '../../TM_KORFAD/KorfadMoldedProducts'
import DoorVariations from '../KORFAD/KORFAD-Variations.vue'
export default {
  mixins: [DoorData, DoorIMGs, Molded, DoorIMGs],
  components: { DoorVariations },
  data () {
    return {
      VariableProductData: [],

      Meta: DoorData.Meta,
      Decors: DoorData.Decors,
      DoorIMGs,
      FrameDoors: DoorData.FrameDoors,
      PanelDoors: DoorData.PanelDoors,
      MoldPList: Molded.PriceList,
      Variations: Molded.Variations,
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
      return this.currentType === 'FrameDoors' ? this.FrameDoorsTableHeaders : this.PanelDoorsTableHeaders
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
      const resArr = [] // Main Array
      const Data1 = {}
      Data1.DoorType = this.currentType // 'FrameDoors'
      Data1.TM = this.Meta.TM
      // Data1.FilmTM = this.Meta.DecFilm
      Data1.Model = this.qArgs.qModel
      const mData = Object.entries(this[this.currentType][this.qArgs.qModel])
      // console.table(mData)
      Data1.Edge = this.setEdge(this.currentType, mData[0][1])
      // Data1.GlassSet = this.Decors[mData[2][1]]
      Data1.Panel = this.Decors[mData[2][1]]
      Data1.OnLay = this.Decors[mData[3][1]]
      Data1.Modern = mData[4][1]
      Data1.VLines = mData[5][1]
      // console.log(mData[0][1]) // DecorSet - Price
      const DecorSetArr = mData[0][1]
      DecorSetArr.forEach(el => {
        // console.log(Object.keys(el)[0])
        const DecorSet = this.Decors[Object.keys(el)[0]]
        DecorSet.forEach(dec => {
          const Data2 = { ...Data1 }
          Data2.Decor = dec
          Data2.DoorPrice = Object.values(el)[0]
          const DecorSet = Object.keys(el)[0]
          const PriceGrp = this.setPriceGroupe(DecorSet)
          Data2.PriceGrp = PriceGrp
          Data2.DoorCases = this.Variations[PriceGrp].DoorCase
          Data2.DoorJambs = this.Variations[PriceGrp].Jamb
          Data2.DoorExtensions = this.Variations[PriceGrp].Extension
          // Data2.DoorGlasses = this.Decors.Glasses[mData[1][1][0]]
          Data2.GlassSet = this.Decors.Glasses[mData[1][1]]
          Data2.Mirror = mData[1][1] === 'GlassSet2'
          Data2.Triplex = mData[1][1] === 'GlassSet1'
          Data2.Glass8mm = mData[1][1] === 'GlassSet3'
          Data2.Pics = this.setImages(Data2.Model, dec)
          Data2.FilmTM = this.setDecorFilmTM(DecorSet)
          Data2.Categories = this.setCategory(Data2)
          Data2.ID = this.counter
          this.counter = Data2.ID + 1
          resArr.push(Data2)
        })
      })
      this.VariableProductData = resArr
      // console.log(resArr)
    },

    setPriceGroupe (DecorSet) {
      if (DecorSet === 'DecorSet1') return 'Decor1'
      else if (DecorSet === 'DecorSet2') return 'Decor2'
      else if (DecorSet === 'DecorSet3') return 'Decor2'
      else return 'Decor3'
    },

    setDecorFilmTM (DecorSet) {
      const res = []
      const arr = Object.entries(this.Meta.DecFilm)
      arr.forEach((el, id) => {
        if (el[1].includes(DecorSet)) {
          res.push(el[0])
        }
      })
      return res
    }
  },

  filters: {
    edgePrice (val) {
      return (Object.values(val)).join(', ')
    },
    priceNumber (val) {
      return val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }
  }
}
</script>
