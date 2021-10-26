<template>
  <Editor v-model:value="code" :scene="type" theme="3024-day"></Editor>
</template>

<script>

import {defineComponent, reactive, toRefs} from 'vue'
import Editor from "../components/CodeEditor/Editor";

export default defineComponent({
  components: {
    Editor,
  },
  props: {
    type: {
      type: String,
      default: 'add'
    }
  },
  setup(props) {
    const data = reactive({
      code: 'let a = 123'
    })
    return {
      ...toRefs(data),
      ...toRefs(props)
    }
  }
})
</script>
