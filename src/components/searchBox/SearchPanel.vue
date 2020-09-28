<template>
  <div class="nav">
    <span class="font">标准量测字典</span>
    <div class="in-layout">
      <input
        class="input"
        type="text"
        placeholder="在此输入……"
        v-model="keyWords"
        @keyup.enter="pushInput"
      />
        <!-- <input
          type="submit"
          value="搜索"
          id="se"
          class="search"
          @click="pushInput"
        /> -->
        <img 
        src="@/assets/images/search.png" 
        class="search" 
        @click="pushInput" 
        alt="">
    </div>
    <button class="btn" @click="showAll">查看所有</button>
  </div>
</template>

<script>
export default {
  name: "searchPanel",
  data() {
    return {
      keyWords: "",
    };
  },
  methods: {
    pushInput() {
      const that = this;
      if (
        this.keyWords != null &&
        this.keyWords.split(" ").join("").length != 0
      ) {
        this.$emit("valuein");
        this.$store.commit("getKeyWords", this.keyWords);
        this.$store.commit('showResults',this.keyWords)

        this.$axios
          .post("/queryDictionaryInfo/" + that.keyWords)
          .then((res) => {
            this.$store.commit("getResults", res.data);
          })
          .catch(function (err) {
            console.log("failed");
            console.log(err);
          });
      }
    },
    showAll() {
      this.$emit("showAll");
      this.$axios
        .get("/queryDictionaryInfo/null")
        .then((res) => {
          this.$store.commit("getDictionary", res.data);
        })
        .catch(function (err) {
          console.log("failed");
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 5%;
}
.in-layout {
  display: flex;
  align-items: center;
  justify-content: center;
}
.in-layout input {
  outline: none;
}
.input {
  box-sizing: border-box;
  height: 1.5rem;
  width: 60%;
  box-shadow: none;
  padding: 2px 2px;
  border-radius: 5px 0 0 5px;
  border: 2px solid #c4c7ce;
}
.input:focus {
  border-color: #2c8dda;
}
.search {
  box-sizing: border-box;
  height: 1.5rem;
  padding: 5px 5px;
  box-shadow: none;
  border-radius: 0 5px 5px 0;
  background-color:#2c8dda;
  border: none;
  cursor: pointer;
}
.search:hover {
  background-color:#1e81d1;
}
.btn {
  cursor: pointer;
  color: white;
  background-color: #3cbd84;
  border: none;
}
.btn:hover {
  background-color:#32b67b;
}
</style>