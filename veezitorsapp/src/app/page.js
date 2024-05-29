import Analytic from '@/components/landingpage/Analytic'
import Faq from '@/components/landingpage/Faq'
import Features from '@/components/landingpage/Features'
import Freetrial from '@/components/landingpage/Freetrial'
import Hero from '@/components/landingpage/Hero'
import Landingheader from '@/components/landingpage/Landingheader'
import Partners from '@/components/landingpage/Partners'
import Solutions from '@/components/landingpage/Solutions'
import React from 'react'

const page = () => {
  return (
    <main>
<Landingheader/>
<Hero/>
<Partners/>
<Analytic/>
<Solutions/>
<Features/>
<Freetrial/>
<Faq/>
    </main>
  )
}

export default page