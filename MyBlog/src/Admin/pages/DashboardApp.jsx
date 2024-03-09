import { NothingSelectedView, OptionSelectedView, PostSelectedView } from '../views'
import { DashboardLayout } from '../layouts/DashboardLayout'
import '../styles/dashboardStyles.css'
export const DashboardApp = () => {

  return (
		<DashboardLayout>
			{/* Con post seleccionado o nuevo post */}
				{/* <OptionSelectedView></OptionSelectedView> */}
			{/*TODO: Cuando no hay nada selccionado */}
				<NothingSelectedView></NothingSelectedView>
		</DashboardLayout>

  )
}
