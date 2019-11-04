<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside
      :style="'width:' + width + 'px' + ';transition:0.5s ease;height:100%;overflow:hidden'"
      style="background-color: rgb(238, 241, 246);"
    >
      <el-menu
        :default-openeds="opens"
        v-for="item in user.rous"
        :key="item.meta.name"
        :collapse="isCollapse"
        active-text-color="rgb(64, 158, 255)"
        background-color="#1f2d3d"
        text-color="rgb(191, 203, 217)"
        router
        :default-active="$route.path"
      >
        <el-submenu :index="item.path" v-if="item.children">
          <template slot="title" >
            <i :class="item.iconfont"></i>
            <span :class=" isCollapse ? 'of' : 'on'">{{item.meta.name}}</span>
          </template>
          <el-menu-item-group v-for="v in item.children" :key="v.meta.name">
            <el-menu-item :index="item.path + '/' + v.path">
              <i :class="v.iconfont"></i>
              {{v.meta.name}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu :index="item.path" :popper-append-to-body="false"  v-else>
          <template slot="title">
            <div
              @click="nav_to"
              style="width:100%;height:100%"
              :class=" $route.path === '/home' ||  $route.path === '/' ?'is-active' : ''"
            >
              <i :class="item.iconfont"></i>
              <span :class=" isCollapse ? 'of' : 'on'">{{item.meta.name}}</span>
            </div>
          </template>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="off_or_on">
          <i
            :class=" isCollapse ? 'off el-icon-s-fold' : 'off el-icon-s-unfold' "
            @click="close_or_open"
          ></i>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            
            <el-breadcrumb-item v-for="item in rous" :key="item.path" :to="item.path">
              {{item.name}}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <el-dropdown  @command="handleCommand">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="see">查看</el-dropdown-item>
              <el-dropdown-item command="newAdd">新增</el-dropdown-item>
              <el-dropdown-item command="exit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </div>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapState } from "vuex";
import {removeToken , removeRank } from "../../untils/auth.js"
//单独的话只能这样用
// import { Message } from 'element-ui'  Message('xxx')
export default {
  data() {
    return {
      isCollapse: false,
      width: 200,
      opens: [],
      rous : [],
    };
  },
  methods: {
    close_or_open() {
      this.isCollapse = !this.isCollapse;
      this.width = this.isCollapse ? 60 : 200;
    },
    nav_to() {
      this.$router.push("/home");
    },
    breadcrumbData(matched) {
      this.rous = []
      matched.forEach(item=>{
        this.rous.push({ path : item.path , name : item.name})
      })
    },
    //退出登录
     handleCommand(command) {
        if(command == "exit") {
          removeToken();
          removeRank()
        }
        this.$message({
           message: "退出成功",
          type: 'success'
        })     
      
      },
      
  
   
  },
  computed: {
    ...mapState(["user"])
  },
  watch: {
    "$route.path": function(newValue, oldValue) {
      this.opens = []
      let path = newValue.split("/");
      path = "/" + path[1];
      this.opens.push(path);
      // this.opens =  Array.from(new Set(this.opens))
     (newValue === '/home' || newValue === '/')? this.breadcrumbData([]) : this.breadcrumbData(this.$route.matched)
      
    }
  }
};
</script>
<style lang="less" scoped>
.el-header {
  color: #333;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.off {
  font-size: 20px !important;
}
.el-aside,
.el-menu {
  background-color: #1f2d3d !important;

  color: rgb(191, 203, 217);
}
.is-active {
  color: rgb(64, 158, 255);
}
.is-active > i {
  color: rgb(64, 158, 255);
}
.off_or_on {
  display: flex;
  height: 100%;
  align-items: center;
}
.off_or_on > i {
  margin-right: 10px;
}
.el-submenu__icon-arrow {
  color: #000;
}
.of {
  color: #1f2d3d;
}
.on {
  margin-left: 4px;
  display: inline-block;
}

</style>


