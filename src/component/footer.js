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
import footer from '../asset/home/footer.jpg'
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

class Footer extends Component {
    render() {
        return (
            <div>
                <div style={{ background: `url(${footer})`, }} >
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
        </div>
            </div>
        );
    }
}

export default Footer;
