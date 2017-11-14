<template>
  <div id="app">
      <h1>Flash-Button</h1>
      <flash-button type="success" size="large">large</flash-button>
      <flash-button type="primary" size="default">default</flash-button>
      <flash-button type="error" size="small">small</flash-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
}
</script>
<style>
#app{
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
  text-align: center;
  margin-top:120px;
  font-size: 14px;
  word-spacing: 0px;
  color:#495065
}
</style>

