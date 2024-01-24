import Image from 'next/image'
import Box from '@mui/material/Box'
import logoImage from '../../public/images/logo.png'
import Typography from '@mui/material/Typography'

const LogoType = ({
	component = 'header',
	direction = 'horizontal'
}: {
	component?: 'footer' | 'header'
	direction?: 'horizontal' | 'vertical'
}) => {
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
					filter: component === 'header' ? undefined : 'grayscale(100%)',
					opacity: component === 'header' ? 1 : 0.5
				}}
			/>
			{direction === 'horizontal' ? (
				<Typography
					sx={{
						color: component === 'header' ? '#5F372B' : '#8B8B8B',
						fontWeight: 600,
						fontSize: '1.25rem',
						lineHeight: 'normal',
						mt: 1.25
					}}
				>
					Catholic Community
				</Typography>
			) : (
				<Box sx={{mt: '2px'}}>
					<Typography
						sx={theme => ({
							color:
								component === 'header'
									? theme.palette.secondary.main
									: '#8B8B8B',
							fontWeight: 700,
							fontSize: '1.25rem',
							lineHeight: 'normal',
							letterSpacing: '1px'
						})}
					>
						Catholic
					</Typography>
					<Typography
						sx={theme => ({
							color:
								component === 'header'
									? theme.palette.secondary.main
									: '#8B8B8B',
							fontWeight: 500,
							fontSize: '1rem',
							lineHeight: 'normal'
						})}
					>
						Community
					</Typography>
				</Box>
			)}
		</Box>
	)
}

export default LogoType
