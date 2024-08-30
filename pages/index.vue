<template>
	<div class="flex flex-1 justify-center items-center">
		<div class="bg-black px-4 py-3 rounded-2 flex flex-col gap-3">
			<template v-for="item in CURRENCY">
				<div v-if="item.value !== current" class="flex gap-2">
					<span>1</span>
					<span>{{ item.value.toLocaleUpperCase() }}</span>
					<span>=</span>
					<span>{{ getValue(item.value) }}</span>
					<span>{{ current.toLocaleUpperCase() }}</span>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
const store = useExchangeRate();
const exchangeRate = computed(() => store.data);
const current = computed(() => store.current);

const getValue = (value: string) => {
	return exchangeRate.value[`${value}-${current.value}`];
};
</script>
