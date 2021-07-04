<template>
  <div>
    <NavigationContent />
    <TheSideNav />
    <div class="content" v-if="page === 'portfolio'">
      <div class="archive">
        <article class="article">
          <nuxt />
        </article>
        <article class="article">
          <SpinnerMob
            class="show-whatspinner"
            :is="asyncComp2"
          />
        </article>
        <article class="article">
          <MartaMobMobile
            class="marta-gap-bottom"
          />
        </article>
      </div>
    </div>
    <div v-else>
      <Spinner
        v-if="page === 'index'"
        class="hide-spinner"
      />
      <Spinner
        v-else
        class="show-spinner"
        :is="asyncComp"
      />
      <Marta />
      <div v-if="page === 'index'">
        <ParallaxCardCopy class="parallaxcardcopy"></ParallaxCardCopy>
        <MyForm class="contact-form-container" />
      </div>
      <div class="content">
        <nuxt />
      </div>
    </div>
    <footer id="footer">
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import NavigationContent from '~/components/slots/NavigationContent.vue'
import TheSideNav from '~/components/TheSideNav.vue'
import AppFooter from '~/components/AppFooter.vue'
import MyForm from '~/components/MyForm.vue'

export default {
  name: 'default',
  data: () => ({
    asyncComp: '',
    asyncComp2: ''
  }),
  components: {
    NavigationContent,
    TheSideNav,
    AppFooter,
    MyForm,
    Spinner: () => import('~/components/spinner/Spinner.vue'),
    ParallaxCardCopy: () => import('~/components/ParallaxCardCopyAlt.vue'),
    Marta: () => import('~/components/marta/Marta-mb-trial.vue'),
    SpinnerMob: () => import('~/components/spinner/SpinnerMob.vue'),
    MartaMobMobile: () => import('~/components/marta/MartaMobMobile.vue')
  },
  computed: {
    page() {
      return this.$store.state.page
    }
  },
  mounted() {
    this.asyncComp = 'Spinner'
    this.asyncComp2 = 'SpinnerMob'
  }
}
</script>

<style lang="scss">
body {
  display: flex;
  min-height: 100vh;
  height: auto;
  flex-direction: column;
}

:root {
  font-family: 'WindsorEF', sans-serif;
  font-display: auto;
  /* original calc 0.859059166095426vw, 1vw is right (100% dimension Keynote) */
  font-size: calc(1em + 1.147vw);
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -moz-font-feature-settings: 'liga', 'kern';
  text-rendering: optimizelegibility;
  line-height: calc(1em + 1.147vw);
}

@font-face {
  font-family: 'WindsorEF';
  src: url('~assets/fonts/f591df76d30baaa56ec8f4fa1baa45da.eot');
  src: url('~assets/fonts/f591df76d30baaa56ec8f4fa1baa45da.eot?#iefix')
      format('embedded-opentype'),
    url('~assets/fonts/f591df76d30baaa56ec8f4fa1baa45da.woff2')
      format('woff2'),
    url('~assets/fonts/f591df76d30baaa56ec8f4fa1baa45da.woff')
      format('woff'),
    url('~assets/fonts/f591df76d30baaa56ec8f4fa1baa45da.ttf')
      format('truetype'),
    url('~assets/fonts/f591df76d30baaa56ec8f4fa1baa45da.svg#WindsorEF')
      format('svg');
}

@font-face {
  font-family: 'DIN Medium';
  src: url('~assets/fonts/39d8205ea5850c9f82199ce84cb05aca.eot');
  src: url('~assets/fonts/39d8205ea5850c9f82199ce84cb05aca.eot?#iefix')
      format('embedded-opentype'),
    url('~assets/fonts/39d8205ea5850c9f82199ce84cb05aca.woff2')
      format('woff2'),
    url('~assets/fonts/39d8205ea5850c9f82199ce84cb05aca.woff')
      format('woff'),
    url('~assets/fonts/39d8205ea5850c9f82199ce84cb05aca.ttf')
      format('truetype'),
    url('~assets/fonts/39d8205ea5850c9f82199ce84cb05aca.svg#DINMedium')
      format('svg');
}

@font-face {
  font-family: 'Bangla MN';
  src: url('~assets/fonts/3d37467c4a9c7c1188bc3e0b7aadfa0d.eot');
  src: url('~assets/fonts/3d37467c4a9c7c1188bc3e0b7aadfa0d.eot?#iefix')
      format("embedded-opentype"),
    url('~assets/fonts/3d37467c4a9c7c1188bc3e0b7aadfa0d.woff2')
      format("woff2"),
    url('~assets/fonts/3d37467c4a9c7c1188bc3e0b7aadfa0d.woff')
      format("woff"),
    url('~assets/fonts/3d37467c4a9c7c1188bc3e0b7aadfa0d.ttf')
      format("truetype"),
    url('~assets/fonts/3d37467c4a9c7c1188bc3e0b7aadfa0d.svg#BanglaMN')
      format("svg");
}

@font-face {
  font-family: 'Avenir Heavy';
  src: url('~assets/fonts/901497541657a2f24e42848bcf7fad52.eot');
  src: url('~assets/fonts/901497541657a2f24e42848bcf7fad52.eot?#iefix')
      format("embedded-opentype"),
    url('~assets/fonts/901497541657a2f24e42848bcf7fad52.woff2')
      format("woff2"),
    url('~assets/fonts/901497541657a2f24e42848bcf7fad52.woff')
      format("woff"),
    url('~assets/fonts/901497541657a2f24e42848bcf7fad52.ttf')
      format("truetype"),
    url('~assets/fonts/901497541657a2f24e42848bcf7fad52.svg#AvenirHeavy')
      format("svg");
}

