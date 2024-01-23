import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LogoType from '../Logo'

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 2,
				bgcolor: '#F1F1F1',
				height: 250,
				width: '100%',
				mt: 60
			}}
		>
			<LogoType variant="footer" />
			<Box>
				<Typography
					variant="body2"
					sx={{color: '#8b8b8b', textAlign: 'center'}}
				>
					Comunidade de Católicos Online
				</Typography>
				<Typography
					variant="body2"
					sx={{color: '#8b8b8b', mt: 1, textAlign: 'center'}}
				>
					© 2021 Todos os direitos reservados
				</Typography>
			</Box>
		</Box>
	)
}

export default Footer
