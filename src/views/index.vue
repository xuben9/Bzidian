<template>
  <div>
    <search-panel @valuein="checkinput" @showAll="showall"></search-panel>
    <hr>
    <results v-if="hasInput"></results>
    <all v-if="showAllTag"></all>
  </div>
</template>

<script>
import searchPanel from "@/components/searchBox/SearchPanel";
import item from "@/components/itemShow/item";
import droplist from "@/components/enumLists/list";
import results from "@/views/infos";
import all from "@/components/all/showall";

export default {
  name: "HomePage",
  data() {
    return {
      hasInput: false,
      showAllTag: true,
      keyWordsIn: "",
    };
  },
  methods: {
    checkinput() {
      (this.hasInput = true), (this.showAllTag = false);
    },
    showall() {
      (this.hasInput = false), (this.showAllTag = true);
    },
  },
  components: {
    searchPanel,
    item,
    droplist,
    results,
    all,
  },
};
</script>