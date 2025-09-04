import About from '@/Components/About/About'
import Footer from '@/Components/Footer/Footer'
import OurServices from '@/Components/OurServices/OurServices'
import ReadyToExplore from '@/Components/ReadyToExplore/ReadyToExplore'
import SectorCatalog from '@/Components/SectorCatalog/SectorCatalog'
import Topnav from '@/Components/TopNav/Topnav'
import WhatAbout from '@/Components/WhatIsApp/WhatAbout'
import WhyUs from '@/Components/WhyUs/WhyUs'
import React from 'react'

function Home() {
  return (
    <div>
        <Topnav/>
        <About/>
        <WhatAbout/>
        <WhyUs/>
        <OurServices/>
        <SectorCatalog/>
        <ReadyToExplore/>
        <Footer/>
    </div>
  )
}

export default Home