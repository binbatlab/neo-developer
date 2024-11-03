<script setup lang="ts">

const props = defineProps<{
  url: String,
  title: String,
  describe: String,
}>()

</script>

<template>
  <a class="link-card" target="_blank" :href="url">
    <div class="title">
      <div>{{ title }}</div>
    </div>
    <div class="description">
      {{ describe }}
    </div>
    <div class="url">
      {{ url }}
    </div>
  </a>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
}

.link-card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: block;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  border-radius: .5rem;
  background-color: var(--vp-c-bg-soft);
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border: 2px solid var(--vp-c-bg-soft);
  transition: color .5s,background-color .5s;
  text-decoration: none;

  border: 2px solid var(--vp-c-bg-soft);
  transition:
    color 0.5s,
    background-color 0.5s;
  text-decoration: none;
}

.link-card:hover {
  border-color: var(--vp-c-brand-soft);
  transition: border-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.title {
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  display: flex;
  color: var(--vp-c-brand-1);
}

.description {
  font-size: 14px;
  margin-bottom: 0;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
}

.url {
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>
