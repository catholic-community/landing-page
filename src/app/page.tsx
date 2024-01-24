'use client'

import Image from 'next/image'
import LandingPageLayout from '@/components/layout/LandingPageLayout'
import FullSection from '@/components/template/FullSection'
import ModuleInfoCard from '@/components/ModuleInfoCard'
import section2Image from '../../public/images/section-2.svg'
import Box from '@mui/material/Box'
import TabletUp from '@/components/layout/responsive/TabletUp'
import TabletDown from '@/components/layout/responsive/TabletDown'
import Typography from '@mui/material/Typography'

import './page.module.css'
import { Button } from '@mui/material'

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
					backgroundColor: '#eea0280d'
				}}
			>
				<Typography variant="h1">
					{'Online Catholic Community'}
				</Typography>
				<Typography sx={{maxWidth: '600px', margin: '0 auto', mt: 2}}>
					{
						'Junte-se a comunidade de católicos online. Encontre uma igreja próxima. Leia e compartilhe artigos. Poste dúvidas e respostas. Conect-se com irmãos e irmãs em Cristo de todo o mundo e enriqueça sua vida espiritual.'
					}
				</Typography>
			</FullSection>
			<FullSection
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#1B1B1B'
				}}
			>
				<TabletUp>
					<Box
						sx={theme => ({
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							columnGap: 7.5,
							height: '100%'
						})}
					>
						<Box>
							<Image
								src={section2Image}
								alt="Picture of the author"
								width={500}
							/>
						</Box>
						<ModuleInfoCard
							mode="dark"
							title={'Explorando a Fé através de Artigos.'}
							description={
								'Em nossa seção de artigos, você não só encontra inspiração e conhecimento, mas também tem a facilidade de pesquisar conteúdos específicos. É um espaço para aprender, crescer e compartilhar - em breve, suas próprias reflexões também poderão ser parte deste acervo enriquecedor.'
							}
							buttonTitle={'Ir para Artigos'}
							buttonAction={() => window.open('/articles', '_self')}
							sx={{
								maxWidth: '400px',
								flex: 1
							}}
						/>
					</Box>
				</TabletUp>
				<TabletDown>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}
					>
						<Typography variant="h3" component="h2" color="white">
							{'Explorando a Fé através de Artigos.'}
						</Typography>
						<Typography sx={{mt: 2, color: 'white', maxWidth: '600px'}}>
							{
								'Em nossa seção de artigos, você não só encontra inspiração e conhecimento, mas também tem a facilidade de pesquisar conteúdos específicos. É um espaço para aprender, crescer e compartilhar - em breve, suas próprias reflexões também poderão ser parte deste acervo enriquecedor.'
							}
						</Typography>
						<Button variant="contained" sx={{mt: 4}}>{'Ir para artigos'}</Button>
					</Box>
				</TabletDown>
			</FullSection>
			<TabletUp>
				<FullSection
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundImage: "url('/images/section-3.svg')",
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover'
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							height: '100%'
						}}
					>
						<ModuleInfoCard
							maxWidth={'400px'}
							title={'Mapa Interativo.'}
							description={
								'Procurando uma igreja próxima? Nosso mapa interativo facilitará a descoberta de igrejas católicas ao seu redor. Seja para participar da missa, eventos especiais e descobrir horários de confissões, nosso recurso em desenvolvimento o ajudará a encontrar um lar espiritual, não importa onde esteja.'
							}
							buttonTitle={'Buscar no Mapa'}
							buttonAction={() => window.open('/map', '_self')}
							sx={{
								maxWidth: '350px',
								borderRadius: '4px',
								backgroundColor: 'background.paper'
							}}
						/>
					</Box>
				</FullSection>
			</TabletUp>
			<TabletDown>
				<FullSection
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center'
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
						}}
					>
						<Typography variant="h3" component="h2">
							{'Mapa Interativo.'}
						</Typography>
						<Typography sx={{mt: 2, maxWidth: '600px'}}>
							{
								'Procurando uma igreja próxima? Nosso mapa interativo facilitará a descoberta de igrejas católicas ao seu redor. Seja para participar da missa, eventos especiais e descobrir horários de confissões, nosso recurso em desenvolvimento o ajudará a encontrar um lar espiritual, não importa onde esteja.'
							}
						</Typography>
						<Button variant="contained" sx={{mt: 4}}>{'Buscar no mapa'}</Button>
					</Box>
				</FullSection>
			</TabletDown>
		</LandingPageLayout>
	)
}
