<template>
  <div class="nav-list">
    <!--:class="{ 'parent' : (page === '') }"-->
    <div class="stretchli" v-for="(data, i) in objData" :key="data.id">
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
      objData: this.object
    }
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
  /*text-shadow: 0 0.01px 0.01px rgba(0,0,0,0.20),
              0 0.02px 0.02px rgba(0,0,0,0.16),
              0 0.04px 0.04px rgba(0,0,0,0.12),
              0 0.08px 0.08px rgba(0,0,0,0.08),
              0 0.16px 0.16px rgba(0,0,0,0.04);*/
  /*box-shadow: 0 1px 1px rgba(0,0,0,0.125),
              0 2px 2px rgba(0,0,0,0.1),
              0 4px 4px rgba(0,0,0,0.075),
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.025);*/
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
  /*box-shadow: 0 1px 1px rgba(0,0,0,0.08),
              0 2px 2px rgba(0,0,0,0.08),
              0 4px 4px rgba(0,0,0,0.08),
              0 8px 8px rgba(0,0,0,0.08),
              0 16px 16px rgba(0,0,0,0.08),
              0 32px 32px rgba(0,0,0,0.08);*/
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Transition to showing the bigger shadow on hover */
.disable:hover::after {
  opacity: 1;
}
</style>
