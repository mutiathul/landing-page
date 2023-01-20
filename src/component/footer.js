import React, { Component, Fragment } from 'react'
import "../component/footer.css"
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
            <Col lg={{span:3}} md={{span:3}} sm={{span:2}}  xs={{span:2}}>

            </Col>
            <Col lg={{span:4}}  md={{span:4}} sm={{span:4}} xs={{span:4}} style={{marginTop:'70px',}}>
          <div className='logoo'>
          <Image  src={logo} />
          </div>
            </Col>
            <Col lg={{span:8}}  md={{span:8}} sm={{span:16}} xs={{span:16}}>
                <Row align='middle' justify='space-around'>
                  <Col span={12}>
                  <div className='down1'>
          <Image  src={dw1} />
          </div>
                
                  </Col>
                  <Col span={12}>
                  <div className='down2'>
          <Image  src={dw2} />
          </div>
                  </Col>
                </Row>
                <Row >
                <Col span={2}>

                </Col>
                <Col span={4}>
                <div className='sosmed'>
                <Image src={linkedin} />
                </div>
                
                </Col>
                <Col span={4}>
                <div className='sosmed'>
                <Image src={ig} />
                </div>
                
                </Col>
                <Col span={4}>
                <div className='sosmed'>
                <Image src={wa} />
                    </div>
               
                </Col>
                <Col span={4}>
                <div className='sosmed'>
                <Image src={fb} />
                    </div>
               
                </Col>
                <Col span={4}>
                <div className='sosmed'>
                <Image src={twitter} />
                    </div>
              
                </Col>
                <Col span={2}>
                
                </Col>
  
                </Row>
            </Col>
            
            <Col lg={{span:3}} md={{span:3}} sm={{span:10}} xs={{span:10}}style={{marginTop:'30px', marginLeft:'20px'}}>
             
            <div className='div_text'>
            <Row>
                    <text className='textt'>
                      Home 
                    </text>
            </Row>
            <Row>
                    <text className='textt'>
                     About NUBI
                    </text>
            </Row>
            <Row>
                    <text className='textt'>
                      Feature
                    </text>
            </Row>
            <Row>
                    <text className='textt'>
                     Reward
                    </text>
            </Row>
            </div>
              
            </Col>
            <Col lg={{span:3}} md={{span:3}} sm={{span:10}} xs={{span:10}}style={{marginTop:'30px', marginLeft:'20px'}}>
             
            <div className='div_textt'> 
            <Row>
                     <text className='textt'>
                       Event 
                     </text>
             </Row>
             <Row>
                     <text className='textt'>
                      News
                     </text>
             </Row>
             <Row>
                     <text className='textt'>
                       Contact Us
                     </text>
             </Row>
             <Row>
                     <text className='textt'>
                      Privacy Policy
                     </text>
             </Row>
            </div>
               
             </Col>
            <Col lg={{span:3}} md={{span:3}} sm={{span:2}} xs={{span:2}}>
              
              </Col>
          </Row>
        </div>
            </div>
        );
    }
}

export default Footer;
