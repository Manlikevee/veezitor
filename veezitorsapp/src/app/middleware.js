import { NextResponse } from "next/server"

export function middleware(request){

    const user = ''
    console.log('helloooooooo')
    if (user){
        return NextResponse.redirect(
            new URL('/', request.url)
        )
    }



    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard']
}