import React, { Fragment } from 'react';

const Rowfooter = () => {
    return (
        <Fragment className='container'>
            <div className='row' style={{marginLeft:'40px',borderTop: '1px solid #a7a9aa', borderBottom: '1px solid #a7a9aa'}}>
                <div className='col  col-xxl-4' style={{ borderRight: '1px solid #a7a9aa',borderLeft:'1px solid #a7a9aa' }}>
                    <a href="https://www.snapdeal.com/page/terms" style={{textDecoration:'none' }}>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/350/497/original/vector-payment-icon.jpg" alt="img not found" style={{width:'80px',height:'80px'}}/>
                        <h6 style={{color:'#5a666c'}}>100% SECURE PAYMENT</h6>
                        <p style={{fontSize:'14px',color:'#a7a9aa'}}>Moving your card details to a much more</p>
                        <p style={{fontSize:'14px',color:'#a7a9aa'}}>secured place</p>
                    </a>
                    
                </div>
                <div className='col col-xxl-4' style={{ borderRight: '1px solid #a7a9aa' }}>
                    <a href="https://www.snapdeal.com/page/TrustPay" style={{textDecoration:'none' }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/5462/5462876.png" alt="img not found" style={{width:'80px',height:'80px'}}/>
                        <h6 style={{color:'#5a666c'}}>TRUSTPAY</h6>
                        <p style={{fontSize:'14px',color:'#a7a9aa'}}>100% Payment Protection. Easy</p>
                        <p style={{fontSize:'14px',color:'#a7a9aa'}}>Return Policy</p>
                    </a>
                </div>
                <div className='col col-xxl-4' style={{ borderRight: '1px solid #a7a9aa' }}>
                    <a href="https://www.snapdeal.com/help?redirectFrom=footerstrip" style={{textDecoration:'none' }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/9670/9670815.png" alt="Img not found" style={{width:'80px',height:'80px'}}/>
                        <h6 style={{color:'#5a666c'}}>HELP CENTER</h6>
                        <p style={{fontSize:'14px',color:'#a7a9aa'}}>Got a question? Look no further.</p>
                        <p style={{fontSize:'14px',color:'#a7a9aa'}}>Browse our FAQs or submit your query </p>
                        <p style={{fontSize:'14px',color:'#a7a9aa'}}>here.</p>
                    </a>
                </div>
                <div className='col col-xxl-4' style={{ borderRight: '1px solid #a7a9aa'}}>
                    <a href="https://play.google.com/store/apps/details?id=com.snapdeal.main&amp;utm_source=web_footer&amp;utm_campaign=android" style={{textDecoration:'none' }}>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/654/524/original/smartphone-device-icon-vector.jpg" alt="img not found" style={{width:'80px',height:'80px'}}/>
                        <h6 style={{color:'#5a666c'}}>SHOP ON THE GO</h6>
                        <p style={{fontSize:'14px',color:'#a7a9aa'}}>Download the app and get exciting</p>
                        <p style={{fontSize:'14px',color:'#a7a9aa'}}>app only offers at your fingertips</p>
                    </a>
                </div>
                
            </div>
            
        </Fragment>
        
    );
}

export default Rowfooter;