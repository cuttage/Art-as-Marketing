<template>
  <div>
    <div class="container-card">
      <DepthCardMenu
          v-for="article in activeArticleList"
          v-bind="article"
          :key="article.id"
      />
    </div>
    <div class="container-opt" style="display: none">
      <div class="day container-d1-opt">
        <div>
          <div class="title-d1 title-d1-opt">AaM
            <div class="subtitle-d1 tI">Interact with Art as Marketing</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DepthCardAll',
  components: {
    DepthCardMenu: () => import('~/components/DepthCardMenu.vue')
  },
  data() {
    var articleList = [
      {
        title: 'Music',
        description: 'Browse Music keywords for: Business, Employer.',
        image: require('~/assets/img/image1.jpg?original&format=webp'),
        loading: require('~/assets/img/image1.jpg?lqip'),
        active: true
      },
      {
        title: 'Tailoring',
        description: 'Browse Tailoring keywords for: Business, Employer, Land Developer.',
        image: require('~/assets/img/image1.jpg?original&format=webp'),
        loading: require('~/assets/img/image1.jpg?lqip'),
        active: true
      },
      {
        title: 'Design',
        description: 'Looking for Agency? Browse all.',
        image: require('~/assets/img/image1.jpg?original&format=webp'),
        loading: require('~/assets/img/image1.jpg?lqip'),
        active: true
      },
      {
        title: 'Quality Products',
        description: 'Browse Quality Products keywords for: FinTech, Land Developer.',
        image: require('~/assets/img/image1.jpg?original&format=webp'),
        loading: require('~/assets/img/image1.jpg?lqip'),
        active: true
      }
    ];
    return {
      articleList: articleList
    }
  },
  computed: {
    ...mapState({
      rtmO: 'rtmO'
    }),
    activeArticleList: function() {
      if (this.rtmO === true) {
        return this.articleList.filter(function(u) {
          return u.active
        })
      } else if (this.rtmO === false) {
        return this.articleList.filter(function(u) {
          return u.none
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container-card {
  overflow: hidden;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  width: inherit;
  height: inherit;
  border-radius: 5px;
}

@media only screen and (min-width: 525px) {
  .container-card {
    width: inherit;
    height: inherit;
    background: blue;
  }

  .container-card:hover {
    background: yellow;
    transition: all 0.3s ease-out-in;
    text-shadow: none !important;
  }
}

.container-opt {
  position: absolute;
  padding: 0 25px 0 25px;
}

.container-d1-opt {
  font-size: 10.08px !important;
  margin: 0 auto;
  max-height: 50px 1vw;
  text-align: left;
}

.title-d1-opt  {
  padding-top: 1vh !important;
  min-height: 0vh !important;
}
</style>
