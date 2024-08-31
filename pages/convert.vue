<template>
	<div class="flex flex-1 justify-center items-center">
		<div class="bg-black px-10 py-6 rounded-2 flex flex-col gap-3">
			<div class="flex gap-3">
				<UIDropdown
					:value="data.first.currency"
					:response="(value: currency) => setCurrency('first', value)"
					:without="data.second.currency"
				/>
				<input
					type="number"
					class="bg-white rounded-2.5 px-3 py-1.5 text-black leading-5 flex items-center gap-2 outline-none"
					placeholder="Введите сумму"
					v-model.number="data.first.value"
					min="0"
					@input="calculate('first')"
				/>
			</div>
			<div class="flex gap-3">
				<UIDropdown
					:value="data.second.currency"
					:response="(value: currency) => setCurrency('second', value)"
					:without="data.first.currency"
				/>
				<input
					type="number"
					class="bg-white rounded-2.5 px-3 py-1.5 text-black leading-5 flex items-center gap-2 outline-none"
					placeholder="Введите сумму"
					v-model.number="data.second.value"
					min="0"
					@input="calculate('second')"
				/>
			</div>

			<div v-if="error" class="text-red-600 text-center py-1">{{ error }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const store = useExchangeRate();
const exchangeRate = computed(() => store.data);

type currency = 'rub' | 'usd' | 'eur';
type mode = 'first' | 'second';

const data = ref<{
	first: { currency: currency; value: number | null | string };
	second: { currency: currency; value: number | null | string };
}>({
	first: { currency: 'rub', value: null },
	second: { currency: 'usd', value: null },
});

const error = ref<string | null>(null);

const setCurrency = (type: mode, value: currency) => {
	data.value[type].currency = value;

	calculate('first');
};

const calculate = (type: mode) => {
	error.value = null;

	if (typeof data.value[type].value === 'string') {
		data.value.first.value = null;
		data.value.second.value = null;
		error.value = 'Введите числовое значение';
		return;
	}

	if (type === 'first' && typeof data.value[type].value === 'number') {
		data.value.second.value = parseFloat((data.value[type].value! * getExchange()).toFixed(2));
	}

	if (type === 'second' && Number(data.value.second.value)) {
		data.value.first.value = parseFloat((data.value[type].value! / getExchange()).toFixed(2));
	}
};

const getExchange = () => {
	return exchangeRate.value[`${data.value.first.currency}-${data.value.second.currency}`];
};
</script>
