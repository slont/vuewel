export default {
  template: `
<div>
  <div class="field" style="padding: .25rem;">
    <label for="">Selectes: </label>
    <span>{{ selected }}</span>
  </div>
  <div class="field" style="padding: .25rem;">
    <span v-for="item in list" :key="item.id">
      <w-radio v-model="selected" :w-value="item" :label="item.name" :class="getClass(item)"/>
    </span>
  </div>
  <div class="field has-bg-black" style="padding: .25rem; color: white;">
    <span v-for="item in list" :key="item.id">
      <w-radio v-model="selected" :w-value="item" :label="item.name" :class="getClass(item)"/>
    </span>
  </div>
</div>`,
  data() {
    return {
      selected: {id: 0, name: 'primary'},
      list: [
        {id: 99, name: 'default'},
        {id: 0, name: 'primary'},
        {id: 1, name: 'success'},
        {id: 2, name: 'link'},
        {id: 'info', name: 'info'},
        {id: 'warning', name: 'warning'},
        {id: 5, name: 'danger'}
      ]
    }
  },
  methods: {
    getClass(item) {
      return `is-${item.name}`
    }
  }
}
