<template>
	<!-- 文本框 -->
	<template v-if="item.searchType == undefined || item.searchType == 'text'">
		<el-input v-model="searchParam[item.prop!]" v-bind="item.searchProps" placeholder="请输入"
			:clearable="clearable(item)"></el-input>
	</template>
	<!-- 下拉选择框 -->
	<template v-if="item.searchType == 'select' || item.searchType == 'multipleSelect'">
		<el-select v-model="searchParam[item.prop!]" v-bind="item.searchProps"
			:multiple="item.searchType == 'multipleSelect'" placeholder="请选择" :clearable="clearable(item)">
			<el-option v-for="itemValue in item.enum" :key="itemValue[item.searchProps?.value] ?? itemValue.value"
				:label="itemValue[item.searchProps?.label] ?? itemValue.label"
				:value="itemValue[item.searchProps?.value] ?? itemValue.value" :disabled="itemValue.disabled" />
		</el-select>
	</template>
	<!-- 下拉树形选择框 -->
	<template v-if="item.searchType == 'treeSelect' || item.searchType == 'multipleTreeSelect'">
		<el-tree-select v-model="searchParam[item.prop!]" v-bind="item.searchProps"
			:multiple="item.searchType == 'multipleTreeSelect'" :data="item.enum" />
	</template>
</template>

<script setup lang="ts" name="searchFormItem">
import { ColumnProps } from "@/components/ProTable/interface";

interface SearchFormItem {
	item: Partial<ColumnProps>; // 具体每一个搜索项的配置
	searchParam: any; // 搜索参数
}

// 是否有清除按钮 (当搜索项有默认值时，清除按钮不显示)
const clearable = (item: Partial<ColumnProps>) => {
	return item.searchInitParam == null || item.searchInitParam == undefined;
};

defineProps<SearchFormItem>();
</script>
