export let MAP_URL: string
export let AUTH_URL: string

switch (process.env.NEXT_PUBLIC_ENVIRONMENT) {
	case 'production':
		MAP_URL = 'https://map.catholiccommunity.social'
		AUTH_URL = 'https://auth.catholiccommunity.social'
		break
	default:
		MAP_URL = 'http://localhost:3001'
		AUTH_URL = 'http://localhost:3002'
		break
}
