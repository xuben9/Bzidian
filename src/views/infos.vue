<template>
  <div class="result">
    <div class="resNav">
      <h2>查询结果</h2>
      <droplist></droplist>
    </div>
    <hr />
    <item></item>
  </div>
</template>

<script>
import item from "@/components/itemShow/item";
import droplist from "@/components/enumLists/list";

export default {
  name: "results",
  data() {
    return {};
  },
  components: {
    item,
    droplist,
  },
};
</script>

<style scoped>
.result {
  margin: 5% 20%;
}
.result h2 {
  display: inline-block;
  margin-bottom: 0;
}
.resNav {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
</style>