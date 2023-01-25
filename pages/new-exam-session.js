import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Navigation from '@/components/Navigation'

export default function NewExamSessionPage() {
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
      <div>WIP ...</div>
    </>
  )
}
