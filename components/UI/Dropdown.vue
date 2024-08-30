<template>
	<div class="relative">
		<button @click="toggle()" class="bg-white rounded-2.5 px-3 py-1.5 text-black leading-5 flex items-center gap-2">
			<span>{{ CURRENCY.find(el => el.value === data)?.symbol }}</span>
			<Icon
				name="ic:twotone-keyboard-arrow-down"
				size="24"
				:class="{ 'rotate-180': container }"
				class="duration-200"
			/>
		</button>

		<Transition name="slide-down">
			<div
				v-if="container"
				v-click-outside="() => toggle(false)"
				class="absolute top-full mt-2 bg-white rounded-2.5 text-black flex flex-col w-32 py-1"
			>
				<button
					v-for="item in CURRENCY"
					:key="item.value"
					@click="select(item.value)"
					class="px-3 py-1 whitespace-nowrap flex justify-between gap-4 hover:bg-slate-300"
				>
					<span>{{ item.name }}</span>
					<span>{{ item.symbol }}</span>
				</button>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { CURRENCY } from '~/utils';

const props = defineProps<{
	value: string | null;
	response: Function;
}>();

const data = ref(props.value);
const container = ref(false);
const toggle = (value?: boolean) => {
	container.value = value ?? !container.value;
};
const select = (value: string) => {
	data.value = value;
	props.response(value);
	toggle();
};
</script>
