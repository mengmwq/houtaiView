<!--
 * @Author: your name
 * @Date: 2020-12-29 13:15:45
 * @LastEditTime: 2020-12-29 17:28:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \houtaiView\src\views\business\Device\editTab.vue
-->
<!--
 * @Author: your name
 * @Date: 2020-11-25 11:10:16
 * @LastEditTime: 2020-12-18 18:38:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\views\system\Activity\index.vue
-->
<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper listT">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="18" :sm="24">
              <a-form-item label="商品名称">
                <a-input
                  v-model="queryParam.goodsInfoName"
                  placeholder="请输入正确的商品名称"
                />
              </a-form-item>
              <a-form-item label="sku编码">
                <a-input
                  v-model="queryParam.goodsInfoNo"
                  placeholder="请输入正确的sku编码"
                />
              </a-form-item>
              <a-form-item label="商品条码">
                <a-input
                  v-model="queryParam.goodsInfoBarcode"
                  placeholder="请输入正确的商品条码"
                />
              </a-form-item>
              <a-form-item label="品牌">
                <a-select
                  v-model="queryParam.brandId"
                  show-search
                  :filterOption="filterOption"
                  placeholder="请选择品牌名称"
                  style="width: 200px"
                  @focus="handleFocus()"

                >
                  <template v-for="item in brandNameData">
                    <a-select-option :key="item.brandId">{{
                      item.brandName
                    }}</a-select-option>
                  </template>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <span
                class="table-page-search-submitButtons"
                style="float: right"
              >
                <a-button type="primary" @click="GetWarningList()"
                  >查询</a-button
                >
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <a-table
        :loading="loading"
        :columns="columns"
        :data-source="tableData"
        :rowKey="(item, index) => index"
        :pagination="pagination"
        @change="handleTableChange"
      >
        <p slot="tags" slot-scope="text, tags, i">
          <a-button type="primary" @click="edit(text, tags, i)">编辑</a-button>
        </p></a-table
      >
    </a-card>
    <a-modal v-model="isShowAddModal" title="编辑" @ok="handleOk">
      <a-form
        :form="form"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        :layout="formLayout"
      >
        <a-form-item label="商品名称">
          <a-input
            placeholder="请输入商品名称"
            disabled
            v-decorator="['goodsInfoName', {}]"
          />
        </a-form-item>
        <a-form-item label="sku编码">
          <a-input
            placeholder="请输入sku编码"
            disabled
            v-decorator="['goodsInfoNo', {}]"
          />
        </a-form-item>
        <a-form-item label="商品条码">
          <a-input
            placeholder="请输入商品条码"
            v-decorator="['goodsInfoBarcode', {}]"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </page-header-wrapper>
</template>

<script>
import {
  GoodInfoByParamMap,
  selectBrandList,
  getGoodInfoBySku,
  updateBarcodeBySku
} from "@/api/device";
const columns = [
  {
    title: "商品名称",
    dataIndex: "goodsInfoName",
    align: "center",
    width: 150
  },
  {
    title: "sku编码",
    dataIndex: "goodsInfoNo",
    align: "center"
  },
  {
    title: "商品条码",
    dataIndex: "goodsInfoBarcode",
    align: "center"
  },
  {
    title: "品牌名称",
    dataIndex: "brandName",
    align: "center"
  },
  {
    title: "操作",
    align: "center",
    dataIndex: "tags",
    key: "tags",
    scopedSlots: { customRender: "tags" }
  }
];
export default {
  data() {
    return {
      columns,
      tableData: [],

      loading: false,
      pagination: {
        total: 0,
        pageSize: 10, //每页中显示10条数据
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ["10", "20", "50", "100"], //每页中显示的数据
        showTotal: total => `共有 ${total} 条数据` //分页中显示总的数据
      },
      queryParam: {
        pageNum: 1, //第几页
        pageSize: 10, //每页中显示数据的条数
        goodsInfoName: "",
        goodsInfoNo: "",
        goodsInfoBarcode: "",
        brandId: "",

      },
      brandName: {
        brandName: ""
      },
      brandNameData: [],
      isShowAddModal: false,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      sku: "",
      returnData: {},
      skuJson: {
        sku: ""
      },
      huidate:{}
    };
  },
  mounted() {
    this.GetWarningList();
    this.handleFocus();
  },
  methods: {
    async handleOk() {
      this.form.validateFields((err, values) => {
       this.huidate = values;




      });


      const res = await updateBarcodeBySku(this.huidate);
       this. isShowAddModal=false;
       this.$message.info(res.data.result)
        this.GetWarningList(false);
    },
    async handleFocus() {

      const res = await selectBrandList(this.brandName);

      this.brandNameData = res.data.result;
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },

    handleBlur() {
      console.log("blur");
    },
    async edit(text, tags, i) {

      this.isShowAddModal = true;
      this.skuJson = {
        sku: tags.goodsInfoNo
      };
      const res = await getGoodInfoBySku(this.skuJson);
      this.form.setFieldsValue({
        goodsInfoName: res.data.result.goodsInfoName,
        goodsInfoNo: res.data.result.goodsInfoNo,
        goodsInfoBarcode: res.data.result.goodsInfoBarcode
      });
    },

    async GetWarningList(flag = true) {
      this.loading = true;
      /* const queryParam = {
        pageNum: 1, //第几页
        pageSize: 10, //每页中显示数据的条数
        sku: this.sku,
      }; */
      if (flag) {
        this.queryParam.pageNum = 1;
        this.pagination.current = 1;
      }

      const res = await GoodInfoByParamMap(this.queryParam);
      const pagination = { ...this.pagination };
      pagination.total = res.data.totalCount;
      this.tableData = res.data.result;
      this.pagination = pagination;
      // this.queryParam.goodsInfoName='';
      // this.queryParam.goodsInfoNo='';
      // this.queryParam.brandName='';
      // this.queryParam.brandId='',
      // this.goodsInfoNo='',
      // this.queryParam.goodsInfoBarcode=''


      this.loading = false;
    },
    handleTableChange(pagination) {
      this.pagination.current = pagination.current;
      this.pagination.pageSize = pagination.pageSize;
      this.queryParam.pageNum = pagination.current;
      this.queryParam.pageSize = pagination.pageSize;
      this.GetWarningList(false);
    }
  }
};
</script>

<style></style>
