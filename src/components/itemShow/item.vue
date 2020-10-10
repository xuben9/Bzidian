<template>
  <div class="item">
    <!-- <ul>
            <li v-for="(item,index) in this.$store.state.res" :key="index">{{index + 1}}{{item}}</li>
            <h2 style="display: inline-block">数据库查询结果</h2>
        </ul> -->

    <el-table
      :data="this.$store.state.res.slice(begin, end)"
      border
      style="width: 100%"
    >
      <el-table-column align="center" type="index" label="序号" :index="indexMethod" width="50">
      </el-table-column>
      <el-table-column align="center" prop="CODE" label="编码" min-width="120"> </el-table-column>
      <el-table-column align="center" prop="MEA_NAME" label="标准字典" min-width="180">
      </el-table-column>
      <el-table-column align="center" prop="NOTE" label="中文对照" min-width="180"> </el-table-column>
    </el-table>

    <div class="pagePosition">
    <div>每页显示
    <input type="number" min="1" max="12" value="10" @change="changePageSize()">条
    </div>
    <el-pagination
      background
      :current-page.sync="currentPage"
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="this.$store.state.res.length"
    >
    </el-pagination>
    </div>
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
    changePageSize() {
      this.pageSize = event.target.value * 1;
    }
  },
};
</script>

<style scoped>
.pagePosition {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
}
.pagePosition input {
  width: 2rem;
}
</style>