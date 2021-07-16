<template>
  <span>
    <InputParentNone class="g2-bk-mob" :mob="mob" />
    <InputBlueWraper class="g2-bk-mob" :mob="mob" :dsk="dsk" />
    <component :is="mob ? 'receiverComponent' : 'receiverComponentDesktop'" class="g2-bk-mob" />
  </span>
</template>

<script>
import InputParentNone from '~/components/slots/InputParentNone.vue';
import InputBlueWraper from '~/components/slots/InputBlueWraper.vue';
import receiverComponent from '~/components/slots/receiverComponent.vue';
import receiverComponentDesktop from '~/components/slots/desktop/receiverComponentDesktop.vue';

export default {
  head() {
    return {
      title: this.capitalize + ' page',
      meta: [
        {
          hid: this.title + ' hid',
          name: this.title,
          content: this.capitalize + ' page description'
        }
      ]
    }
  },
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  data() {
    return {
      dsk: 'dsk',
      mob: null,
      title: this.$route.params.portfolio
    }
  },
  components: {
    InputParentNone,
    InputBlueWraper,
    receiverComponent,
    receiverComponentDesktop
  },
  computed: {
    capitalize() {
      return this.$route.params.portfolio.charAt(0).toUpperCase() + this.$route.params.portfolio.slice(1)
    }
  },
  methods: {
    setMob() {
      return (this.$route.params.portfolio === 'touchportfolio') ? this.mob = 'mob' : this.mob = null
    }
  },
  created() {
    this.setMob()
  }
}
</script>
