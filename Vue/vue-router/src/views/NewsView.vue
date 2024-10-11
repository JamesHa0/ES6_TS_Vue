<template>
    <div class="news">
        <div>
            <h1>News====>></h1>
            <ul>
                <li v-for="news in newslist" :key="news.id">
                    <!-- <RouterLink to="/news/detail?a=1&b=2&content=100">{{ news.title }}</RouterLink> -->
                    <!-- <RouterLink :to="{
                        name:'newsdetail',
                        params:{
                            id:news.id,
                            title:news.title,
                            content:news.content
                        }
                    }">
                        {{ news.title }}
                    </RouterLink> -->
                    <button @click="showDetail(news)">查看</button>
                    {{ news.title }}
                </li>
            </ul>
        </div>
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { reactive } from 'vue';

let newslist = reactive([
    {id:"news01",title:'nt1',content:'n1-content'},
    {id:"news02",title:'nt2',content:'n2-content'},
    {id:"news03",title:'nt3',content:'n3-content'},
])


function showDetail(news: any) {
    router.push/*replace*/(
        {
            name:'newsdetail',
                params:{
                    id:news.id,
                    title:news.title,
                    content:news.content
                }
        }
    )
}



</script>

<style lang="css" scoped>
.news{
    padding: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul{
    margin-top: 0 20px;
    list-style: none;
    padding-left: 10px;
}

.news li>a{
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #649664;
    text-shadow: 0 0 1px rgb(0,84,0);
}

.news-content{
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}
</style>