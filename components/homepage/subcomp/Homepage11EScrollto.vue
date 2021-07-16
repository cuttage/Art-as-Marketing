<template>
  <!--eslint-disable-->
  <div class="vt0">
    <div class="day ocp a5">
      <div class="declaration declaration1">
        <div class="text">
          <div id="target-d1 tI" class="2y9 dyb">Exploit an haute-couture design strategy.
            <div class="kk8 tI">If you sell your property furnished,</div>
            <div class="3jk">
              <div class="l2w tI">Give your customer a full, Italian</div>
              <div class="nqv">
                <div class="rju tI">bespoke clothing wardrobe.</div>
                <div class="2iu tI">*</div>
              </div>
            </div>
            <div class="33y tI">A small investment, great added value.</div>
            <div class="k2g">
              <div class="2yc tI t0p">Tailor bespoke design brought to your developments</div>
              <div class="tn2 tI">brings physical quality to match your service quality.</div>
              <div class="6tg tI">*Is this the best haute-couture tweak for you? We will find out.</div>
            </div>
            <Help v-if="father === 'Homepage5Scrollto'" :mother="mother" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Help from '~/components/Help.vue'
export default {
  props: ['father'],
  components: {
    Help
  },
  data() {
    return {
      mother: 'Homepage11EScrollto'
    }
  }
}
</script>
