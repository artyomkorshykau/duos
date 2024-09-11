import { NextResponse } from 'next/server'

export async function middleware( request ) {
  const { cookies } = request
  const token = cookies.get( 'token' )
  
  if ( [ '/questionnaire', '/profile' ].includes( request.nextUrl.pathname ) ) {
    if ( !token ) {
      return NextResponse.redirect( new URL( '/', request.url ) )
    }
  }
  
  return NextResponse.next()
}

export const config = {
  
  matcher: [ '/questionnaire', '/profile' ]
  
}