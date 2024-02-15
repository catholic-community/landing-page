'use client'

import Image from 'next/image'
import LandingPageLayout from '@/components/layout/LandingPageLayout'
import FullSection from '@/components/template/FullSection'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import './page.module.css'
import {Button, Card} from '@mui/material'
import {ArrowRight} from '@phosphor-icons/react'
import Mobile from '@/components/layout/responsive/Mobile'
import {AUTH_URL, MAP_URL} from '@/config'

export default function LandingPage() {
	return (
		<LandingPageLayout>
			<FullSection
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					margin: '0 auto',
					textAlign: 'center',
					minHeight: '400px',
					backgroundColor: theme =>
						theme.palette.mode === 'light'
							? '#fffaf6'
							: theme.palette.background.paper
				}}
			>
				<Typography variant="h1" color="secondary.main">
					{'Online Catholic Community'}
				</Typography>
				<Typography
					variant="body2"
					sx={{maxWidth: '600px', margin: '0 auto', mt: 2}}
				>
					{
						'Junte-se a comunidade de católicos online. Encontre uma igreja próxima. Leia e compartilhe artigos. Poste dúvidas e respostas. Conecte-se com irmãos e irmãs em Cristo de todo o mundo e enriqueça sua vida espiritual.'
					}
				</Typography>
				<Mobile>
					<Button
						variant="contained"
						endIcon={<ArrowRight />}
						onClick={() => window.open(AUTH_URL + '/sign-up', '_self')}
						sx={{mt: 3}}
					>
						{'Entrar na comunidade'}
					</Button>
				</Mobile>
			</FullSection>
			<FullSection
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#1B1B1B'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						rowGap: 2
					}}
				>
					<Typography variant="h2" component="h2" color="white">
						{'Explorando a Fé através de Artigos.'}
					</Typography>
					<Typography variant="body2" color="white">
						Em nossa seção de artigos, você não só encontra inspiração e
						conhecimento, mas também tem a facilidade de pesquisar conteúdos
						específicos. É um espaço para aprender, crescer e compartilhar -{' '}
						<i>
							em breve, suas próprias reflexões também poderão ser parte deste
							acervo enriquecedor
						</i>
						.
					</Typography>
					<Box display="grid">
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								columnGap: 2,
								width: '100%',
								overflowX: 'scroll',
								pb: 1,
								mt: 2
							}}
						>
							<Image
								src="/images/sections/2/post-card-1.png"
								alt="Picture of the author"
								width={300}
								height={369}
								style={{maxWidth: '80%', height: 'auto'}}
							/>
							<Image
								src="/images/sections/2/post-card-2.png"
								alt="Picture of the author"
								width={300}
								height={369}
								style={{maxWidth: '80%', height: 'auto'}}
							/>
							<Image
								src="/images/sections/2/post-card-3.png"
								alt="Picture of the author"
								width={300}
								height={369}
								style={{maxWidth: '80%', height: 'auto'}}
							/>
							<Image
								src="/images/sections/2/post-card-1.png"
								alt="Picture of the author"
								width={300}
								height={369}
								style={{maxWidth: '80%', height: 'auto'}}
							/>
						</Box>
					</Box>
					<Button
						variant="text"
						onClick={() => window.open('/articles', '_self')}
						endIcon={<ArrowRight />}
						sx={{ml: 'auto'}}
					>
						{'Ir para artigos'}
					</Button>
				</Box>
			</FullSection>
			<FullSection
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundImage: "url('/images/section-3.png')",
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover'
				}}
			>
				<Card
					sx={theme => ({
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						gap: 2,
						maxWidth: '350px',
						boxSizing: 'content-box',
						p: 3,
						borderRadius: '1px',
						[theme.breakpoints.down('md')]: {
							margin: '0 auto',
							maxWidth: '80%',
							alignItems: 'center',
							textAlign: 'center'
						},
						[theme.breakpoints.down('sm')]: {
							maxWidth: '100%'
						}
					})}
				>
					<Typography variant="h2" component="h2">
						{'Mapa Interativo.'}
					</Typography>
					<Typography variant="body2">
						{
							'Procurando uma igreja próxima? Nosso mapa interativo facilitará a descoberta de igrejas católicas ao seu redor. Seja para participar da missa, eventos especiais e descobrir horários de confissões, nosso recurso em desenvolvimento o ajudará a encontrar um lar espiritual, não importa onde esteja.'
						}
					</Typography>
					<Button
						variant="contained"
						onClick={() => window.open(MAP_URL, '_blank')}
						endIcon={<ArrowRight />}
						sx={{mt: 1}}
					>
						{'Buscar no Mapa'}
					</Button>
				</Card>
			</FullSection>
		</LandingPageLayout>
	)
}
