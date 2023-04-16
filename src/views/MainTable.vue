<template>
  <div>
    <h2>{{ msg }}</h2>
    <hr class="hr1">
    <!-- <div>{{ VariableProductData }}</div> -->
    <door-config
      v-on:receiveVariableData="handleVariable($event)"
      v-on:receiveVariationData="handleVariation($event)">
    </door-config>
    <hr class="hr1">
    <div>
      <table>
        <thead>
          <tr><th v-for="title in headers" :key="title.id">{{ title }}</th></tr>
        </thead>
        <tbody>
          <!-- VARIABLE product data, table template from WooCommerce API -->
        <tr v-for="vrble in Variables" :key="vrble.id">
          <td data-clmn="A">{{ vrble.ID }}</td>
          <td data-clmn="B">variable</td>
          <td data-clmn="C"></td>
          <td data-clmn="D" class="w5 change">{{ vrble.model }} {{ vrble.decor }}</td>
          <td data-clmn="E">1</td>
          <td data-clmn="F">0</td>
          <td data-clmn="G">visible</td>
          <td data-clmn="H" class="w15">Ціна за «Стандартне» полотно: <span class="door-price">{{ vrble.price }}</span> грн. «Стандартні» полотна: &#8596; 400mm / 600mm / 700mm / 800mm / 900mm &#8597; 2000mm </td>
          <td data-clmn="I"></td>
          <!-- <td data-clmn="I" class="w30">
            <door-frame-middles v-if="ifCannelureModel(vrble.model)"></door-frame-middles>
          </td> -->
          <td data-clmn="J">0</td>
          <td data-clmn="K">0</td>
          <td data-clmn="L">taxable</td>
          <td data-clmn="M"></td>
          <td data-clmn="N">1</td>
          <td data-clmn="O"></td>
          <td data-clmn="P"></td>
          <td data-clmn="Q">0</td>
          <td data-clmn="R">0</td>
          <td data-clmn="S"></td>
          <td data-clmn="T"></td>
          <td data-clmn="U"></td>
          <td data-clmn="V"></td>
          <td data-clmn="W">0</td>
          <td data-clmn="X"></td>
          <td data-clmn="Y"></td>
          <td data-clmn="Z"></td>
          <td data-clmn="AA" class="w30 change">{{ vrble.category }}</td>
          <td data-clmn="AB"></td>
          <td data-clmn="AC"></td>
          <td data-clmn="AD" class="w20 change">{{ vrble.pictures.join(', ') }}</td>
          <td data-clmn="AE"></td>
          <td data-clmn="AF"></td>
          <td data-clmn="AG"></td>
          <td data-clmn="AH"></td>
          <td data-clmn="AI"></td>
          <td data-clmn="AJ"></td>
          <td data-clmn="AK"></td>
          <td data-clmn="AL"></td>
          <td data-clmn="AM">{{ vrble.ID }}</td>
          <td data-clmn="AN">Розмір</td>
          <td data-clmn="AO"> &#8596;400mm &#8597;2000mm,  &#8596;600mm &#8597;2000mm,  &#8596;700mm &#8597;2000mm,  &#8596;800mm &#8597;2000mm,  &#8596;900mm &#8597;2000mm</td>
          <td data-clmn="AP">1</td>
          <td data-clmn="AQ">1</td>
          <td data-clmn="AR"> &#8596;800mm &#8597;2000mm</td>
          <td data-clmn="AS">Скло</td>
          <td data-clmn="AT">{{ vrble.glass.join(', ') }}</td>
          <td data-clmn="AU">1</td>
          <td data-clmn="AV">1</td>
          <td data-clmn="AW">Сатин білий</td>
          <td data-clmn="AX">Коробка</td>
          <td data-clmn="AY" class="w10">{{vrble.doorFrame.join(', ') }}</td>
          <td data-clmn="AZ">1</td>
          <td data-clmn="BA">1</td>
          <td data-clmn="BB">{{ vrble.doorFrame[2] }}</td>
          <td data-clmn="BC">Лиштва</td>
          <td data-clmn="BD" class="w15">{{ vrble.doorJamb.join(', ') }}</td>
          <td data-clmn="BE">1</td>
          <td data-clmn="BF">1</td>
          <td data-clmn="BG">{{ vrble.doorJamb[1] }}</td>
          <td data-clmn="BH">Добірна дошка</td>
          <td data-clmn="BI" class="w10">{{ vrble.doorExtension.join(', ') }}</td>
          <td data-clmn="BJ">1</td>
          <td data-clmn="BK">1</td>
          <td data-clmn="BL">{{ vrble.doorExtension[0] }}</td>
          <td data-clmn="BM">0</td>
          <td data-clmn="BN">default</td>
          <td data-clmn="BO">Двері DARUMI %%sep%% %%title%% %%sep%% +38 (099) 309-02-22</td>
          <td data-clmn="BP" class="w15">Якісні двері вироблені в Україні за італійськими   технологіями. Зносостійке декоративне покриття - ELBEGY (Japan). Співвідношення ціна /   якість ⭐ ⭐ ⭐ ⭐ ⭐
          </td>
          <td data-clmn="BQ">60</td>
          <td data-clmn="BR"></td>
          <td data-clmn="BS">1</td>
          <td data-clmn="BT"></td>
        </tr>
        <!-- **************************************************** -->
        <tr v-for="vrn in Variations" :key="vrn.id">
          <td data-clmn="A">{{ vrn.ID }}</td>
          <td data-clmn="B">variation</td>
          <td data-clmn="C"></td>
          <td data-clmn="D" class="w5 change">{{ vrn.model }} {{ vrn.decor }}</td>
          <td data-clmn="E">1</td>
          <td data-clmn="F">0</td>
          <td data-clmn="G">visible</td>
          <td data-clmn="H"></td>
          <td data-clmn="I"></td>
          <td data-clmn="J"></td>
          <td data-clmn="K"></td>
          <td data-clmn="L">taxable</td>
          <td data-clmn="M">parent</td>
          <td data-clmn="N">1</td>
          <td data-clmn="O"></td>
          <td data-clmn="P"></td>
          <td data-clmn="Q">0</td>
          <td data-clmn="R">0</td>
          <td data-clmn="S"></td>
          <td data-clmn="T"></td>
          <td data-clmn="U"></td>
          <td data-clmn="V"></td>
          <td data-clmn="W">0</td>
          <td data-clmn="X"></td>
          <td data-clmn="Y"></td>
          <td data-clmn="Z">{{ vrn.price }}</td>
          <td data-clmn="AA"></td>
          <td data-clmn="AB"></td>
          <td data-clmn="AC"></td>
          <td data-clmn="AD" class="w20 change">{{ vrn.img }}</td>
          <td data-clmn="AE"></td>
          <td data-clmn="AF"></td>
          <td data-clmn="AG">id:{{ vrn.ParentID }}</td>
          <td data-clmn="AH"></td>
          <td data-clmn="AI"></td>
          <td data-clmn="AJ"></td>
          <td data-clmn="AK"></td>
          <td data-clmn="AL"></td>
          <td data-clmn="AM">{{ vrn.ID }}</td>
          <td data-clmn="AN"></td>
          <td data-clmn="AO"></td>
          <td data-clmn="AP"></td>
          <td data-clmn="AQ">1</td>
          <td data-clmn="AR"></td>
          <td data-clmn="AS">Скло</td>
          <td data-clmn="AT">{{ vrn.glass }}</td>
          <td data-clmn="AU"></td>
          <td data-clmn="AV">1</td>
          <td data-clmn="AW"></td>
          <td data-clmn="AX">Коробка</td>
          <td data-clmn="AY" class="w10">{{vrn.doorFrame }}</td>
          <td data-clmn="AZ"></td>
          <td data-clmn="BA">1</td>
          <td data-clmn="BB"></td>
          <td data-clmn="BC">Лиштва</td>
          <td data-clmn="BD" class="w15">{{ vrn.doorJamb }}</td>
          <td data-clmn="BE"></td>
          <td data-clmn="BF">1</td>
          <td data-clmn="BG"></td>
          <td data-clmn="BH">Добірна дошка</td>
          <td data-clmn="BI" class="w10">{{ vrn.doorExtension }}</td>
          <td data-clmn="BJ"></td>
          <td data-clmn="BK">1</td>
          <td data-clmn="BL"></td>
          <td data-clmn="BM">0</td>
          <td data-clmn="BN"></td>
          <td data-clmn="BO"></td>
          <td data-clmn="BP"></td>
          <td data-clmn="BQ"></td>
          <td data-clmn="BR"></td>
          <td data-clmn="BS"></td>
          <td data-clmn="BT"></td>
      </tr>
    </tbody>
    </table>
    </div>
    <!-- <p>{{ Variations }}</p> -->
  </div>
