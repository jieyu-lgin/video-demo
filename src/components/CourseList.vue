<template lang="html">
  <li class="courses-list">
    <router-link to="/lessonDetail"  class="courses-list-link">  <!--  这个是用来跳转页面的，可以理解为a标签 -->
      <div class="courses-list-pic">
          <img :src="img" alt="">
      </div>
      <div class="courses-list-desc">
        <p class="courses-list-name">{{ title }}</p>
        <p class="courses-list-price">{{ price|dTofixed|dCurrency }}</p>  <!-- 这里用到了过滤器货币形式和保留两位小数 -->
      </div>
    </router-link>
  </li>
</template>
<script>
export default {
  props: ['price', 'title', 'img']
  //  props是子组件获取父组件数据用的
}
</script>

<style lang="css" scoped>
  .courses-list {
    width: 50%;
    float: left;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
  }
  .courses-list:nth-of-type(odd) {
    border-right: 0.15rem solid #ccc;
  }
  .courses-list:nth-of-type(even) {
    border-left: 0.15rem solid #ccc;
  }
  .courses-list-link {
    display: block;
    padding: 0.5rem 0;
    margin: 0 0.3rem;
    text-align: center;
    background-color: #fff;
  }
  .courses-list:nth-of-type(even) .courses-list-link{
    margin-left: 0;
  }
  .courses-list:nth-of-type(odd) .courses-list-link{
    margin-right: 0;
  }
  .courses-list-pic {
    padding: 0.5rem;
  }
  .courses-list-pic > img {
    width: auto;
    height: 4rem;
  }
  .courses-list-desc {
    padding: 0 0.5rem;
  }
  .courses-list-desc:after {
    display: block;
    content: '';
    clear: both;
  }
  .courses-list-name,.courses-list-price {
    width: 50%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
    color: #333;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .courses-list-price {
    color: #ff8000;
    float: right;
  }
</style>
