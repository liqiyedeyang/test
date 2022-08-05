import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/routers/constant";

// 表单 Form 模块
const formRouter: Array<RouteRecordRaw> = [
	{
		path: "/form",
		component: Layout,
		redirect: "/form/validateForm",
		meta: {
			title: "表单"
		},
		children: [
			{
				path: "/form/validateForm",
				name: "validateForm",
				component: () => import("@/views/form/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "校验表单",
					key: "validateForm"
				}
			},
		]
	}
];

export default formRouter;
