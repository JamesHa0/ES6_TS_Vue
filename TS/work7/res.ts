/**
 *
 * 在前后端分离项目中会使用ajax 请求后端接口并返回数据，为了兼容需要定义一个通用的结果类型如
 *      1） 根据用户ID查询一个用户的信息，返回json结果如下
 *        {
 *          code:200,
 *          msg:'',
 *          data:{
 *              id:1,
 *              username:'admin',
 *              nickname:'超级管理员'
 *          }
 *        }
 *
 *      2） 根据用户ID查询一个订单的信息,程序报错
 *        {
 *          code:200,
 *          data:{
 *              id:1,
 *              orderAmount:1000,
 *              orderaddress:'哈尔滨学院'
 *          }
 *        }
 *      3） 根据用户ID查询一个订单的信息,程序报错
 *        {
 *          code:500,
 *          msg:'后台程序报错，请联系管理员',
 *        }
 *
 */

//1 使用type定义一个联合类型名称为 rescode 用作返回类型的状态包括 200、403、404、500  ,分别表示成功、无权访问、路径错误、服务器出错等
// 第一问 请补全 type rescode 的代码
type rescode = 200 | 403 | 403 | 500;
/***
 * 2 定义一个接口 Res  表示返回类型，包括
 *      2.1 code： 状态码 取值范围为rescode 定义的值
 *      2.2 msg: string字符串类型，可选属性，没有错误的时候msg为空
 *      2.3 data: 属性是一个泛型类型T，出现错误的时候 data没有数据
 */

//第二问 ,请补全 interface Res 接口的声明的代码
interface Res<T> {
  code: rescode;
  msg?: string;
  data?: T;
}
/**
 * 3 使用Res 接口定义后端返回的数据
 *
 */

//3.1 后端接口返回的是 User数组
interface User {
  id: number;
  username: string;
  nickname?: string;
}

//正确
let userRes1: Res<User> = {
  code: 200,
  data: {
    id: 1,
    username: "admin",
  },
};

//错误的，因为data中需要定义username
// let userRes2: Res<User> = {
//   code: 200,
//   data: {
//     id: 1,
//   },
// };
