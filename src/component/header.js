import React, { Component, Fragment } from 'react'
import "../component/header.css"
import Bg1 from '../asset/home/bg1.jpg'
import logo from '../asset/home/logo.png'
import login from '../asset/home/download1.png'
import banner from '../asset/home/banner gambar.png'
import playstore from '../asset/home/playstore.png'
import Download from '../asset/home/download2.png'
import Bg2 from '../asset/home/bg2.jpg'
import Bg3 from '../asset/home/bg3.jpg'
import Bg4 from '../asset/home/bg4.jpg'
import Bg5 from '../asset/home/bg5.jpg'
import Footer from '../asset/home/footer.jpg'
import hp from '../asset/home/hp3.png'
import dw1 from '../asset/home/dww1.png'
import dw2 from '../asset/home/dww.png'
import ar from '../asset/home/augmented reality.png'
import ig from '../asset/home/instagram.png'
import linkedin from '../asset/home/linkedin.png'
import fb from '../asset/home/facebook.png'
import twitter from '../asset/home/twitter.png'
import wa from '../asset/home/whatsapp.png'
//import bawah from '../asset/home/augmented reality bawah gambar.png'
import { Button, Image, Row, Col, Card } from 'antd';
import Title from 'antd/es/typography/Title'
import earn from '../asset/home/find to earn.png'
import bawah from '../asset/home/panah bawah.png'
import atas from '../asset/home/panah atas.png'
export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavExpanded: false,

    }
  }
  addActiveClass() {
    this.setState({
      isNavExpanded: !this.state.isNavExpanded
    })
  }

  render() {
    return (
      <div style={{display:'block'}}>
        <nav className="navigation" style={{ background: `url(${Bg1})`, }}>

          <div href="/" className="brand-name">
            <Image width={150} src={logo}  />
          </div>

          <Button
            className="hamburger"
            onClick={() => this.addActiveClass()}
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <div
            className={
              this.state.isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <a href="/" style={{ color: 'white' }}>Home</a>
              </li>
              <li>
                <a href="/about" style={{ color: 'white' }}>About Nubi</a>
              </li>
              <li>
                <a href="/contact" style={{ color: 'white' }}>Feature</a>
              </li>
              <li>
                <a href="/contact" style={{ color: 'white' }}>Reward</a>
              </li>
              <li>
                <a href="/contact" style={{ color: 'white' }}>Event</a>
              </li>
              <li>
                <a href="/contact" style={{ color: 'white' }}>News</a>
              </li>
              <li>
                <a href="/contact" style={{ color: 'white' }}>Contact us</a>
              </li>
              <li>
                <Button type="primary" shape="round"
                  style={{
                    // width:'10vw',
                    //  marginTop:"18px",
                    //  top:'3%',
                    marginRight: '5px',

                    background: "#0b00ff",
                    background: "repeating-radial-gradient(circle farthest-corner at center center, #0b00ff 50%, rgba(0,49,255,0.73) 35%, #0073ff 20%)",
                    background: "-webkit-repeating-radial-gradient(circle farthest-corner at center center, #0b00ff 50%, rgba(0,49,255,0.73) 35%, #0073ff 20%)",
                    background: "-moz-repeating-radial-gradient(circle farthest-corner at center center, #0b00ff 50%, rgba(0,49,255,0.73) 35%, #0073ff 20%)"
                  }}
                >
                  Login
                </Button>
              </li>
            </ul>

          </div>
          <div >

          </div>



        </nav>

        
        {/* <div style={{ background: `url(${Footer})`, }} >
          <Row>
            <Col span={3}>

            </Col>
            <Col span={4} style={{marginTop:'70px',}}>
            <Image width={150} src={logo} />
            </Col>
            <Col span={8}>
                <Row>
                  <Col span={12}>
                  <Image width={150} src={dw1} />
                
                  </Col>
                  <Col span={12}>
                  <Image width={150} src={dw2} />
                  </Col>
                </Row>
                <Row >
                <Col span={2}>

                </Col>
                <Col span={4}>
                <Image width={50} src={linkedin} />
                </Col>
                <Col span={4}>
                <Image width={50} src={ig} />
                </Col>
                <Col span={4}>
                <Image width={50} src={wa} />
                </Col>
                <Col span={4}>
                <Image width={50} src={fb} />
                </Col>
                <Col span={4}>
                <Image width={50} src={twitter} />
                </Col>
                <Col span={2}>
                
                </Col>
  
                </Row>
            </Col>
            <Col span={3} style={{marginTop:'30px', marginLeft:'20px'}}>
             
            <Row>
                    <text style={{ color: 'white', fontWeight: '600', lineHeight:'2em', textAlign: 'left', fontSize: 20,   }}>
                      Home 
                    </text>
            </Row>
            <Row>
                    <text style={{ color: 'white', fontWeight: '600', lineHeight:'2em', textAlign: 'left', fontSize: 20,   }}>
                     About NUBI
                    </text>
            </Row>
            <Row>
                    <text style={{ color: 'white', fontWeight: '600', lineHeight:'2em', textAlign: 'left', fontSize: 20,   }}>
                      Feature
                    </text>
            </Row>
            <Row>
                    <text style={{ color: 'white', fontWeight: '600', lineHeight:'2em', textAlign: 'left', fontSize: 20,   }}>
                     Reward
                    </text>
            </Row>
              
            </Col>
            <Col span={3} style={{marginTop:'30px', marginLeft:'20px'}}>
             
             <Row>
                     <text style={{ color: 'white', fontWeight: '600', lineHeight:'2em', textAlign: 'left', fontSize: 20,   }}>
                       Event 
                     </text>
             </Row>
             <Row>
                     <text style={{ color: 'white', fontWeight: '600', lineHeight:'2em', textAlign: 'left', fontSize: 20,   }}>
                      News
                     </text>
             </Row>
             <Row>
                     <text style={{ color: 'white', fontWeight: '600', lineHeight:'2em', textAlign: 'left', fontSize: 20,   }}>
                       Contact Us
                     </text>
             </Row>
             <Row>
                     <text style={{ color: 'white', fontWeight: '600', lineHeight:'2em', textAlign: 'left', fontSize: 20,   }}>
                      Privacy Policy
                     </text>
             </Row>
               
             </Col>
            <Col span={3}>
              
              </Col>
          </Row>
        </div> */}
      </div>






    )
  }
}
