import { defineStore } from 'pinia'
import { computed, ref } from 'vue';



//组合式写法：
export const useCountStore = defineStore('count', () => {
    let sum = ref(0);
    let myclass = ref("22级java移动开发2班");
    let address = ref("哈学院2702");

    function increment(value: number) {
        console.log("increment被调用了", value);
        if (sum.value < 10) {
            //修改数据
            sum.value += value;
        }
    };

    function minus(value: number) {
        sum.value -= value;
    }


    return { sum, myclass, address, increment, minus };

})





// export const useCountStore = defineStore('count', {

//     //actions里面放置的是一个一个的方法用于响应组件中的“动作”
//     actions: {
//         increment(value: number) {
//             console.log("increment被调用了", value);
//             if (this.sum < 10) {
//                 //修改数据
//                 this.sum += value;
//             }
//         },
//         minus(value: number) {
//             this.sum -= value;
//         }
//     },

//     // state 真正存储数据的地方
//     state() {
//         return {
//             sum: 0,
//             myclass: "22级java移动开发2班",
//             address: "哈学院2702"
//         }
//     },

//     getters: {
//         bigSum: state => state.sum * 10,
//         upperClass(): string {
//             return this.myclass.toUpperCase();
//         }
//     }



// })