// import { NextResponse } from "next/server"
// export function middleware(request){

// const user = request.cookies.get('access_token')


    
//     if (!user){
//         return NextResponse.redirect(
//             new URL('/auth/login', request.url)
//         )
//     }



//     return NextResponse.next()
// }

// export const config = {
//     matcher: ['/employees', '/dashboard', '/qrcodecard', '/profileupdate/:path*'  ]
// }


import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'
 
// 1. Specify protected and public routes
const protectedRoutes = ['/employees', '/dashboard', '/qrcodecard', '/profileupdate/:path*', '/qrcode'  ]
const publicRoutes = ['/auth/login', '/auth/signup', '/']
 
export default async function middleware(req) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  // 3. Decrypt the session from the cookie
  const cookie =   cookies().get('access_token')?.value
  let session
  if (cookie) {
    session = jwtDecode(cookie)
  }

 
  // 5. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.user_id) {
    return NextResponse.redirect(new URL(`/auth/login?next=${path}`, req.nextUrl))
  }
 
  // 6. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.user_id &&
    !req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl ))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}