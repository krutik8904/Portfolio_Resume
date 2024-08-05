import React from 'react'
import './Education.css'

function Education() {
    return (
        <>
            <div id='education'>Education</div>

            <div className='educontainer'>

                <div class="education-date">2019-20</div><br />
                <div class="education-item">
                    <div class="educontent">
                        <p className='std'>Std 10</p>
                        <p className='sch'>G.G. Zadafiya Vidhyalaya, Hirabaug.</p>
                        <p className='sch'>Result :- 73% </p>
                    </div>
                </div>

                <div class="education-date">2021-22</div><br />
                <div class="education-item">
                    <div class="educontent">
                        <p className='std'>Std 12</p>
                        <p className='sch'>G.G. Zadafiya Vidhyalaya, Hirabaug.</p>
                        <p className='sch'>Result :- 91% </p>
                    </div>
                </div>

                <div class="education-date">2022-23</div><br />
                <div class="education-item">
                    <div class="educontent">
                        <p className='std'>BCA First Year</p>
                        <p className='sch'>SDJ International College, Vesu</p>
                        <p className='sch'>YGPA :- 6.85 </p>
                    </div>
                </div>

                <div class="education-date">2023-24</div><br />
                <div class="education-item">
                    <div class="educontent">
                        <p className='std'>BCA Second Year</p>
                        <p className='sch'>SDJ International College, Vesu</p>
                        <p className='sch'>YGPA :- 6.78 </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Education