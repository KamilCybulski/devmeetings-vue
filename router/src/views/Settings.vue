<template>
  <div class="settings">
    <h1>This is a settings page</h1>
  </div>
</template>

<script>
import isAdmin from '../guards/is_admin';

export default {
  name: 'settings',
  beforeRouteEnter: isAdmin,
};
</script>
