<template>
  <div v-if="!route.hidden">
    <el-submenu-item></el-submenu-item>
  </div>
</template>

<script>
export default {
  props: {
    route: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(child => {
        if (child.hidden) {
          return false;
        } else {
        }
      });
    }
  }
};
</script>
