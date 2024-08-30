<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
const store = useCurrency();

onMounted(() => {
	store.fetchCurrency();

	if (!localStorage.getItem('main-currency')) {
		localStorage.setItem('main-currency', 'rub');
	}
});
</script>
