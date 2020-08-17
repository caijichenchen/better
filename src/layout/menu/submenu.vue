<template>
  <div v-if="!route.hidden">
    <el-submenu-item v-if="hasOneShowingChild(route.child, route)">
      <router-link :index="resolvePath(route.path)" :to="resolvePath(route.path)"></router-link>
    </el-submenu-item>
    <div v-else-if="route.httpHref"></div>
    <div v-else>
      <submenu v-for="item in route.child" :key="item.path" :route="item" />
    </div>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'Submenu',
  props: {
    route: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      onlyHasOneChild: null
    };
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(child => {
        if (child.hidden) {
          return false
        } else {
          return true
        }
      })
      if(showingChildren.length === 1){
        this.onlyHasOneChild = showingChildren[0]
        return true
      }
      if(showingChildren.length === 0){
        this.onlyHasOneChild = parent
        return true
      }
      return false
    },
    resolvePath(path) {
      return path.join(__dirname, path)
    }
  }
};
</script>
