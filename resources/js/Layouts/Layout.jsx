import { Link,Head } from '@inertiajs/react'

export default function Layout({ children }) {
  return (
    <main>
      <header className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">

        <Head title="Tshuts" />
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </header>
      <article>{children}</article>
    </main>
  )
}