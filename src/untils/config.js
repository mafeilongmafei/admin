export default [
  {
    path: "/home",
    component: () => import("../views/layout/index.vue"),
    name: "首页",
    iconfont: "iconfont icon-shouye",
    meta: {
      name: "首页",
      rank: 4,
      path: "/home"
    },
    children: null
  },
  {
    path: "/shop",
    name: "商品",
    component: () => import("../views/layout/index.vue"),
    iconfont: "iconfont icon-shangpin",
    meta: {
      name: "商品",
      rank: 4,
      path: "/shop"
    },
    children: [
      {
        path: "list",
        component: () => import("../views/shop/shopList/index.vue"),
        name: "商品列表",
        iconfont: "iconfont icon-shangpinliebiao",
        meta: {
          name: "商品列表",
          rank: 4,
          path: "/shop/list"
        },
        children: null
      },
      {
        path: "add",
        component: () => import("../views/shop/shopAdd/index.vue"),
        name: "添加商品",
        iconfont: "iconfont icon-tianjiashangpin",
        meta: {
          name: "添加商品",
          rank: 4,
          path: "/shop/add"
        },
        children: null
      },
      {
        path: "register",
        component: () => import("../views/shop/shopRegister/index.vue"),
        name: "商品分类",
        iconfont: "iconfont icon-shangpinfenlei",
        meta: {
          name: "商品分类",
          rank: 4,
          path: "/shop/register"
        },
        children: null
      }
    ]
  },

  {
    path: "/order",
    name: "订单",
    component: () => import("../views/layout/index.vue"),
    iconfont: "iconfont icon-dingdan",
    meta: {
      name: "订单",
      rank: 4,
      path: "/order"
    },
    children: [
      {
        path: "list",
        component: () => import("../views/order/orderList/index.vue"),
        name: "订单列表",
        iconfont: "iconfont icon-dingdanliebiao1",
        meta: {
          name: "订单列表",
          rank: 4,
          path: "/order/list"
        },
        children: null
      },
      {
        path: "setting",
        component: () => import("../views/order/orderSetting/index.vue"),
        name: "订单设置",
        iconfont: "iconfont icon-shezhi",
        meta: {
          name: "订单设置",
          rank: 5,
          path: "/order/setting"
        },
        children: null
      }
    ]
  }
];
