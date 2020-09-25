<template>
  <div class="dropdown" style="float: right">
    <button class="dropbtn">下载</button>
    <div class="dropdown-content">
      <a href="#" @click="exportPartExcel">导出当前结果</a>
      <a href="#" @click="exportFullExcel">导出完整字典</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "droplist",
  data() {
    return {
      addressFull: "",
      addressPart: "",
    };
  },
  methods: {
    exportPartExcel() {
      const that = this;
      this.$axios
        .get("/dcZdhcdExcel/" + that.$store.state.keyWords)
        .then((res) => {
          this.addressPart = res.data.value;
          return res.data.value;
        })
        .then((res) => {
          this.$axios({
            url: "/downloadZdhcdExcel?defectType=1&filePath=" + res,
            method: "post",
            responseType: "blob", // 表明返回服务器返回的数据类型
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              //接口参数
            },
          })
            .then((res) => {
              //创建一个隐藏的a连接，
              const link = document.createElement("a");
              let blob = new Blob([res.data], {
                type: "application/vnd.ms-excel",
              });
              link.style.display = "none";
              //设置连接
              link.href = URL.createObjectURL(blob);
              link.download = "部分字典-" + that.$store.state.keyWords;
              document.body.appendChild(link);
              //模拟点击事件
              link.click();
            })
            .catch((err) => {
              console.log(err);
            });
        });
    },

    exportFullExcel() {
      const that = this;
      this.$axios
        .get("/dcZdhcdExcel/null")
        .then((res) => {
          this.addressFull = res.data.value;
          return res.data.value;
        })
        .then((res) => {
          console.log(res);
          this.$axios({
            url: "/downloadZdhcdExcel?defectType=1&filePath=" + res,
            method: "post",
            responseType: "blob", // 表明返回服务器返回的数据类型
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              //接口参数
            },
          })
            .then((res) => {
              //创建一个隐藏的a连接，
              const link = document.createElement("a");
              let blob = new Blob([res.data], {
                type: "application/vnd.ms-excel",
              });
              link.style.display = "none";
              //设置连接
              link.href = URL.createObjectURL(blob);
              link.download = "完整字典";
              document.body.appendChild(link);
              //模拟点击事件
              link.click();
            })
            .catch((err) => {
              console.log(err);
            });
        });
    },
  },
};
</script>

<style scoped>
.dropbtn {
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>