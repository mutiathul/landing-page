import { Col, Image, Row,Button } from 'antd'
import React, { Component } from 'react'
import Bg1 from '../../asset/home/bg1.jpg'
import Bg2 from '../../asset/home/bg2.jpg'
import Bg3 from '../../asset/home/bg3.jpg'
import Bg4 from '../../asset/home/bg4.jpg'
import Bg5 from '../../asset/home/bg5.jpg'
import banner from '../../asset/home/banner gambar.png'
import './home.css'
import dw1 from '../../asset/home/dww1.png'
import dw2 from '../../asset/home/dww.png'
import logo from '../../asset/home/logo.png'
import hp3 from '../../asset/home/hp3.png'
import earn from '../../asset/home/find to earn.png'
import bawah from '../../asset/home/panah bawah.png'
import atas from '../../asset/home/panah atas.png'
import Header from '../../component/header'
import Footer from '../../component/footer'
export default class Home extends Component {
  render() {
    return (
      <div  >
        <Header />
        <div className='container'> 
        <Row >
            <Col  md={{span:12}} xs={{span:24}}>
                <Row>
                    <Col span={2}>

                    </Col>
                    <Col span={20}>
                    <div className='div_pg'>
                    <div className='welcome'>WELCOME</div>
                    <div className='tonubi'>TO NUBI GO</div>
                    <div className='ar'>AUGMENTED REALITY</div>
                    <p className='p'>
                      Games Augmented Reality PERTAMA DI INDONESIA dengan konsep "FINDE2EARN"!!!
                      Bermain Games sambil berpetualang dengan cara yang seru, dan berpeluang mendapatkan banyak REWARD!
                    </p>
                    <p className='p'>
                      Main game dapat hadiah ?? Mau??
                      
                    </p>
                    <p className='p'>
                      Download Sekarang!!!
                    </p>
                    <div>
                        <Row align='middle' justify='space-evenly ' >
                            <div className='div_dw'>
                            <Image src={dw1} width={150} preview={false}/>
                            </div>
                            <div className='div_dw2'>
                              <Image src={dw2} width={150} preview={false} />
                              </div> 
                            {/* <Col span={12}>
                            <div>
                            <Image src={dw1} width={150} />
                            </div>
                            </Col>

                            <Col span={12}>
                              <div>
                              <Image src={dw2} width={150} />
                              </div> 
                            </Col> */}
                        </Row>
                    </div>
                    
                </div>
                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
            </Col>

            <Col md={{span:12}}  xs={{span:24}}>
             <Row align='middle' justify='center'>
             <Col >
             <div  className='banner'>
             <Image src={banner} preview={false}/>
             </div>
             </Col>
             </Row>
            </Col>
        </Row>
      </div>
      <div style={{ background: `url(${Bg2})` }} >
      <Row align='middle' justify='end'>
        <Col >
             <div  className='loggo'>
             <Image src={logo} preview={false}/>
             </div>
        </Col>
        </Row>
        <Row>
            <Col md={{span:12}} xs={{span:24}}>
            <Row>
                    <Col span={2}>

                    </Col>
                    <Col span={20}>
                    <div >
                    <div className='arr'>AUGMENTED REALITY</div>
                    <div>
                        <Row align='middle' justify='space-evenly ' >
                            <div className='earn'>
                            <Image src={earn}  preview={false}/>
                            <text className='textearn'>Find To Earn</text>
                            </div>
                            <div className='earn2'>
                              <Image src={earn}  preview={false} />
                              <text className='textearn'>Find To Earn</text>
                              </div> 
                        </Row>
                    </div>
                    <p className='p'>
                    NUBI GO adalah permainan realitas dengan konsep petualangan
                      mencari HARTA KARUN. dimana beragam reward telah di sebar ke
                      beberapa titk dalam koordinat peta dan tugas dari pemain adalah
                      mengumpulkan ENERGY dan mengambil reward yang telah di sebar.
                      Petualangan dan pengumpulan reward ini menggunakan Teknology
                      " Augmented Reality".
                    </p>
                    <p className='p'>
                    Augmented Reality atau AR adalah teknologi yang memperoleh
                      penggabungan secara real-time terhadap digital konten yang
                      dibuat oleh komputer dengan dunia nyata. Augmented Reality
                      memperbolehkan pengguna melihat objek maya 2D atau 3D yang
                      diproyeksikan terhadap dunia nyata.
                      
                    </p>
                    <p className='p'>
                    Dengan teknologi tersebut NUBI GO mengembangkan sebuah
                      permainan ONLINE dimana dengan memainkan Game ini kita
                      bisa mengumpulkan Hadiah-hadiah dalam bentuk kepingan
                      puzzle dimana setelah lengkap dapat kita satukan dan claim.
                    </p>
                   
                    
                </div>
                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
            </Col>
            <Col md={{span:12}} xs={{span:24}}>
            <Row align='middle' justify='center'>
            <Col >
             <div  className='hp3'>
             <Image src={hp3} preview={false}/>
             </div>
            </Col>
            </Row>
            </Col>
        </Row>

      </div>
      <div style={{ background: `url(${Bg3})`, backgroundRepeat:'no-repeat',backgroundSize :'cover' }} >
        <Row align='middle' justify='center'>
            <div className='partner'>
            OUR PARTNER
            </div>
            
        </Row>
        <Row>
            <Col span={4}>

            </Col>
            <Col span={16}>
            <Row align='middle' justify='center'>
            <div>
            <p style={{textAlign:'left'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            
        </Row>
            </Col>
            <Col span={4}>

            </Col>
        </Row>


      </div>
      <div style={{ background: `url(${Bg4})`, backgroundRepeat:'no-repeat',backgroundSize :'cover' }} >
        <Row align='middle' justify='center'>
            <div className='media'>
            OUR MEDIA PARTNER
            </div>
            
        </Row>
      

      </div>
      <div style={{ background: `url(${Bg5})`, backgroundRepeat:'no-repeat',backgroundSize :'cover' }} >
        <Row align='middle' justify='center'>
            <div className='faq'>
            FREQUENTLY ASK QUESTION (FAQ)
            </div>
            
        </Row>
        <Row align='middle' justify='center'>
            <div>
                <div>
                <Row align='middle' justify='center'>
                <div className='box'>
                <Row >
                <Col span={18}>
                        <Row  align='middle' justify='start'>
                        <div className='textBox'>
                        Dimana bisa download aplikasi ?
                        </div>
                        </Row>
                      </Col>
                      <Col span={6}>
                       <Row justify='end'>
                       <div className='arrowD'>
                       <Image src={bawah} width={20} preview={false}/>
                        </div>
                       </Row>

                      </Col>
                </Row>
                </div>
                </Row>
                </div>
                <div>
                <Row align='middle' justify='center'>
                <div className='box'>
                <Row >
                <Col span={18}>
                        <Row  align='middle' justify='start'>
                        <div className='textBox'>
                        Apakah aplikasi ini gratis ?
                        </div>
                        </Row>
                      </Col>
                      <Col span={6}>
                       <Row justify='end'>
                       <div className='arrowD'>
                       <Image src={bawah} width={20} preview={false}/>
                        </div>
                       </Row>

                      </Col>
                </Row>
                </div>
                </Row>
                </div>
                <div>
                <Row align='middle' justify='center'>
                <div className='box'>
                <Row >
                <Col span={19}>
                        <Row  align='middle' justify='start'>
                        <div className='textBox'>
                        Apakah aplikasi ini gratis ?
                        </div>
                        </Row>
                      </Col>
                      <Col span={5}>
                       <Row justify='end'>
                       <div className='arrowD'>
                       <Image src={atas} width={20} preview={false}/>
                        </div>
                       </Row>

                      </Col>
                
                    
                </Row>
                <Row>
            <Col span={2}>

            </Col>
            <Col span={20}>
            <Row align='middle' justify='center'>
            <div>
            <p style={{textAlign:'left'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            
        </Row>
            </Col>
            <Col span={2}>

            </Col>
        </Row>
        <Row >
                <Col md={{span:12}} xs={{span:24}}>
                        <Row  align='middle' justify='start'>
                        <div className='textBox'>
                        apakah artikel ini membantu?
                        </div>
                        </Row>
                      </Col>
                      <Col md={{span:12}} xs={{span:24}}>
                       <Row justify='end'>
                       <div className='arrowD'>
                       <Button ghost type='primary' className='faq_Button' shape='round' size='small' style={{marginRight:'10px'}}>ya</Button>
                        <Button ghost type='primary' className='faq_Button' shape='round' size='small'>Tidak</Button>
                        </div>
                       </Row>

                      </Col>
                
                    
                </Row>
       

                </div>
                </Row>
                </div>
                <div>
                <Row align='middle' justify='center'>
                <div className='box'>
                <Row >
                <Col span={18}>
                        <Row  align='middle' justify='start'>
                        <div className='textBox'>
                        Bagaimana cara menukarkan hadiah ?
                        </div>
                        </Row>
                      </Col>
                      <Col span={6}>
                       <Row justify='end'>
                       <div className='arrowD'>
                       <Image src={bawah} width={20} preview={false}/>
                        </div>
                       </Row>

                      </Col>
                </Row>
                </div>
                </Row>
                </div>
                <div>
                <Row align='middle' justify='center'>
                <div className='box'>
                <Row >
                <Col span={18}>
                        <Row  align='middle' justify='start'>
                        <div className='textBox'>
                        Sampai kapan hadiah pada NUBI GO ?
                        </div>
                        </Row>
                      </Col>
                      <Col span={6}>
                       <Row justify='end'>
                       <div className='arrowD'>
                       <Image src={bawah} width={20} preview={false}/>
                        </div>
                       </Row>

                      </Col>
                </Row>
                </div>
                </Row>
                </div>
                
              
            </div>
        </Row>
      

      </div>
      <Footer />
      </div>
    )
  }
}
