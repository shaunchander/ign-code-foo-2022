import { NextWebVitalsMetric } from 'next/app'

const errorMessage = (str: string, type: 'warn' | 'error') => {
	console[type](
		`${type === 'warn' ? '🤚' : '🚨'} ${str} ${
			type === 'warn'
				? 'Please consider optimizing this page.'
				: 'Please optimize this page!'
		}`
	)
}

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
	if (process.env.NODE_ENV === 'development')
		switch (metric.name) {
			case 'FCP':
				if (metric.value >= 1800) {
					errorMessage(
						`First Contentful Paint reported as ${metric.value}`,
						'warn'
					)
				}
				if (metric.value >= 3000) {
					errorMessage(
						`First Contentful Paint reported as ${metric.value}`,
						'error'
					)
				}
				break
			case 'LCP':
				if (metric.value >= 2500) {
					errorMessage(
						`Largest Contentful Paint reported as ${metric.value}`,
						'warn'
					)
				}
				if (metric.value >= 4000) {
					errorMessage(
						`Largest Contentful Paint reported as ${metric.value}`,
						'error'
					)
				}
				break
			case 'CLS':
				if (metric.value >= 0.1) {
					errorMessage(
						`Cumulative Layout Shift reported as ${metric.value}`,
						'warn'
					)
				}
				if (metric.value >= 0.25) {
					errorMessage(
						`Cumulative Layout Shift reported as ${metric.value}`,
						'error'
					)
				}
				break
			case 'FID':
				if (metric.value >= 100) {
					errorMessage(
						`Cumulative Layout Shift reported as ${metric.value}`,
						'warn'
					)
				}
				if (metric.value >= 300) {
					errorMessage(
						`Cumulative Layout Shift reported as ${metric.value}`,
						'error'
					)
				}
				break
			case 'TTFB':
				if (metric.value >= 100) {
					errorMessage(
						`Cumulative Layout Shift reported as ${metric.value}`,
						'warn'
					)
				}
				if (metric.value >= 300) {
					errorMessage(
						`Cumulative Layout Shift reported as ${metric.value}`,
						'error'
					)
				}
				break

			default:
				break
		}
}
