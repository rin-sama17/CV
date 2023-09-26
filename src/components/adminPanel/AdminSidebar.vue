<template>
  <div class="hidden sidebar w-60 md:flex items-end">
    <AdminSidebarItems />
  </div>
  <div>
    <SideBarDrawer><AdminSidebarItems /></SideBarDrawer>
  </div>
</template>
<script setup>
import SideBarDrawer from '../sidebar/SideBarDrawer.vue'
import AdminSidebarItems from './components/AdminSidebarItems.vue'
</script>