@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 500;
  src: url('~assets/fonts/barlow-v4-latin-500.eot'); /* IE9 Compat Modes */
  src: local('☺'),
       url('~assets/fonts/barlow-v4-latin-500.eot?#iefix')
      format('embedded-opentype'), /* IE6-IE8 */
    url('~assets/fonts/barlow-v4-latin-500.woff2')
      format('woff2'), /* Super Modern Browsers */
    url('~assets/fonts/barlow-v4-latin-500.woff')
      format('woff'), /* Modern Browsers */
    url('~assets/fonts/barlow-v4-latin-500.ttf')
      format('truetype'), /* Safari, Android, iOS */
    url('~assets/fonts/barlow-v4-latin-500.svg#Barlow')
      format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Proza';
  src: url('~assets/fonts/c0f065a5d0ed35222f27aa1be60bd971.eot');
  src: url('~assets/fonts/c0f065a5d0ed35222f27aa1be60bd971.eot?#iefix')
      format("embedded-opentype"),
    url('~assets/fonts/c0f065a5d0ed35222f27aa1be60bd971.woff2')
      format("woff2"),
    url('~assets/fonts/c0f065a5d0ed35222f27aa1be60bd971.woff')
      format("woff"),
    url('~assets/fonts/c0f065a5d0ed35222f27aa1be60bd971.ttf')
      format("truetype"),
    url('~assets/fonts/c0f065a5d0ed35222f27aa1be60bd971.svg#Proza')
      format("svg");
}

@font-face {
  font-family: 'AtkinsonHyperlegibleRegular';
  src: url('~assets/fonts/Atkinson-Hyperlegible-Regular-102.eot');
  src: url('~assets/fonts/Atkinson-Hyperlegible-Regular-102.eot?#iefix')
      format('embedded-opentype'),
    url('~assets/fonts/Atkinson-Hyperlegible-Regular-102a.woff2')
      format('woff2'),
    url('~assets/fonts/Atkinson-Hyperlegible-Regular-102.woff')
      format('woff'),
    url('~assets/fonts/Atkinson-Hyperlegible-Regular-102.ttf')
      format('truetype'),
    url('~assets/fonts/Atkinson-Hyperlegible-Regular-102.svg#AtkinsonHyperlegibleRegular')
      format('svg');
}

@font-face {
  font-family: 'AtkinsonHyperlegibleBold';
  src: url('~assets/fonts/Atkinson-Hyperlegible-Bold-102.eot');
  src: url('~assets/fonts/Atkinson-Hyperlegible-Bold-102.eot?#iefix')
      format('embedded-opentype'),
    url('~assets/fonts/Atkinson-Hyperlegible-Bold-102a.woff2')
      format('woff2'),
    url('~assets/fonts/Atkinson-Hyperlegible-Bold-102.woff')
      format('woff'),
    url('~assets/fonts/Atkinson-Hyperlegible-Bold-102.ttf')
      format('truetype'),
    url('~assets/fonts/Atkinson-Hyperlegible-Bold-102.svg#AtkinsonHyperlegibleBold')
      format('svg');
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  pointer-events: all;
}

#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
}

/* from layout-other */
body-content {
  flex: 1;
}

.contact-form-container {
  width: inherit;
  z-index: 999;
}

@media only screen and (min-width: 525px) {
  .container,
  .container-index {
    width: inherit;
    height: inherit;
    background: blue;
  }

  .container:hover {
    background: yellow;
    transition: all 0.3s ease-out-in;
    text-shadow: none !important;
  }
}

.parallaxcardcopy {
  opacity: 1;
  visibility: visible;
  margin-right: 56px !important;
}

.hide-spinner {
  display: none !important;
}

.show-spinner {
  position: absolute;
  top: 78vh;
}

/* from layout-portfolio */
@media only screen and (max-width: 525px) {
  .child {
    width: inherit;
    height: inherit;
    background: blue;
  }
}

.show-whatspinner {
  /*margin-top: -1em;*/ /* was calc(-1 * ((3em + 20px) / 2)) *//*was -2em*/
  margin-top: calc(4.648094091903712vw + (1em - 4.648094091903712vw));
  margin-bottom: calc(9.296188183807424vw + (2em - 9.296188183807424vw));
  visibility: visible;
  display: block;
}

/* experimental feature: 375px limit in layout */
@media only screen and (max-device-width: 290px) and (orientation: portrait),
only screen and (max-width: 368px),
only screen and (max-width: 375px) and (max-resolution: 2.88dppx), // limit until 375px excluding iPhone 12 mini
only screen and (max-width: 375px) and (-webkit-max-device-pixel-ratio: 2.88),
only screen and (max-width: 460px) and (max-resolution: 1.6687500000dppx), // limit until 460px devices with max-resolution: 1.6687500000dppx (especially galaxy note II)
only screen and (max-width: 460px) and (-webkit-max-device-pixel-ratio: 1.6687500000),
only screen and (max-device-width: 480px) and (max-resolution: 2dppx) and (orientation: landscape), // limit anything below iPhone 4s in landscape
only screen and (max-device-width: 480px) and (-webkit-max-device-pixel-ratio: 2) and (orientation: landscape) {
  .show-whatspinner {
    margin-bottom: 0;
    visibility: hidden;
    display: none;
    height: 0;
  }
}

.archive {
  display: grid;
  grid-template-columns: repeat(1, minmax(280px, 2732px));
  justify-content: center;
  grid-gap: 1em;
  grid-auto-flow: dense;
}

.marta-gap-bottom {
  margin-bottom: 2em !important;
}
</style>
