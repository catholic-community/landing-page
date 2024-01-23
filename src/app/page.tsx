'use client'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import OnboardingLayout from '@/components/layout/OnboardingLayout'

export default function Home() {
	return (
		<OnboardingLayout>
			<Container
				sx={{
					py: 6,
					px: 3
				}}
			>
				<Typography>Hello Catholic Community!</Typography>
			</Container>
		</OnboardingLayout>
	)
}
