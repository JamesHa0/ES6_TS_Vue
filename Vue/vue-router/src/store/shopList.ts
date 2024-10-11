import { defineStore } from "pinia";
import { reactive } from "vue";

export const useShopList = defineStore('shopList', () => {
    let list = reactive([{
        id: 0,
        name: "智能手表",
        quantity: 10,
        price: 1299,
        from: "Japan"
    },
    {
        id: 1,
        name: "耳机",
        quantity: 35,
        price: 299,
        from: "China"
    },
    {
        id: 2,
        name: "电动牙刷",
        quantity: 25,
        price: 199,
        from: "USA"
    },
    {
        id: 3,
        name: "双肩背包",
        quantity: 40,
        price: 399,
        from: "China"
    },
    {
        id: 4,
        name: "跑步机",
        quantity: 5,
        price: 2999,
        from: "China"
    }]);

    const loadFromLocalStorage = () => {
        const storedList = localStorage.getItem('shopList');
        if (storedList) {
            list = reactive(JSON.parse(storedList));
        }
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('shopList', JSON.stringify(list));
    };

    const addItem = (newItem: { id: number; name: string; quantity: number; price: number; from: string; }) => {
        list.push(newItem);
        saveToLocalStorage();
    };

    const removeItem = (index: number) => {
        list.splice(index, 1);
        saveToLocalStorage();
    };

    loadFromLocalStorage();

    return { list, addItem, removeItem };
})