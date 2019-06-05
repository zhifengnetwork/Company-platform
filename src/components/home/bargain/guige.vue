<template>
  <div>
    <div v-for="(option,index) in options" :key="index">
      <p>{{option.name}}</p>
      <div class="row" v-for="(item, ind) in option.items" @click="select(index, ind)" :key="ind">
        <input type="radio" :name="index" :id="item.id" value>
        <!-- 关键在于name这里设为index，让每一行选项的name一样，属性id和label的for属性一致 -->
        <label :for="item.id">{{item.msg}}</label>
      </div>
    </div>
    <span>{{this.id}}</span>
  </div>
</template>

<script>
export default {
  name: "guige",
  components: {},
  data() {
    return {
      id: ["", "", ""],
      options: [
        {
          name: "颜色",  
          items: [
            {
              msg: "绿色",
              id: "11"
            },
            {
              msg: "红色",
              id: "12"
            }
          ]
         
        },
        {
          name: "型号",  
          items: [
            {
              msg: "XXX",
              id: "13"
            },
            {
              msg: "L",
              id: "14"
            },
            {
              msg: "XXL",
              id: "15"
            }
          ]
         
        },
        {
          name: "版本",  
          items: [
            {
              msg: "32G",
              id: "16"
            },
            {
              msg: "8G",
              id: "17"
            },
            {
              msg: "4G",
              id: "18"
            }
          ],
         
        }
      ]
    };
  },
  methods: {
    select(index, ind) {
      var message = this.options[index].items[ind].msg; //获取选中的id号
      this.id.splice(index, 1, message); //替换数组id[]中对应的元素，获得所有选中的id
      console.log(this.id);
    }
  }
};
</script>

<style lang="stylus" scoped>
input {
  display: none;
}

input[type='radio']+label {
  /* 默认label的样式 */
  /* content: "\a0"; */
  display: inline-block;
  padding: 10px 20px;
  background-color: #666;
  margin-left: 20px;
  color: #fff;
  border-radius: 10px;
}

input[type='radio']:checked+label {
  /* 当点击label的时候背景颜色发生改变 */
  background-color: aqua;
}

.row {
  display: inline-block;
}
</style>
