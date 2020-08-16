<template>
  <div>
    <el-scrollbar>
      <el-menu :default-active="$route.path" unique-opened>
        <submenu v-for="route in routes" :key="route.path" :route="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import submenu from "./submenu";
export default {
  components: { submenu },
  data() {
    return {
      routes: []
    };
  }
};
</script>
