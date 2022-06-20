import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {AuthProvider} from './hooks/useAuth'

import AuthLayouts from './layouts/AuthLayouts'
import Login from './pages/Login'
import RegisterForm from './pages/Register/RegisterForm'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'

//Primer Route = Area Publica
function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<AuthLayouts />}>
						<Route index element={<RegisterForm />} />
						<Route path="login" element={<Login />} />
						<Route path="forget-password" element={<ForgetPassword />} />
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="reset-password/:token" element={<ResetPassword />} />
					</Route>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App
