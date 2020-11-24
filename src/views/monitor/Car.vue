<template>
  <div>
    <a-collapse v-model="activeKey" :bordered="true">
      <template v-for="(item, index) in lists">
        <a-collapse-panel :key="index + ''" :header="item.title">
          <a-list :grid="{ gutter: 24, lg: 4, md: 3, sm: 2, xs: 1 }" :data-source="item.data">
            <a-list-item slot="renderItem" slot-scope="listItem">
              <a-card :hoverable="true">
                <p>设备编号：{{listItem.shebeibianhao}}</p>
                <p>温度1：{{listItem.last_temperature01}}°C</p>
                <p>温度2：{{listItem.last_temperature02}}°C</p>
                <p v-if="listItem.beizhu">备注{{listItem.beizhu}}</p>
                <p v-if="listItem.yewubianhao">业务编号：{{listItem.yewubianhao}}</p>
                <p>报警温度区间：{{listItem.baojingwendu_xiaxian}} ~ {{listItem.baojingwendu_shangxian}} °C</p>
              </a-card>
            </a-list-item>
          </a-list>
        </a-collapse-panel>
      </template>
    </a-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeKey: ['0', '1'],
      lists: [
        {
          title: 'title1',
          data: [
            {
              shebeibianhao: '516642',
              last_temperature01: '33.6',
              last_temperature02: '36.6',
              beizhu: '',
              yewubianhao: 'xxx',
              baojingwendu_xiaxian: 0,
              baojingwendu_shangxian: 10,
              guigexinghao: 'TT'
            },
            {
              shebeibianhao: '516642',
              last_temperature01: '33.6',
              last_temperature02: '36.6',
              beizhu: '',
              yewubianhao: 'xxx',
              baojingwendu_xiaxian: 0,
              baojingwendu_shangxian: 10,
              guigexinghao: 'TT'
            },
            {
              shebeibianhao: '516642',
              last_temperature01: '33.6',
              last_temperature02: '36.6',
              beizhu: '',
              yewubianhao: 'xxx',
              baojingwendu_xiaxian: 0,
              baojingwendu_shangxian: 10,
              guigexinghao: 'TT'
            },
            {
              shebeibianhao: '516642',
              last_temperature01: '33.6',
              last_temperature02: '36.6',
              beizhu: '',
              yewubianhao: 'xxx',
              baojingwendu_xiaxian: 0,
              baojingwendu_shangxian: 10,
              guigexinghao: 'TT'
            },
            {
              shebeibianhao: '516642',
              last_temperature01: '33.6',
              last_temperature02: '36.6',
              beizhu: '',
              yewubianhao: 'xxx',
              baojingwendu_xiaxian: 0,
              baojingwendu_shangxian: 10,
              guigexinghao: 'TT'
            },
            {
              shebeibianhao: '516642',
              last_temperature01: '33.6',
              last_temperature02: '36.6',
              beizhu: '',
              yewubianhao: 'xxx',
              baojingwendu_xiaxian: 0,
              baojingwendu_shangxian: 10,
              guigexinghao: 'TT'
            }
          ]
        },
        {
          title: 'title2',
          data: [
            {
              shebeibianhao: '516642',
              last_temperature01: '33.6',
              last_temperature02: '36.6',
              beizhu: '',
              yewubianhao: 'xxx',
              baojingwendu_xiaxian: 0,
              baojingwendu_shangxian: 10,
              guigexinghao: 'TT'
            },
            {
              shebeibianhao: '516642',
              last_temperature01: '33.6',
              last_temperature02: '36.6',
              beizhu: '',
              yewubianhao: 'xxx',
              baojingwendu_xiaxian: 0,
              baojingwendu_shangxian: 10,
              guigexinghao: 'TT'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
