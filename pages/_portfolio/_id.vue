<template>
  <component :is="chosen.name" />
</template>

<script>
import office from '~/components/logomob/office.vue';
import shop from '~/components/logomob/shop.vue';
import project from '~/components/logomob/project.vue';
import innovation from '~/components/logomob/innovation.vue';
import reward from '~/components/logomob/reward.vue';
import boost from '~/components/logomob/boost.vue';
export default {
  data() {
    return {
      components: [
        {
          id: 'design',
          name: 'office'
        },
        {
          id: 'music',
          name: 'shop'
        },
        {
          id: 'project',
          name: 'project'
        },
        {
          id: 'quality',
          name: 'boost'
        },
        {
          id: 'tailoring',
          name: 'reward'
        }
      ]
    }
  },
  components: {
    office,
    shop,
    project,
    innovation,
    reward,
    boost
  },
  computed: {
    chosen() {
      const listHas = this.components.some(c => c.id == this.$route.params.id);

      if (listHas) {
        return this.components.find(c => c.id == this.$route.params.id)
      } else {
        return this.components.find(c => c.id == 'project')
      }
    }
  }
}
</script>
