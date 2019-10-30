<template>
    <d2-container>
        <template slot="header">基础表格</template>
        <d2-crud
                ref="d2Crud"
                :columns="columns"
                :data="data"/>
<!--        <el-card shadow="never" class="d2-mb">-->
<!--            <d2-highlight :code="code"/>-->
<!--        </el-card>-->
        <d2-link-btn
                slot="footer"
                title="文档"
                link="https://fairyever.com/d2-admin/doc/zh/ecosystem-d2-crud/"/>
    </d2-container>
</template>

<script>
// import code from './code.js'

export default {
  data () {
    return {
      // code,
      columns: [
        {
          title: '主标题',
          key: 'title',
          width: '180'
        },
        {
          title: '作者',
          key: 'author',
          width: '240'
        },
        {
          title: '存量',
          key: 'amount'
        }
      ],
      data: [
        {
          title: '线性代数及其应用',
          author: 'Davic C. Lay, Steven R.Lay',
          amount: 5
        },
        {
          title: '离散数学',
          author: 'Davic C. Lay, Steven R.Lay',
          amount: 3
        },
        {
          title: '高等数学',
          author: 'Davic C. Lay, Steven R.Lay',
          amount: 3
        }
      ]
    }
  },
  mounted () {
    console.log(this.$refs.d2Crud.d2CrudData)
  }
}
</script>
