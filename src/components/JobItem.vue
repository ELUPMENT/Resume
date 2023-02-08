<template>
  <div class="item">
    <header class="item-hd">
      <h3 class="item-name">{{ jobForm.company }}</h3>
      <span class="item-time">{{ jobForm.time }}</span>
      <a class="btn item-more" href="" title="">{{ jobForm.tag }}</a>
    </header>
    <ol class="item-project">
      <slot></slot>
    </ol>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const props = defineProps({
  company: String,
  time: String,
  tag: String
})
let jobForm = reactive<Object>({
  company: '杭州海康威视系统技术有限公司',
  time: '2023/6-2023/3',
  tag: 'work'
})
onMounted(() => {
  let arr = Object.keys(jobForm)
  arr.forEach(item => {
    jobForm[item] = props[item]
  })
})
</script>
