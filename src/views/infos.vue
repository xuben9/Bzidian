<template>
  <div class="result">
    <div class="resNav">
      <div class="imgFontPosition">
      <img src="@/assets/images/results.png" alt=""><span>查询结果 - {{ this.$store.state.keyWords }}</span>
      <span>
          共{{this.$store.state.res.length}}条记录
      </span>
      </div>
      <droplist></droplist>
    </div>
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
  margin: 1rem 5%;
}
.result h2 {
  display: inline-block;
  margin-bottom: 0;
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
.imgFontPosition span {
  margin-right: 2rem;
}
</style>