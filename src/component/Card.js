import React from 'react'

const Card = () => {
  return (
    <section className='card_full'>
        <div className='card-row'>
            <div className='col-50'>
                <div className='card-image'>
                    <img src="/images/card.jpg" alt="card"/>
                </div>
            </div>
            <div className='col-50'>
                <div className='card-content'>
                    <div className='card-box'>
                        <div className='card-icon'>
                            <img src="/images/GENERAL_BUILDER.png" alt="general builder" />
                        </div>
                        <div className='card_box_content'>
                            <h3>GENERAL BUILDER</h3>
                            <p>Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis persequeris neglegentur, facete commodo ea use possit lucilius.</p>
                        </div>
                    </div>
                    <div className='card-box'>
                        <div className='card-icon'>
                            <img src="/images/HOUSE_EXTENSIONS.png" alt="HOUSE_EXTENSIONS" />
                        </div>
                        <div className='card_box_content'>
                            <h3>HOUSE EXTENSIONS</h3>
                            <p>Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis persequeris neglegentur, facete commodo ea use possit lucilius.</p>
                        </div>
                    </div>
                    <div className='card-box'>
                        <div className='card-icon'>
                            <img src="/images/REFURBISHMENT.png" alt="REFURBISHMENT" />
                        </div>
                        <div className='card_box_content'>
                            <h3>REFURBISHMENT</h3>
                            <p>Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis persequeris neglegentur, facete commodo ea use possit lucilius.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Card