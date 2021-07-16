<template>
  <div class="7al">
    <div class="s1c">
      <nuxt-link exact to="/" class="disable">
        <ul id="zfp" class="zfp"></ul>
      </nuxt-link>
    </div>
    <div class="s1c" v-for="(data, i) in objData" :key="data.id">
      <nuxt-link exact :to="'/' + i" class="disable">
        <ul id="zfp" class="zfp"></ul>
      </nuxt-link>
    </div>
    <div class="s1c">
      <nuxt-link exact to="/" class="disable">
        <ul id="zfp" class="zfp"></ul>
      </nuxt-link>
    </div>
    <div class="s1c">
      <nuxt-link exact to="/portfolio" class="disable">
        <ul id="zfp" class="zfp"></ul>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['object2'],
  data() {
    return {
      objData: this.object2
    }
  }
}
</script>

<style exact lang="scss" scoped>
$primary: #D25593;

.7al {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: inherit;
}

.s1c {
  flex-grow: 1;
  height: 100%;
}

.s1c + .s1c {
  margin-top: 10%;
}

ul {
  margin: 0;
  padding: 0;
}

.zfp {
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
  height: inherit;
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

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
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.disable:hover::after {
  opacity: 1;
}
</style>
