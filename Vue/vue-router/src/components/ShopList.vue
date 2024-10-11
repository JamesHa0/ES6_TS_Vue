<template>
<div>
    <h1>商品列表</h1>
    <table>
      <thead>
        <tr>
          <th>商品编号</th>
          <th>商品名称</th>
          <th>商品数量</th>
          <th>商品价格</th>
          <th>商品产地</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in list" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.quantity}}</td>
            <td>{{item.price}}</td>
            <td>{{item.from}}</td>
            <td><button @click="remove(index)">删除</button></td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script setup lang="ts">

import { useShopList } from '@/store/shopList';
import { storeToRefs } from 'pinia';

const shopList = useShopList();
let {list} = storeToRefs(shopList);

function remove(index: number){
    shopList.removeItem(index);
}

</script>

<style lang="css" scoped>

</style>