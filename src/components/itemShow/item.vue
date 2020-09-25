<template>
  <div class="item">
    <h2>{{ this.$store.state.keyWords }}</h2>

    <!-- <ul>
            <li v-for="(item,index) in this.$store.state.res" :key="index">{{index + 1}}{{item}}</li>
            <h2 style="display: inline-block">数据库查询结果</h2>
        </ul> -->

    <el-table
      :data="this.$store.state.res.slice(begin, end)"
      border
      style="width: 100%"
    >
      <el-table-column type="index" :index="indexMethod" width="50">
      </el-table-column>
      <el-table-column prop="CODE" label="编码" width="180"> </el-table-column>
      <el-table-column prop="MEA_NAME" label="标准字典" width="180">
      </el-table-column>
      <el-table-column prop="NOTE" label="中文对照"> </el-table-column>
    </el-table>

    <el-pagination
      background
      :current-page.sync="currentPage"
      :page-size="pageSize"
      hide-on-single-page:
      true
      layout="prev, pager, next"
      :total="this.$store.state.res.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    begin() {
      return (this.currentPage - 1) * this.pageSize;
    },
    end() {
      return this.currentPage * this.pageSize;
    },
  },
  methods: {
    indexMethod(index) {
      return index + this.pageSize * (this.currentPage - 1) + 1;
    },
  },
};
</script>

<style scoped>
</style>