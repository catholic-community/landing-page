import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {SystemStyleObject} from '@mui/system/styleFunctionSx'
import {Theme} from '@mui/material/styles'
import Typography from '@mui/material/Typography'

interface ModuleInfoCardProps {
	title: string
	description: string
	buttonTitle: string
	maxWidth?: string | number
	mode?: 'dark' | 'light'
	sx?: SystemStyleObject<Theme>
	buttonAction: () => void
}

const ModuleInfoCard = ({
	buttonAction,
	buttonTitle,
	description,
	title,
	mode,
	sx
}: ModuleInfoCardProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				gap: 2,
				maxWidth: '300px',
				boxSizing: 'content-box',
				p: 3,
				...sx
			}}
		>
			<Typography
				variant="h1"
				sx={theme => ({
					color: theme.palette.getContrastText(
						mode === 'dark' ? '#1B1B1B' : '#FFFFFF'
					)
				})}
			>
				{title}
			</Typography>
			<Typography
				sx={theme => ({
					color: theme.palette.getContrastText(
						mode === 'dark' ? '#1B1B1B' : '#FFFFFF'
					)
				})}
			>
				{description}
			</Typography>
			<Button variant="contained" onClick={buttonAction}>
				{buttonTitle}
			</Button>
		</Box>
	)
}

export default ModuleInfoCard
