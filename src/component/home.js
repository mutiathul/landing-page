import React, { Component, Fragment } from 'react'

import "../component/home.css"
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
// import Footer from '../asset/home/footer.jpg'
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
import { Button, Image, Row, Col, Card } from 'antd'
import Title from 'antd/es/typography/Title'
import earn from '../asset/home/find to earn.png'
import bawah from '../asset/home/panah bawah.png'
import atas from '../asset/home/panah atas.png'
import Footer from './footer'
import Header from './header'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
         <div style={{ background: `url(${Bg1})`, width:'100%' }} >
          <Row >
            <Col lg={{span:10}} md={{span:24}} sm={{span:24}} xs={{span:24}}>
              
                <div className='page1'>
                  <Row>
                    <text className='welcome'>WELCOME</text>
                  </Row>
                  <Row>
                    <text className='nubiText'>TO NUBI GO</text>

                  </Row>
                  <Row>
                    <text className='ar'>AUGMENTED REALITY</text>

                  </Row>
                  <Row>
                    <p className='pp_pg1'>
                      Games Augmented Reality PERTAMA DI INDONESIA dengan konsep "FINDE2EARN"!!!
                      Bermain Games sambil berpetualang dengan cara yang seru, dan berpeluang mendapatkan banyak REWARD!
                    </p>
                  </Row>
                  <Row>
                    <p className='p11_pg1'>
                      Main game dapat hadiah ?? Mau??
                    </p>
                  </Row>
                  <Row>
                    <p className='p11_pg1'>
                      Download Sekarang!!!
                    </p>
                  </Row>
                  <Row>
                    <Col span={2}>
                    
                    </Col>
                    <Col span={10}>
                      <div className='dww1'>
                      <Image src={dw1}  preview={false}/>
                      </div>
                    </Col>
                    <Col span={10}>
                    <div className='dww2'>
                      <Image src={dw2}  preview={false}/>
                      </div>
                    </Col>
                    <Col span={2}>
                    
                    </Col>
                  </Row>

                 
                </div>
                

              
            </Col>
            <Col lg={{span:14}} md={{span:24}} sm={{span:24}} xs={{span:24}} >
            <div className='banner'>
            <Image  src={banner} preview={false} />    
            </div>  
           
            </Col>
          </Row>
        </div>

        <div className='bgg2'>
          <Row >
            <Col lg={{span:12}} xs={{span:24}} sm={{span:24}}>
              <div style={{ display: 'flexbox', flexDirection: 'row', }}>
                <div className='div_pg2'>

                  <Row>
                    <text className='ar2'>
                      AUGMENTED REALITY
                    </text>

                  </Row>
                  <div className='div_find'>
                  <Row style={{ marginTop: '1em', marginBottom: '1em', marginLeft: '-20px' }}>
                    <Col xl={{ span:12, pull:2}} lg={{ span:12,}} xs={{span:12}}>
                      <div className='find_imagee'>
                      <Image  src={earn} />
                      </div>
                      <p className='find'>FIND TO EARN</p>
                    </Col>
                    <Col xl={{ span:12, pull:4}}  sm={{ span:12}} md={{ span:12,}} lg={{ span:12,}} xs={{span:12}}>
                    <div className='find_imagee2'>
                      <Image  src={earn} />
                      </div>
                      <p className='find2'>FIND TO EARN</p>
                    </Col>
                  </Row>
                  </div>
                 <div className='row_pp2'>
                 <Row>
                    <p className='pp_pg2'>
                      NUBI GO adalah permainan realitas dengan konsep petualangan
                      mencari HARTA KARUN. dimana beragam reward telah di sebar ke
                      beberapa titk dalam koordinat peta dan tugas dari pemain adalah
                      mengumpulkan ENERGY dan mengambil reward yang telah di sebar.
                      Petualangan dan pengumpulan reward ini menggunakan Teknology
                      " Augmented Reality".
                    </p>
                  </Row>
                  <Row>
                    <p className='pp_pg2'>
                      Augmented Reality atau AR adalah teknologi yang memperoleh
                      penggabungan secara real-time terhadap digital konten yang
                      dibuat oleh komputer dengan dunia nyata. Augmented Reality
                      memperbolehkan pengguna melihat objek maya 2D atau 3D yang
                      diproyeksikan terhadap dunia nyata.
                    </p>
                  </Row>
                  <Row>
                    <p className='pp_pg2'>
                      Dengan teknologi tersebut NUBI GO mengembangkan sebuah
                      permainan ONLINE dimana dengan memainkan Game ini kita
                      bisa mengumpulkan Hadiah-hadiah dalam bentuk kepingan
                      puzzle dimana setelah lengkap dapat kita satukan dan claim.
                    </p>
                  </Row>
                 </div>
                </div>
        

              </div>
            </Col>
            <Col lg={{span:12}} xs={{span:24}} sm={{span:24}} style={{ marginTop: '5em' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  <Row >
                    <div className='image_pg2'>
                    <Image src={logo}  />
                    </div>
                  </Row>
                  <Row  >
                    <div className='image2_pg2'>
                    <Image  src={hp} />
                    </div>
                  </Row>
                 
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div style={{ background: `url(${Bg3})`, backgroundSize: '101%', height: 'auto', marginTop: '-5em', backgroundRepeat: 'no-repeat', marginLeft: '-1em', width:'auto' }}>
          <Col xl={{span:5}} lg={{span:3}} xs={{span:2}}>

          </Col>

          <Col xl={{span:14}} lg={{span:18}} xs={{span:20}} className='col_partner'>

            <div>
              <Row>
                <p  className='partner'>
                  OUR PARTNER
                </p>

              </Row>
              <Row>
                <p className='p_partner'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Row>
            </div>

          </Col>

          <Col xl={{span:5}} lg={{span:3}} xs={{span:2}}>

          </Col>

        </div>
        <div style={{ background: `url(${Bg4})`, height: 'auto', backgroundSize: '135%', backgroundRepeat: 'no-repeat', marginLeft: '-30em' , width:'auto'}}>
          <div>
            <Col span={2}>

            </Col>

            <Col span={20} style={{ marginLeft: '17em' }}>

              <div>
                <Row>
                  <p className='media'>
                    OUR MEDIA PARTNER
                  </p>

                </Row>

              </div>

            </Col>

            <Col span={2}>

            </Col>
          </div>
        </div>
        <div className='bg5'>
          <div>
            <Col span={4}>

            </Col>

            <Col span={16} style={{ marginLeft: '15em' }}>

              <div>
                <Row>
                  <text className='faq'>
                    FREQUENTLY ASK QUESTION (FAQ)
                  </text>

                </Row>
                <Row>
                  <div
                  className='box'
                    //  title="Card title"
                    //  bordered={false}
                    // style={{
                    //   //  width: 300,
                    //   marginLeft: '50.5em',
                    //   background: 'white',
                    //   width: '500px', height: '60px', border: '1px solid blue',
                    //   marginTop: '2em'
                    // }}
                  >
                    <Row>
                      <Col span={1}>

                      </Col>
                      <Col span={16} className='col_topfaq'>
                        <p className='faq_font'>Dimana bisa download aplikasi ?</p>
                      </Col>
                      <Col span={7}>
                        <div className='faq_icon'>
                            <Image src={bawah}  />
                        </div>
                      </Col>
                    </Row>

                  </div>
                </Row>
                <Row>
                  <div
                  className='box'
                    //  title="Card title"
                    //  bordered={false}
                  
                  >
                    <Row>
                      <Col span={1}>

                      </Col>
                      <Col span={16} className='col_topfaq'>
                        <p className='faq_font'>Apakah aplikasi ini gratis ?</p>
                      </Col>
                      <Col span={7}>
                        <div className='faq_icon'>
                        <Image src={bawah}  /></div>
                      </Col>
                    </Row>



                  </div>
                </Row>
                <Row>
                  <div
                    //  title="Card title"
                    //  bordered={false}
                    // style={{
                    //   //  width: 300,
                    //   marginLeft: '50.5em',
                    //   background: 'white',
                    //   width: '500px', height: 'auto', border: '1px solid blue',
                    //   marginTop: '2em',

                    // }}
                    className='box2'
                  >
                    <Row>
                      <Col span={1}>

                      </Col>
                      <Col span={16} className='col_topfaq'>
                        <p className='faq_font'>Apakah aplikasi ini gratis ?</p>
                      </Col>
                      <Col span={7}>
                        <div className='faq_icon'>
                        <Image  src={atas} />
                        </div>
                        
                      </Col>
                    </Row>
                    <Row>
                      <Col span={2}>

                      </Col>
                      <Col span={20}>
                        <p className='faq_lore'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </Col>
                      <Col span={2}>

                      </Col>
                    </Row>

                    <Row>
                      <Col span={4} >
                      </Col>
                      <Col span={20} style={{ marginTop: '17px', marginBottom: '20px' }}>
                        <text className='faq_text'> apakah artikel ini membantu?</text>
                        <Button ghost type='primary' className='faq_Button' shape='round' size='small'>ya</Button>
                        <Button ghost type='primary' className='faq_Button' shape='round' size='small'>Tidak</Button>
                      </Col>
                    </Row>

                  </div>
                </Row>
                <Row>
                  <div
                    //  title="Card title"
                    //  bordered={false}
                    // style={{
                    //   //  width: 300,
                    //   marginLeft: '50.5em',
                    //   background: 'white',
                    //   width: '500px', height: '60px', border: '1px solid blue',
                    //   marginTop: '2em'
                    // }}
                    className='box'
                  >
                    <Row >
                      <Col span={1}>

                      </Col>
                      <Col span={16} className='col_topfaq'>
                        <p className='faq_font'>Bagaimana cara menukarkan hadiah ?</p>
                      </Col>
                      <Col span={7}>
                        <div className='faq_icon'>
                        <Image  src={bawah}  /></div>
                      </Col>
                    </Row>



                  </div>
                </Row>
                <Row>
                  <div
                    //  title="Card title"
                    //  bordered={false}
                    // style={{
                    //   //  width: 300,
                    //   marginLeft: '50.5em',
                    //   background: 'white',
                    //   width: '500px', height: '60px', border: '1px solid blue',
                    //   marginTop: '2em',
                    //   marginBottom: '7em'
                    // }}
                    className='box1'
                  >
                    <Row>
                      <Col span={1}>

                      </Col>
                      <Col span={16} style={{ marginTop: '17px', }}>
                        <p className='faq_font'>Sampai kapan hadiah pada NUBI GO ?</p>
                      </Col>
                      <Col span={7}>
                        <div className='faq_icon'>
                        <Image  src={bawah}  /></div>
                      </Col>
                    </Row>



                  </div>
                </Row>

              </div>

            </Col>

            <Col span={4}>

            </Col>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}



