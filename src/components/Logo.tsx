import Image from 'next/image'
import Box from '@mui/material/Box'
import logoImage from '../../public/images/logo.png'
import Typography from '@mui/material/Typography'

const LogoType = ({variant = 'header'}: {variant?: 'footer' | 'header'}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: 1
			}}
		>
			<Image
				src={logoImage}
				alt="Picture of the author"
				width={26.5}
				height={40}
				style={{
					filter: variant === 'header' ? undefined : 'grayscale(100%)',
					opacity: variant === 'header' ? 1 : 0.5
				}}
			/>
			<Typography
				sx={{
					color: variant === 'header' ? '#5F372B' : '#8B8B8B',
					fontWeight: 600,
					fontSize: '1.25rem',
					lineHeight: 'normal',
					mt: 1.25
				}}
			>
				Catholic Community
			</Typography>
		</Box>
	)
}

export default LogoType
