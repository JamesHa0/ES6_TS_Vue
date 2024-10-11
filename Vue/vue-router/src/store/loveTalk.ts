import axios from 'axios';
import { defineStore } from 'pinia'


export const useTalkStore = defineStore('talk', {


    actions: {
        async getGasPrice() {
            let res = await axios.get("https://route.showapi.com/138-49?appKey=bA8290841EEf4573A4518d52B98bEED2&prov=浙江")

            let obj = res.data.showapi_res_body.p92

            this.list.push({ prov: "浙江", ...obj });
        }
    },

    // state 真正存储数据的地方
    state() {
        return {
            list: [
                { prov: "浙江", change_before_price: "", price: "", change: "", change_percen: "" },
                { prov: "黑龙江", change_before_price: "", price: "", change: "", change_percen: "" }
            ]
        }
    }
})