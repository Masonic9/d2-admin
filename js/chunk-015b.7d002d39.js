(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-015b"],{"8fa2":function(n,e){n.exports="通过给 `D2 Crud` 传入 `add-mode` 可开启新增模式，需要传入 `form-template` 来为新增的表单添加模板，向`form-options` 中传入 `labelWidth` 和 `labelPosition` 来控制表单中label的显示, `saveLoading` 则控制保存按钮的loading状态，`addButton` 可以控制表格顶部新增按钮的样式， `row-add` 事件控制数据新增，接收两个参数： `row` 是当前新增行的数据， `done` 用于控制保存成功，可以在 `done()` 之前加入自己的逻辑代码。代码如下：\n"},e3dbd:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("d2-container",[t("template",{slot:"header"},[n._v("新增数据")]),t("d2-crud",{attrs:{columns:n.columns,data:n.data,title:"D2 CRUD","add-mode":"","add-button":n.addButton,"form-template":n.formTemplate,"form-options":n.formOptions},on:{"row-add":n.handleRowAdd,"dialog-cancel":n.handleDialogCancel}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:n.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:n.code}})],1),t("template",{slot:"footer"},[t("d2-link-btn",{attrs:{title:"文档",link:"https://d2-projects.github.io/d2-admin-doc/zh/ecosystem-d2-crud/"}})],1)],2)},d=[],o=(t("cadf"),t("551c"),t("097d"),t("8fa2")),s=t.n(o),l="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      title=\"D2 CRUD\"\n      add-mode\n      :add-button=\"addButton\"\n      :form-template=\"formTemplate\"\n      :form-options=\"formOptions\"\n      @row-add=\"handleRowAdd\"\n      @dialog-cancel=\"handleDialogCancel\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄'\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄'\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄'\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄'\n          }\n      ],\n      addButton: {\n        icon: 'el-icon-plus',\n        size: 'small'\n      },\n      formTemplate: {\n        date: {\n          title: '日期',\n          value: '2016-05-05'\n        },\n        name: {\n          title: '姓名',\n          value: '王小虎'\n        },\n        address: {\n          title: '地址',\n          value: '上海市普陀区金沙江路 1520 弄'\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false\n      }\n    }\n  },\n  methods: {\n    handleRowAdd (row, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(row)\n        this.$message({\n          message: '保存成功',\n          type: 'success'\n        });\n        done()\n        this.formOptions.saveLoading = false\n      }, 300);\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '取消保存',\n        type: 'warning'\n      });\n      done()\n    }\n  }\n}\n<\/script>",i={data:function(){return{doc:s.a,code:l,columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],addButton:{icon:"el-icon-plus",size:"small"},formTemplate:{date:{title:"日期",value:"2016-05-05"},name:{title:"姓名",value:"王小虎"},address:{title:"地址",value:"上海市普陀区金沙江路 1520 弄"}},formOptions:{labelWidth:"80px",labelPosition:"left",saveLoading:!1}}},methods:{handleRowAdd:function(n,e){var t=this;this.formOptions.saveLoading=!0,setTimeout(function(){console.log(n),t.$message({message:"保存成功",type:"success"}),e(),t.formOptions.saveLoading=!1},300)},handleDialogCancel:function(n){this.$message({message:"取消保存",type:"warning"}),n()}}},r=i,m=t("2877"),c=Object(m["a"])(r,a,d,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-015b.7d002d39.js.map