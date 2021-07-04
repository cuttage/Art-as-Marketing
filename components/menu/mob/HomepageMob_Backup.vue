<template>
  <div class="nav-list">
    <!--:class="{ 'parent' : (page === '') }"-->
    <!--:style="{ 'box-shadow': boxSh(i) }"-->
    <!--:style="{ backgroundColor: `${randomColor(i)}100%)` }"-->
    <div class="longer stretchli" v-for="(data, i) in objData" :key="data.id">
      <nuxt-link exact :to="'/' + i" class="disable">
        <ul id="childr" class="childr"></ul>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['object'],
  data() {
    return {
      objData: this.object,
      colorCache: {},
      boxCache: {}
    }
  },
  computed: {
    arrayPicker() {
      return this.cols[Math.floor(Math.random() * this.cols.length)];
    }
  },
  methods: {
    randomColor(id) {
      const difference = (a, b) => Math.abs(a - b);
      const r = (min, max) => Math.floor(Math.random() * (max - min)) + min;

      return this.colorCache[id] || (this.colorCache[id] = `hsla(${r(200, 360)}, 100%, ${r(45, 60)}%, `);
    },
    boxSh(id) {
      const r = (min, max) => Math.floor(Math.random() * (max - min)) + min;
      this.randomColor(id);
      return this.boxCache[id] || (this.boxCache[id] =
        `0 1px 1px ${this.colorCache[id]}12.5%),
        0 2px 2px ${this.colorCache[id]}10%),
        0 4px 4px ${this.colorCache[id]}7.5%),
        0 8px 8px ${this.colorCache[id]}5%),
        0 16px 16px ${this.colorCache[id]}2.5%)`)
    }
  },
  created() {
    this.$watch('colorCache', (newValue, oldValue) => {
      console.log('colorCache', newValue, oldValue)
    }, {immediate: true})
  }
}
</script>

<style exact lang="scss" scoped>
$primary: #D25593;

.nav-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: inherit;
}

li {
  margin: auto;
  background-color: transparent;
  display: table-cell;
  width: inherit;
  height: inherit;
  vertical-align: middle;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  text-transform: capitalize;
  list-style: none;
  font-family: 'AtkinsonHyperlegibleRegular';
  text-rendering: geometricPrecision;
  font-size: 27.82428px; // was: 27.84528px
  line-height: 1.35;
  //letter-spacing: -.01em;
  color: #e3e4e1;
}

.stretchli {
  flex-grow: 1;
  height: 100%;
}

.stretchli + .stretchli {
  margin-top: 10%;
}

ul {
  margin: 0;
  padding: 0;
}

.childr {
  text-rendering: geometricPrecision;
  position: relative;
  display: table;
  width: inherit;
  height: inherit;
  border-radius: 5px;
}

.disable {
  position: relative;
  display: inline-block;
  text-decoration: none;
  width: 174.825px;
  height: inherit; // was: height: 117.099764150943396px;
  border-radius: 5px;
  text-shadow: 0 0.01px 0.01px rgba(0,0,0,0.20),
              0 0.02px 0.02px rgba(0,0,0,0.16),
              0 0.04px 0.04px rgba(0,0,0,0.12),
              0 0.08px 0.08px rgba(0,0,0,0.08),
              0 0.16px 0.16px rgba(0,0,0,0.04);
  box-shadow: 0 1px 1px rgba(0,0,0,0.125),
              0 2px 2px rgba(0,0,0,0.1),
              0 4px 4px rgba(0,0,0,0.075),
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.025);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Pre-render the bigger shadow, but hide it */
.disable::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 5px;
  opacity: 0;
  box-shadow: 0 1px 1px rgba(0,0,0,0.08),
              0 2px 2px rgba(0,0,0,0.08),
              0 4px 4px rgba(0,0,0,0.08),
              0 8px 8px rgba(0,0,0,0.08),
              0 16px 16px rgba(0,0,0,0.08),
              0 32px 32px rgba(0,0,0,0.08);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.longer:focus ul {
  background-color: yellow !important;
  text-shadow: none !important;
}

/* Transition to showing the bigger shadow on hover */
.disable:hover::after {
  opacity: 1;
}
</style>
