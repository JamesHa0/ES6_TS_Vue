import { defineStore } from "pinia";


export interface ICartStore {
    name: string,
    price: number,
    count: number
}

export const useCartStore = defineStore('cart', {
    actions: {
        changeCart({ name, price, count }: ICartStore): void {
            this.name = name;
            this.count = count
            this.price = price
        },
        plusCount() {
            this.count++
        },

        subCount() {
            if (this.count == 1) {
                return
            }
            this.count--
        }
    },
    //数据状态
    state: () => {
        return {
            name: '鲁花压榨葵花仁油5L',
            price: 19.8,
            count: 1
        }
    }
})
