import { NextResponse } from 'next/server'

export async function middleware( request ) {
  
  const token = request.headers.get('cookie')
  const url = request.nextUrl.clone()
  
  if ( url.pathname === '/questionnaire'
    || url.pathname === '/profile' ) {
    
    if ( !token ) {
      
      url.pathname = '/'
      return NextResponse.redirect( url )
      
    }
    
  }
  
  return NextResponse.next()
  
}

export const config = {
  
  matcher: [ '/questionnaire', '/profile' ]
  
}