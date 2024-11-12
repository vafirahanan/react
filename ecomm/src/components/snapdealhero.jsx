import React, { Fragment } from 'react';
import { Card , Carousel, CarouselItem } from 'react-bootstrap'; 
import { FaSearch } from "react-icons/fa";

const Snapdealhero = () => {
    return (
        <Fragment>
            <div style={{display:'flex',marginTop: '20px',marginLeft:'20px' }} >
                <div>
                <div style={{ width: '230px', height: '800px', background: '#dee6ea', alignContent:"center"}} className='container'>
                    <p style={{fontSize:'12px', textAlign:'start'}}>TOP CATAGORIES</p>
                    
                    <div style={{fontSize:'14px',color:'#a7a9aa',display:'flex'}}>
                        <div>
                            <img src="https://th.bing.com/th/id/OIP.XCX6Exwt1XnFdXN8tju9IgHaKL?w=178&h=245&c=7&r=0&o=5&pid=1.7" alt="not found" style={{borderRadius:'50%', height:'20px',width:'20px'}}/>
                        </div>
                        <p style={{marginLeft:'10px',cursor:'pointer'}}>Men's Fashion</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',display:'flex'}}>
                        <div>
                            <img src="https://www.bing.com/th?id=OIP.PsY-d92RHTRxab7lYPAe3AHaLL&w=129&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="not found" style={{borderRadius:'50%', height:'20px',width:'20px'}}/>
                        </div>
                        <p style={{marginLeft:'10px',cursor:'pointer'}}>Women's Fashion</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',display:'flex'}}>
                        <div>
                            <img src="https://www.bing.com/th?id=OIP.g_arnIKRzX8mpZwjOKwVGwHaE-&w=186&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="not found" style={{borderRadius:'50%', height:'20px',width:'20px'}}/>
                        </div>
                        <p style={{marginLeft:'10px',cursor:'pointer'}}>Home and Kitchen</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',display:'flex'}}>
                        <img src="https://ts1.mm.bing.net/th?id=OIP.TsLG6edghBJrOoAmI238qgHaHa&pid=15.1" alt="not found" style={{borderRadius:'50%', height:'20px',width:'20px'}}/>
                        <p style={{marginLeft:'10px',cursor:'pointer'}}>Toys,Kid's Fashion and m..</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',display:'flex'}}>
                        <img src="https://ts3.mm.bing.net/th?id=OIP.8H7G7oul7JRUt-kScw7NmgHaHL&pid=15.1" alt="not found" style={{borderRadius:'50%', height:'20px',width:'20px'}}/>
                        <p style={{marginLeft:'10px',cursor:'pointer'}}>Beauty,Health and daily..</p>
                    </div>
                    <p style={{fontSize:'12px', textAlign:'start'}}>MORE CATAGORIES</p>
                    <a href="#" className='text-decoration-none' style={{color:'#a7a9aa'}}>
                    <div style={{fontSize:'14px'}}>
                        <p>Automotives</p>
                    </div></a>
                    <div style={{fontSize:'14px',color:'#a7a9aa',cursor:'pointer'}}>
                        <p>Mobile and accessories</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',cursor:'pointer'}}>
                        <p>Electronics</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',cursor:'pointer'}}>
                        <p>Sports, Fitness & Outdoor</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',cursor:'pointer'}}>
                        <p>Computers & Gaming</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',cursor:'pointer'}}>
                        <p>Books, Media & Music</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',cursor:'pointer'}}>
                        <p>Hobbies</p>
                    </div>
                    <p style={{fontSize:'12px', textAlign:'start'}}>TRENDING SEARCHES</p>
                    <div style={{fontSize:'14px',color:'#a7a9aa',display:'flex'}}>
                        <FaSearch />
                        <p style={{marginLeft:'10px'}}>Kitchen Products</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',display:'flex'}}>
                        <FaSearch />
                        <p style={{marginLeft:'10px'}}>Shoes for Men</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',display:'flex'}}>
                        <FaSearch />
                        <p style={{marginLeft:'10px'}}>Kurti Set</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',display:'flex'}}>
                        <FaSearch />
                        <p style={{marginLeft:'10px'}}>Sandal Men</p>
                    </div>
                    <div style={{fontSize:'14px',color:'#a7a9aa',display:'flex'}} >
                        <FaSearch />
                        <p style={{marginLeft:'10px'}}>Sports Shoe Men</p>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '20px', position:'relative'}}>
                <img src="https://th.bing.com/th?id=OSK.1c622d34a143c009ba9fbaf10b10253c&w=46&h=46&c=11&rs=1&qlt=80&r=0&o=6&dpr=2&pid=SANGAM" alt="not found" style={{ height: '80px', width: "80px" }} />
                <div style={{ marginLeft: '20px' }}>
                    <p style={{ fontSize: '14px', margin: 0 }}>Enjoy Convenient</p>
                    <p style={{ fontSize: '14px', margin: 0 }}>Order tracking</p>
                </div>
            </div>
            </div>
                <div>
                <div style={{ width: '1000px', marginLeft: '40px', display:'flex'}}>
                    <div>
                        <Carousel slide={false} interval={3000}>
                           
                            <Carousel.Item>
                                <img
                                    src="https://n4.sdlcdn.com/imgs/k/s/i/bedsheets0512-a7f6e.jpg"
                                    alt="First slide"
                                    style={{ width: '665px', height: '250px' }}
                                    id="first" 
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                    src="https://cdn1.plotch.io/assets/images/1724908436_SGVhZHBob25lcyZFYXJwaG9uZXMuanBn.jpg"
                                    alt="Second slide"
                                    style={{ width: '100%', height: '250px' }} 
                                    id = "sec"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                    src="https://cdn1.plotch.io/assets/images/1724908441_RXRobmljd2Vhci5qcGc=.jpg"
                                    alt="Third slide"
                                    style={{ width: '100%', height: '250px' }} 
                                    id = "third"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                    src="https://cdn1.plotch.io/assets/images/1724908461_T3JhbENhcmUuanBn.jpg"
                                    alt="Forth slide"
                                    style={{ width: '100%', height: '250px' }}
                                    id = "fouth" 
                                />
                            </Carousel.Item>
                        </Carousel>
                        {/* <div style={{height:'50px',textAlign:'center',overflow:'hidden',background:'#f1f2f5',marginLeft:'.1px',marginRight:'.1px'}} className='row align-items-center'>
                            <div className='col'><a href={#first} className='text-decoration-none text-dark'>First</a></div>
                            <div className='col'><a href={#sec} className='text-decoration-none text-dark'>Second</a></div>
                            <div className='col'><a href={#third} className='text-decoration-none text-dark'>Third</a></div>
                            <div className='col'><a href={#fourth} className='text-decoration-none text-dark'>Fourth</a></div>
                        </div> */}
                    </div>
                    
                    {/* <img src="https://n2.sdlcdn.com/imgs/k/x/a/India-100-Envisioning-Tomorrow-s-SDL933213784-1-e1363.jpg" alt="Not found"
                    style={{ width: '400px', height: '300px'}} /> */}
                    
                        <Card style={{marginLeft:'60px', width:'250px',height:'300px'}}>
                            <Card.Img img src="https://blog.monetizedeal.com/wp-content/uploads/2024/04/snapdeal-affiliate-program.png" alt="image not found"  style={{height:'100px'}}/>
                            <Card.Body>
                                <Card.Text style={{textAlign:'center',fontSize:'14px',padding:'20px'}}>
                                    <p >Login to your 
                                        <br /> Snapdeal account</p>
                                    <button style={{color:'white', background:'black', width:'125px',borderRadius:'6px'}}>Login</button>
                                    <div style={{marginTop:'20px', display:'flex'}}>
                                    <p>New user? <a href="#">Register</a></p>
                                    <button style={{marginLeft:'10px',height:'25px',fontSize:'14px'}}>NEXT</button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    

                    
                    
                </div>
                
                <div style={{marginTop:'60px',marginLeft:'20px',marginRight:'20px'}}>
                    <h4>TRENDING PRODUCTS</h4>
                    <Carousel style={{marginTop:'10px'}}>
                        <CarouselItem>
                            <div className='row'>
                                {/* <img src="https://cdn1.plotch.io/assets/images/1724908455_SG9tZURlY29yLmpwZw==.jpg" alt="not found" style={{ width: '950px', height: '600px',marginTop:'40px',marginLeft:'35px' }} /> */}
                                <div className='col'>
                                    <Card style={{height:'400px'}}>
                                        <Card.Img variant="top" src="https://t1.sdlcdn.com/imgs/i/n/r/large/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg" />
                                        <Card.Body>
                                        <Card.Text>
                                        <div class="product_name">Shiv Trishul Damru Gold-plated Locket with Rudraksha Mala</div>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col'>
                                    <Card style={{height:'400px'}}>
                                        <Card.Img variant="top" src="https://t3.sdlcdn.com/imgs/i/u/v/large/HeelSocks1-aeb5a.jpg" />
                                        <Card.Body>
                                        <Card.Text>
                                        <div class="product_name">Stay healthy - Foot Protector (Free Size)</div>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col'>
                                <Card style={{height:'400px'}}>
                                        <Card.Img variant="top" style={{height:'280px'}} src="https://t3.sdlcdn.com/imgs/i/z/j/large/bc12-606ed.jpg" />
                                        <Card.Body>
                                        <Card.Text>
                                        <div class="product_name">Maxbell USB rechargeable Electronic Flameless Lighter</div>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col'>
                                <Card style={{height:'400px'}}>
                                        <Card.Img variant="top" src="https://t1.sdlcdn.com/imgs/j/d/1/large/Aadi-Black-Casual-Shoes-SDL461191496-3-fa710.jpeg" />
                                        <Card.Body>
                                        <Card.Text>
                                        <div class="product_name">Aadi Black Casual Shoes</div>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className='row'>
                                {/* <img src="https://cdn1.plotch.io/assets/images/1724908455_SG9tZURlY29yLmpwZw==.jpg" alt="not found" style={{ width: '950px', height: '600px',marginTop:'40px',marginLeft:'35px' }} /> */}
                                <div className='col'>
                                    <Card style={{height:'400px'}}>
                                        <Card.Img variant="top" src="https://t4.sdlcdn.com/imgs/k/w/k/large/Bentag-kitchenware-Vegetable-Fruit-Clever-SDL841893040-1-1e2e8.jpg" />
                                        <Card.Body>
                                        <Card.Text>
                                        <div class="product_name">Bentage Kitchenware vegitable & Fruit Clever Cutter Stainless..</div>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col'>
                                    <Card style={{height:'400px'}}>
                                        <Card.Img variant="top" src="https://t1.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL051246309-1-51a91.jpg" />
                                        <Card.Body>
                                        <Card.Text>
                                        <div class="product_name">Veirdo- Multicolor Cotton Regular Fit Men's T-Shirts</div>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col'>
                                <Card style={{height:'400px'}}>
                                        <Card.Img variant="top" src="https://t3.sdlcdn.com/imgs/h/r/s/large/Shiv-Shakti-Kavach-5-Mukhi-SDL772359305-1-3b306.jpeg" />
                                        <Card.Body>
                                        <Card.Text>
                                        <div class="product_name">Shiv Shakti kavaj 5 Rudrakshamal with Shiv..</div>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col'>
                                <Card style={{height:'400px'}}>
                                        <Card.Img variant="top" src="https://t3.sdlcdn.com/imgs/k/o/6/large/Battlestar-Tummy-Trimmer-Pack-of-SDL774194847-1-3aa54.jpeg" />
                                        <Card.Body>
                                        <Card.Text>
                                        <div class="product_name">Battlestar - Tummys Trimmer (Pack of 1)</div>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
            </div>
           
        </Fragment>
    );
}

export default Snapdealhero;