<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
const store = useExchangeRate();

onMounted(() => {
	store.fetchExchangeRate();
});
</script>
