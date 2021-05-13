<template>
  <div id="app">
    <MonacoEditor
      v-model="val"
      width="800"
      height="500"
      theme="vs-dark"
      language="javascript"
    ></MonacoEditor>
  </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue'

export default {
  name: 'App',
  components: {
    MonacoEditor
  },
  data() {
    return {
      val: 'const x = 1'
    }
  }
}
</script>