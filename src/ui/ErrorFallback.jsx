import Heading from './Heading'
import Button from './Button'

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="h-screen bg-grey-50 dark:bg-grey-900 flex items-center justify-center p-12">
      <div className="bg-grey-0 dark:bg-grey-800 border border-grey-100 dark:border-grey-700 rounded-md p-12 flex-[0_1_96rem] text-center [&_h1]:mb-4 [&_p]:font-mono [&_p]:mb-8 [&_p]:text-grey-500 dark:[&_p]:text-grey-400">
        <Heading as="h1">Something went wrong 🙄</Heading>
        <p>{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </main>
  )
}
