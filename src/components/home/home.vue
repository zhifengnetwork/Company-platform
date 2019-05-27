<template>
  <div class="home">
	  	<ly-tab
			v-model="selectedId"
			:items="items"
			:options="options"
			@change="handleChange">
		</ly-tab>
		<router-view></router-view>
  </div>
</template>

<script>

import Vue from 'vue'
import LyTab from 'ly-tab'
Vue.use(LyTab)

export default {
  	data() {
		return {
			selectedId: 0,
			items: [
				{label: '精选'},
				{label: '9.9包邮'},
				{label: '男装'},
				{label: '女装'},
				{label: '家纺家居'},
				{label: '电器'}
			],
			options: {
				activeColor: '#1d98bd'
			},
			path: [
				'/home/choice', '/home/guarantees', '/home/male', '/home/female', '/home/homeTextile', '/home/appliances'
			]
		}
  	},

	methods: {
		handleChange (item, index) {
			console.log(item, index)
			this.$router.replace(this.path[index])
		}
  	}
  
};
</script>

<style lang="stylus" scoped>


</style>