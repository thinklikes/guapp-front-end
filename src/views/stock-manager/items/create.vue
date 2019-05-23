<template>
  <div class="app-container">
    create
    <el-button
      size="mini"
      @click="edit(scope.$index, scope.row)">Edit</el-button>
    <el-button
      size="mini"
      type="danger"
      @click="remove(scope.$index, scope.row)">Delete</el-button>
  </div>
</template>

<script>
// import Driver from 'driver.js' // import driver.js
// import 'driver.js/dist/driver.min.css' // import driver.js css
// import steps from './steps'
//
// export default {
//   name: 'Guide',
//   data() {
//     return {
//       driver: null
//     }
//   },
//   mounted() {
//     this.driver = new Driver()
//   },
//   methods: {
//     guide() {
//       this.driver.defineSteps(steps)
//       this.driver.start()
//     }
//   }
// }
</script>
