import React, { Fragment } from 'react';
import { FaCcVisa } from "react-icons/fa";
import { LiaCcAmex } from "react-icons/lia";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDinersClub } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFillMouseFill } from "react-icons/bs";

const Info = () => {
    return (
        
        <Fragment>
            <hr />
            <div style={{display:'flex'}} className='container'>
                <div>
                    <p style={{fontWeight:'3'}}>PAYMENT</p>
                    <div class="middleBottomFooterImgs" style={{display:'flex'}}>
                        <FaCcVisa style={{ width: '30px', height: '40px',color:'#fbdc05'}}/>
                        <LiaCcAmex style={{ width: '30px', height: '40px',marginLeft:'10px',color:'#bcf6eb'}} />
                        <FaCcMastercard style={{ width: '30px', height: '40px',marginLeft:'10px',color:'#c884e2'}}/>
                        <FaCcDinersClub style={{ width: '30px', height: '40px',marginLeft:'10px',color:'#578feb'}}/>
                        <div style={{display:'flex',textAlign:'center',height:'26px',background:'#daeae6',marginTop:'8px',width:'60px',marginLeft:'10px'}}>
                            <LiaRupeeSignSolid style={{ width: '20px', height: '30px'}} />
                            <div>
                                <p style={{fontSize:'10px'}}>cash on</p>
                                <p style={{fontSize:'10px',marginTop:"-19px"}}>delivery</p>
                            </div>
                        </div>
                        <div style={{display:'flex',textAlign:'center',height:'26px',background:'#daeae6',marginTop:'8px',width:'60px',marginLeft:'10px'}}>
                            <BsFillMouseFill style={{ width: '20px', height: '25px'}} />
                            <div>
                                <p style={{fontSize:'10px'}}>cash on</p>
                                <p style={{fontSize:'10px',marginTop:"-19px"}}>delivery</p>
                            </div>
                        </div>
					   
				    </div>
                </div>
                <div style={{marginLeft:'300px'}}>
                    <p style={{fontWeight:'3'}}>CONNECT</p>
                        <div>
                        <FaFacebook style={{ width: '30px', height: '40px',color:'#337ab7'}}/>
                        <AiFillTwitterCircle style={{ width: '32px', height: '47px',color:'#6fc2f2',marginLeft:'10px'}}/>
                        <FaInstagramSquare style={{ width: '28px', height: '33px',color:'linear-gradient(to bottom, #33ccff 0%, #ff00ff 100%)',marginLeft:'10px'}}/>
                        <FaLinkedin style={{ width: '28px', height: '33px',color:'#337ab7',marginLeft:'10px'}} />
                        <SiYoutubemusic style={{ width: '28px', height: '33px',color:'red',marginLeft:'10px'}} />
                        <FaTelegram style={{ width: '28px', height: '33px',color:'#337ab7',marginLeft:'10px'}}/>
                        <IoLogoWhatsapp style={{ width: '28px', height: '33px',color:'green',marginLeft:'10px'}}/>
                        </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Info;