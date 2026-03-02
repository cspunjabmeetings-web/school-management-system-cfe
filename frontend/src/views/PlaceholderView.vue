<template>
  <div class="p-4">
    <h2>{{ title || 'Page' }} (placeholder)</h2>
    <p>This view has not been implemented yet.</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: { type: String, default: '' }
});
</script>
