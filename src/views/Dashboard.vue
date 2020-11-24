<template>
  <div class="home">
    <a-row :gutter="[24, 24]">
      <a-col :xl="6" :lg="12" :sm="24" v-for="(item, index) in lists" :key="index">
        <a-card>
          <a-row type='flex' align="middle" justify="center">
            <a-col :xs="5" :md="2" :lg="4" :sm="3" :xl="8" style="text-align:center">
              <a-icon type="codepen-circle" style="font-size: 40px;" />
            </a-col>
            <a-col :xs="8" :md="3" :lg="7" :xl="12">
              <div>{{item.value}}个</div>
              <div>{{item.name}}</div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :lg="12" :md="24">
        <baidu-map class="bm-view" @ready="initMapReady" :center="initMap.center" :zoom="initMap.zoom" :scroll-wheel-zoom="initMap.isScrollWheelZoom">
          <bm-marker v-for="(item, index) in points" :key="index" :position="item" @click="item.show=true" @mouseover="item.show=!item.show;transferAdds($event, index)" @mouseleave="item.show=!item.show" animation="BMAP_ANIMATION_DROP">
            <bm-label :content="item.number"></bm-label>
            <bm-info-window :show="item.show">
              <p>设备号：{{item.number}}</p>
              <p>当前位置：{{item.addr}}</p>
              <p>温度1/温度2/湿度：{{item.temp1}}°C/{{item.temp2}}°C/{{item.humidity}}%RH</p>
              <p>数据最新更新时间：{{item.time}}</p>
            </bm-info-window>
          </bm-marker>
        </baidu-map>
      </a-col>
      <a-col :lg="12" :md="24">
        <div id="chart" style="width: 100%;height: 250px"></div>
        <a-card title="通知&预警" :bordered="false" :style="{ height: 'calc(100vh - 466px)', overflow: 'hidden' }">
          <a slot="extra" href="#">更多</a>
          <a-carousel autoplay :dots="false" dotPosition="left" :autoplaySpeed="2000" :rows="1" :slidesToShow="4">
            <div v-for="(item, index) in 10" :key="index">
              <p>编号：500291,运单编号：{{item}}，报警类型：温度1合格上限温度报警</p>
            </div>
          </a-carousel>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { BmMarker, BmInfoWindow, BmLabel } from 'vue-baidu-map'
import { Chart } from '@antv/g2'
import { initMap } from '@/api/data'

export default {
  name: 'Home',
  data () {
    return {
      lists: [
        { value: 19786, name: '保温箱数量' },
        { value: 98, name: '冷藏车数量' },
        { value: 12, name: '冷库数量' },
        { value: 6, name: '集装箱数量' }
      ],
      initMap: {
        center: '北京', // 经纬度
        zoom: 5, // 缩放等级
        isScrollWheelZoom: true
      },
      points: [],
      BMap: null
    }
  },
  components: {
    BmMarker,
    BmInfoWindow,
    BmLabel
  },
  methods: {
    // 初始化地图点
    async reqInitMap () {
      const test = 'admin_permit=zjly8888&UserP=w&admin_user=xdgj&StartNo=0&Length=10000&source=b&u_id='
      const res = await initMap(test)
      console.log(res)
      if (res.data.code === 10000) {
        this.points = this.transferList(res.data.resultCode)
      }
    },
    // 转换点数据
    transferList (list) {
      return list.map(item => {
        return {
          lng: item.jingdu,
          lat: item.weidu,
          show: false,
          addr: '',
          humidity: item.humidity,
          number: item.shebeibianhao,
          time: item.time,
          temp1: item.temperature01,
          temp2: item.temperature02
        }
      })
    },
    // 地图加载完成
    initMapReady ({ BMap }) {
      this.BMap = BMap
    },
    // 地址解析
    transferAdds (e, index) {
      const geo = new this.BMap.Geocoder()
      geo.getLocation(e.point, res => {
        this.$set(this.points[index], 'addr', res.address)
      })
    },
    initChart () {
      const data = [
        { status: '在线', sold: 275, type: '集装箱' },
        { status: '离线', sold: 115, type: '集装箱' },
        { status: '在线', sold: 120, type: '保温箱' },
        { status: '离线', sold: 350, type: '保温箱' }
      ]
      const chart = new Chart({
        container: 'chart',
        autoFit: true
      })
      chart.data(data)
      chart.scale('sold', {
        nice: true
      })
      chart.tooltip({
        showMarkers: false,
        shared: true
      })
      chart.interval().position('type*sold').color('status').adjust([
        {
          type: 'dodge',
          marginRatio: 0
        }
      ])
      chart.interaction('element-highlight-by-x')
      chart.render()
    }
  },
  mounted () {
    this.reqInitMap()
    setTimeout(() => {
      this.initChart()
    })
  }
}
</script>

<style lang="less" scoped>
.bm-view {
  width: 100%;
  height: calc(100vh - 216px);
}
</style>
