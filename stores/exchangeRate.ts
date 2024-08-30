interface Currency {
	[key: string]: number;
}

export const useExchangeRate = defineStore('exchange-rate', {
	state: () => {
		return {
			data: {
				'usd-rub': 94.9139,
				'eur-rub': 106.031,
				'brl-rub': 17.1701,
				'kzt-rub': 0.203,
				'idr-rub': 0.0062,
				'rub-usd': 0.011,
				'eur-usd': 1.1171,
				'brl-usd': 0.1809,
				'kzt-usd': 0.0021,
				'idr-usd': 0.0001,
				'rub-eur': 0.01,
				'usd-eur': 0.9131,
				'brl-eur': 0.1652,
				'kzt-eur': 0.002,
				'idr-eur': 0.0001,
				'rub-brl': 0.064,
				'usd-brl': 5.8352,
				'eur-brl': 6.5187,
				'kzt-brl': 0.0125,
				'idr-brl': 0.0004,
				'rub-kzt': 5.4905,
				'usd-kzt': 500.9593,
				'eur-kzt': 559.6355,
				'brl-kzt': 90.6246,
				'idr-kzt': 0.0329,
				'rub-idr': 173.808,
				'usd-idr': 15858.4826,
				'eur-idr': 17715.9498,
				'brl-idr': 2868.8343,
				'kzt-idr': 33.9102,
			} as Currency,
			current: 'rub',
		};
	},
	actions: {
		fetchExchangeRate() {
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
