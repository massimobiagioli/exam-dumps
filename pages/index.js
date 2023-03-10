import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

const LoginPage = () => {
  const supabaseClient = useSupabaseClient()
  const user = useUser()

  function logoutCallback() {
    return supabaseClient.auth.signOut()
  }

  if (!user)
    return (
      <Auth
        redirectTo="http://localhost:3000/"
        appearance={{ theme: ThemeSupa }}
        supabaseClient={supabaseClient}        
      />
    )

  return (
    <>
      <Navigation 
        onLogout={logoutCallback.bind(logoutCallback)}
        username={user.email}
      />      
      <Link href="/new-exam-session">Start new exam session</Link>
    </>
  )
}

export default LoginPage