import LoginForm from '../features/authentication/LoginForm'
import Logo from '../ui/Logo'
import Heading from '../ui/Heading'

function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-grey-50 dark:bg-grey-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-6 mb-8">
          <Logo />
          <Heading as="h2" className="text-center text-2xl sm:text-2xl font-bold text-grey-800 dark:text-grey-100">
            Log in to your account
          </Heading>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}

export default Login
