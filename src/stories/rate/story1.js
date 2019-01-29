export default {
  template: `
<div>
  <div class="field is-huge">
    val1: {{ val1 }}
    <w-rate v-model="val1"/>
  </div>
  <div class="field is-huge">
    val2: {{ val2 }}
    <label for="">:min="2" :max="7"</label>
    <w-rate v-model="val2" :min="2" :max="7"/>
  </div>
  <div class="field is-huge">
    val3: {{ val3 }}
    <label for="">:decimal="1"</label>
    <w-rate v-model="val3" :decimal="1"/>
  </div>
  <div class="field is-huge">
    val4: {{ val4 }}
    <label for="">readonly</label>
    <w-rate v-model="val4" readonly/>
  </div>
  <div class="field is-huge">
    val5: {{ val5 }}
    <label for="">:max="10" :unit="2"</label>
    <w-rate v-model="val5" :max="10" :unit="2"/>
  </div>
  <div class="field is-huge">
    val6: {{ val6 }}
    <label for="">:decimal="100"</label>
    <w-rate v-model="val6" :decimal="100"/>
  </div>
</div>`,
  data() {
    return {
      val1: 3,
      val2: 3,
      val3: 3,
      val4: 3,
      val5: 3,
      val6: 3,
      val7: 3,
      val8: 3
    }
  }
}
