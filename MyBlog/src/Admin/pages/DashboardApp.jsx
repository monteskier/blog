import { PostForms } from '../components/PostForms'
import { DashboardLayout } from '../layouts/DashboardLayout'
import '../styles/dashboardStyles.css'
export const DashboardApp = () => {

  return (
		<DashboardLayout>
			<PostForms></PostForms>
		</DashboardLayout>

  )
}
