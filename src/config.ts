export let MAP_URL: string

switch (process.env.NEXT_PUBLIC_ENVIRONMENT) {
	case 'production':
		MAP_URL = 'https://map.catholiccommunity.social'
		break
	default:
		MAP_URL = 'http://localhost:3001'
		break
}
