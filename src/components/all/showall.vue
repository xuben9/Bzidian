<template>
  <div class="result">
    <div class="resNav">
      <div class="imgFontPosition">
      <img src="@/assets/images/results.png" alt=""><span>查询结果 - 所有字典</span>
      </div>
      <droplist></droplist>
    </div>
    <div>
      <el-table
        :data="this.$store.state.dictionary.slice(begin, end)"
        border
        style="width: 100%"
      >
        <el-table-column align="center" label="序号" type="index" :index="indexMethod" width="50">
        </el-table-column>
        <el-table-column align="center" prop="CODE" label="编码" min-width="120">
        </el-table-column>
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
        :total="this.$store.state.dictionary.length"
      >
      </el-pagination>
      </div>
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
  margin: 1rem 5%;
}
.resNav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.imgFontPosition {
  display: flex;
  align-items: center;
}
.imgFontPosition img {
  height: 1rem;
  margin-right: 0.3rem;
}
.pagePosition {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-table_1_column_1 {
  background-color: #4e4e4e;
}
</style>