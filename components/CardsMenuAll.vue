<template>
  <div>
    <div class="xr6">
      <CardsMenu
          v-for="article in activeArticleList"
          v-bind="article"
          :key="article.id"
      />
    </div>
    <div class="xyu" style="display: none">
      <div class="day 59n">
        <div>
          <div class="kkd 8cs">AaM
            <div class="i37 tI">Interact with Art as Marketing</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CardsMenuAll',
  components: {
    CardsMenu: () => import('~/components/CardsMenu.vue')
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
.xr6 {
  overflow: hidden;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  width: inherit;
  height: inherit;
  border-radius: 5px;
}

@media only screen and (min-width: 525px) {
  .xr6 {
    width: inherit;
    height: inherit;
    background: blue;
  }

  .xr6:hover {
    background: yellow;
    transition: all 0.3s ease-out-in;
    text-shadow: none !important;
  }
}

.xyu {
  position: absolute;
  padding: 0 25px 0 25px;
}

.59n {
  font-size: 10.08px !important;
  margin: 0 auto;
  max-height: 50px 1vw;
  text-align: left;
}

.8cs  {
  padding-top: 1vh !important;
  min-height: 0vh !important;
}
</style>
