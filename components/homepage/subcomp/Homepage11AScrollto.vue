<template>
  <!--eslint-disable-->
  <div class="container">
    <div class="day container-d1 a1">
      <div class="declaration declaration1">
        <div class="text">
          <div id="target-d1 tI" class="title-subcomp-d3 title-d3var">Exploit an haute-couture design strategy.
            <div class="subtitle-d3 tI">Anywhere you promote or sell,</div>
            <div class="container-subtitle2-d3">
              <div class="subtitle2-d3 tI">Give your customer a full-blown,</div>
              <div class="subcontainer-subtitle22-d3">
                <div class="subtitle22-d3 tI">original soundtrack Music experience.</div>
                <div class="subtitle222-d3 tI">*</div>
              </div>
            </div>
            <div class="subtitle3-d3 tI">A small investment, great added value.</div>
            <div class="container-subtitle4-subtitle5-d3">
              <div class="subtitle4-d3 tI subtitle4-d3-business">Original studio Music brought to your selling sites</div>
              <div class="subtitle44-d3 tI">brings customer awareness to match your service quality.</div>
              <div class="subtitle5-d3 tI">*Is this the best haute-couture tweak for you? We will find out.</div>
            </div>
            <previewer v-if="father === 'Homepage1Scrollto'" :mother="mother" />
          </div>
        </div><!--text-->
      </div>
    </div>
  </div>
</template>

<script>
import previewer from '~/components/previewer.vue'
export default {
  props: ['father'],
  components: {
    previewer
  },
  data() {
    return {
      mother: 'Homepage11AScrollto'
    }
  }
}
</script>
