import { map, Matcher, redirect } from 'navi'

interface Context {
  accessToken: string
}

export function withAuthentication(matcher: Matcher<{}, Context>): any {
  return map((_, context: Context) => (context.accessToken ? matcher : redirect('/login')))
}
