<!-- 1 定义组件模版 --> 
<template>
    <div class="goodsApp">
        进货信息
        <fieldset>
            <legend>商品名称:</legend>

            {{ cartStore.name }}
        </fieldset>

        <fieldset>
            <legend>商品单价:</legend>

            <input type="text" v-model="cartStore.price" />
        </fieldset>

        <fieldset>
            <legend>数量:</legend>

            <button type="button" class="increament" @click="increament(1)">+</button>


            <input type="text" v-model="cartStore.count" count />

            <button type="button" class="increament" @click="increament(-1)">-</button>

            <button type="button" class="increament" @click="patch()">patch补丁</button>

            <button type="button" class="increament" @click="useAction()">使用action</button>

        </fieldset>

        <fieldset>
            <legend>商品总价:</legend>

            {{ amount }}
        </fieldset>

    </div>

</template> 

<!-- 2 定义组件逻辑 -->
<script setup lang="ts" name="PiniaDemo1">
import { computed, ref } from 'vue';
import { useCartStore } from "@/store/cart";
let cartStore = useCartStore();

console.log("cartStore ", cartStore)


//计算属性
let amount = computed(() => {
    return (cartStore.price * cartStore.count).toFixed(2)
})


function increament(num: number) {
    cartStore.count += num
}

//批量更新
function patch() {

    // cartStore.$patch(state => state.name = 'newName')

    cartStore.$patch((state) => {
        state.name = '[中华特色]高邮馆 高邮咸鸭蛋100克10只简装'
        state.price = 100
        state.count = 5
    })

    // cartStore.$patch({
    //     name: '[中华特色]高邮馆 高邮咸鸭蛋50克10只简装',
    //     price: 100,
    //     count: 5
    // })
}


function useAction() {
    // cartStore.changeCart({
    //     name: '[中华特色]高邮馆 高邮咸鸭蛋50克10只简装',
    //     price: 100,
    //     count: 5
    // })

    // cartStore.plusCount()

    //通用的逻辑 逻辑复用
    cartStore.subCount()
}

</script> 
 
<!-- 3 定义样式 -->
<style scoped> .goodsApp {
     width: 500px;
 }


 input[count] {
     width: 40px;
     text-align: center;
 }

 .increament {
     margin: 0 3px;
 }
</style> 