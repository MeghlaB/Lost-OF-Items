import React from 'react'
import Banner from './Banner'
import LatestFindLostItems from './LatestFindLostItems'
import Feautred from './Feautred'
import MakeQuestions from './MakeQuestions'
import Logosection from './Logosection'

export default function Home() {
    return (
        <div className='py-16 md:py-20'>
            <Banner></Banner>
            {/* <Logosection></Logosection> */}
            {/* <LatestFindLostItems></LatestFindLostItems>
            <div className='p-10'>
                <Feautred></Feautred>
            </div>
            <div className='p-10 '>
            <MakeQuestions></MakeQuestions>
            </div> */}
        </div>
    )
}
