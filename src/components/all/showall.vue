<template>
  <div class="result">
    <div class="resNav">
      <h2>查询结果</h2>
      <droplist></droplist>
    </div>
    <hr />
    <div>
      <h2>所有字典</h2>
      <el-table
        :data="this.$store.state.dictionary.slice(begin, end)"
        border
        style="width: 100%"
      >
        <el-table-column type="index" :index="indexMethod" width="50">
        </el-table-column>
        <el-table-column prop="CODE" label="编码" width="180">
        </el-table-column>
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
        :total="this.$store.state.dictionary.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import droplist from "@/components/enumLists/list";

export default {
  name: "all",
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
  components: {
    droplist,
  },
};
</script>

<style scoped>
.result {
  margin: 5% 20%;
}
.resNav h2 {
  display: inline-block;
  margin-bottom: 0;
}
.resNav {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
</style>