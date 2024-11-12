import React from 'react';


const Policy = () => {
    return (
        <div className='d-flex container' >
            
            <ul style={{marginTop: '40px'}} className ="col-xs-5">
                <h6>POLICY INFO</h6>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://www.snapdeal.com/page/privacy-policy">Privacy Policy</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://www.snapdeal.com/page/terms-of-sale">Terms of Sale</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://www.snapdeal.com/offers/terms-of-use">Terms of Use</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://www.snapdeal.com/page/abusePolicy">Report Abuse &amp; Takedown Policy</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://www.services.bis.gov.in/php/BIS_2.0/bisconnect/knowyourstandards/indian_standards/isdetails/">Know Your BIS Standard</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://www.bis.gov.in/products-under-compulsory-certification/">Products Under Cumpulsory BIS Certification</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://www.snapdeal.com/faq/faqhome">FAQ</a></li>
            </ul>
            <ul style={{marginTop: '40px'}} className ="col-xs-4">
                <h6>COMPANY</h6>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://impactatsnapdeal.com">Impact@Snapdeal</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://jaspercareers.peoplestrong.com/">Careers</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="http://blog.snapdeal.com/">Blog</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://www.snapdeal.com/info/sitemap">Sitemap</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }}class="underLineOnHover" href="https://www.snapdeal.com/faq/faqCustomerCare">Contact Us</a></li>
                
            </ul>
            <ul style={{marginTop: '40px'}} className ="col-xs-4">
                <h6>SNAPDEAL BUSINESS</h6>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://play.google.com/store/apps/details?id=com.snapdeal.main&amp;hl=en_IN">Shopping App</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="http://sellers.snapdeal.com/">Sell on Snapdeal</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="mailto:mediarelations@snapdeal.com">Media Enquiries</a></li>
            </ul>
            <ul style={{marginTop: '40px'}} className ="col-xs-4">
                <h6>POPULAR LINKS</h6>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://www.snapdeal.com/products/women-apparel-lehenga">Lehenga</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://www.snapdeal.com/products/kids-clothing">Kid's Clothing</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://www.snapdeal.com/products/women-apparel-sarees">Sarees</a></li>
                <li style={{listStyleType:'none'}}><a style={{ textDecoration: 'none', color:'#a7a9aa',fontSize:'14px' }} class="underLineOnHover" href="https://www.snapdeal.com/products/mens-winter-wear-store">Winter Wear</a></li>
            </ul>
            <ul style={{marginTop: '40px'}} className ="col-xs-6">
                <h6>SUBSCRIBE</h6>
                <input type="text" placeholder='You email address' class="col-xs-15 subscribeInputBox" style={{fontSize:'14px'}}/>
                <button class="col-xs-7 btn btn-dark subscribeBtn reset-padding" style={{width:'70px',marginLeft:'10px',textAlign:'center',fontSize:'12px'}}>Subscribe</button>
                <li style={{listStyleType:'none'}}><p class="registerSubscribeText col-xs-24 mt12 reset-padding" style={{fontSize:'12px', color:'#a7a9aa'}}>Register now to get updates on promotions and </p></li>
                <li style={{listStyleType:'none'}}><p class="registerSubscribeText col-xs-24 reset-padding" style={{fontSize:'12px',color:'#a7a9aa'}}>coupons. <span><a style={{ textDecoration: 'none', color:'#a7a9aa' }} href="https://play.google.com/store/apps/details?id=com.snapdeal.main">Or Download App</a></span></p></li>
            </ul>
        </div>
    );
}

export default Policy;