</template>

<script>
import DoorConfig from '../views/DoorConfig.vue'
// import DoorFrameMiddles from '../components/doorFrameMiddles.vue'
import TableHeaders from '../TableHeaders'
export default {
  // components: { DoorConfig, DoorFrameMiddles },
  components: { DoorConfig },
  mixins: { TableHeaders },
  data () {
    return {
      msg: 'DARUMI set of decors #1 table',
      counter: 0,
      headers: TableHeaders.TableHeaders,
      showVariablesTable: 'false',
      Variables: [],
      Variations: [],
      Cannelure: ['BORDO', 'MADRID', 'AVANT', 'SELESTA']
    }
  },
  methods: {
    handleVariable (d) {
      this.Variables = d
    },
    handleVariation (d) {
      this.Variations = d
    },
    ifCannelureModel (md) {
      if (this.Cannelure.includes(md)) {
        return true
      }
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  margin: 0;
  padding: 0;
  border: none;
  box-shadow: none;
}
table {
  border-collapse: collapse;
  border: 1px dotted lightgrey;
}
table tr {
  border-bottom: 1px dotted lightgrey;
}
table th, table td {
  border-right: 1px dotted lightgrey;
  padding: 0 .5rem;
}
table th {
  color: rgb(13, 86, 17);
  font-size: 0.8rem;
}
table td {
  color: rgb(65, 65, 65);
  font-size: 0.8rem;
}
.w5 {
  min-width: 5rem;
}
.w10 {
  min-width: 10rem;
}
.w15 {
  min-width: 15rem;
}
.w20 {
  min-width: 20rem;
}
.w30 {
  min-width: 30rem;
}
.change{
  background: rgb(208, 236, 162);
}
.door-price{
  color: brown;
  font-weight: 600;
  font-size: 1rem;
}
</style>
