interface Currency {
	[key: string]: number;
}

export const useCurrency = defineStore('currency', {
	state: () => {
		return {
			data: {} as Currency,
		};
	},
	actions: {
		fetchCurrency() {
			$fetch<Currency>('https://status.neuralgeneration.com/api/currency')
				.then(res => {
					this.data = res;
				})
				.catch(err => {
					console.error(err);
				});
		},
	},
});
