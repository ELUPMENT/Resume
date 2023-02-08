<template>
  <div class="content-bd">
    <div class="content-left">
      <section class="practice">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">Working experience</h2>
          <span class="section-title-r"></span>
        </header>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import JobItem from "./JobItem"
const openImg = (e) => {
  const { target } = e
  if (target.currentSrc) {
    window.open(target.currentSrc)
  }
}
</script>
