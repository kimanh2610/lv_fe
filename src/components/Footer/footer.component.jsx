import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import './footer.style.scss'

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				LearnCode - Củng Cố Ngôn Ngữ Lập Trình
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

export default function Footer(props) {
	const { description, title } = props

	return (
		<div>
			<div style={{ paddingTop: '50px' }}></div>
			<Box component="footer" sx={{
				bgcolor: 'background.paper',
				py: 4,
				position: 'relative',
			}} style={{ boxShadow: '0 0 1px 0 #808080', marginTop: '1px' }} >
				<Container maxWidth="lg">
					<Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

					</Grid>
					<Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

					</Grid>
					<Grid >
						<Typography variant="h6" align="center" gutterBottom>
							{title}
						</Typography>
						<Typography
							variant="subtitle1"
							align="center"
							color="text.secondary"
							component="p"
						>
							{description}
						</Typography>
						<div className="title_footer">
							<p>
								<b>LEARNCODE</b> được tối ưu hóa cho việc học và đào tạo. Ví dụ có thể được đơn giản hóa để cải thiện việc đọc và học tập. Hướng dẫn, tài liệu tham khảo và ví dụ được xem xét liên tục để tránh lỗi, nhưng chúng tôi không thể đảm bảo tính chính xác đầy đủ của tất cả các nội dung.
							</p>
						</div>
						<Copyright />
						<div className="logo_footer">
							<img className="img_footer" src="../../images/logo.jpg" ></img>
						</div>
					</Grid>
				</Container>
			</Box>
		</div>

	)
}