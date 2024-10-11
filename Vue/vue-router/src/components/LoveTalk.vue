<template>

<div class="talk">
    <button @click="getLoveTalk">获取今日油价</button>
    <ul>
        <li v-for="item in talkStore.list">{{ item }}</li>
    </ul>
</div>

</template>

<script setup lang="ts">
import { provide, reactive } from 'vue';
import axios from 'axios';
import {nanoid} from 'nanoid'
import { useTalkStore } from '@/store/loveTalk';

// let list = reactive([{prov:"浙江",change_before_price:"",price:"",change:"",change_percen:""}]);

const talkStore = useTalkStore();

async function getLoveTalk() {
   talkStore.getGasPrice();
}

</script>

<style lang="css" scoped>
.talk{
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>