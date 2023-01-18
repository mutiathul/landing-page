import { Col, Row,Image } from 'antd';
import React, { Component,Fragment } from 'react';
import bg1 from '../asset/home/bg1.jpg'
import bg2 from '../asset/about/bg2.jpg'
import bg3 from '../asset/about/bg3.jpg'
import bg4 from '../asset/about/bg4.jpg'
import Header from './header';
import dw1 from '../asset/home/dww1.png'
import dw2 from '../asset/home/dww.png'
import footer from '../asset/home/footer.jpg'
import asset1 from '../asset/about/asset1.png'
import asset2 from '../asset/about/asset2.png'
import asset_1 from '../asset/about/Asset_1.png'
import asset_2 from '../asset/about/Asset 397.png'
import asset_3 from '../asset/about/Asset 393.png'
import next from '../asset/about/next.png'
import prev from '../asset/about/prev.png'
import visi from '../asset/about/visi misi.png'
import { Link } from 'react-router-dom';
import Footer from './footer';
class About extends Component {

    onClickNubiGo(){
        window.open(" https://play.google.com/store/apps/details?id=com.NubiGames.NubiGo", '_blank', 'noreferrer')
        //window.location.href=" https://play.google.com/store/apps/details?id=com.NubiGames.NubiGo";
    }
    onClickNubiGoNoAR(){
        window.open("  https://play.google.com/store/apps/details?id=com.NubiGames.NubiGoNoAR", '_blank', 'noreferrer')
        //window.location.href=" https://play.google.com/store/apps/details?id=com.NubiGames.NubiGo";
    }
    render() {
        return (
            <div>
                <Header />
                <div style={{ background: `url(${bg1})`, width:'100vw' ,height:'100vh'}} >
                    
                    <div style={{ background: `url(${footer})`, width:'auto' ,height:'auto',transform:'translateY(4em)'}}>
                        <Row align='middle'>
                            <Col span={2}>
                            
                            </Col>
                            <Col span={6}>
                            <Row>
                                <text style={{color:'white', fontSize:40, fontWeight:'bolder',letterSpacing:'2px'}}>ABOUT</text>
                            </Row>
                            <Row>
                                <text style={{color:'white', fontSize:35, fontWeight:'400',letterSpacing:'2px'}}>NUBI GO</text>
                            </Row>
                            </Col>
                            <Col span={2}>
                            
                            </Col>
                            <Col span={12}>
                            <Row align='middle'>
                    
                    <Col span={10}>
                      <Image  src={dw1} width={200} style={{marginRight:'-11em'}} preview={false}/>
                    </Col>
                    <Col span={10}>
                      
                        <Image  src={dw2} width={200} preview={false} >

                        </Image>
                     
                    </Col>
                    
                  </Row>
                            </Col>
                            <Col span={2}>
                            
                            </Col>

                        </Row>
                    </div>

                    <div style={{ transform:'translateY(4em)'}}>
                        <Row>
                        <Col span={2}>
                            
                            </Col>
                            <Col span={8} style={{marginTop:'3em',}} >
                            <Row>
                    <p style={{ color: 'white', fontWeight: '400', textAlign: 'left', fontSize: 14, marginTop: '10px', marginRight: '30px', marginLeft: '5px' }}>
                    NUBI GO adalah game dengan konsep FIND2EARN pertama di
                    INDONESIA! yang dikembangkan dengan teknologi Augmented
                    Reality. Para gamer dapat berpetualang mencari monster dan
                    hadiah berupa coin,snack,mainan,voucher,makan,hingga 
                    kendaraan!
                    </p>
                  </Row>
                  <Row>
                    <p style={{ color: 'white', fontWeight: '400', textAlign: 'left', fontSize: 14, marginTop: '10px', marginRight: '30px', marginLeft: '5px' }}>
                    Lewat konsep FIND2EARN ini NUBI GO mengembangkan konsep 
                    game dengan menggunakan teknologi AR ( Augmented Reality )
                    dimana dalam game ini para gamers akan di arahkan untuk 
                    berburu mosnter-monster tersebut harus dikalahkan untuk
                    dapat di koleksi, dan setelah berhasil mengkoleksi monster
                    tersebut para gamers dapat melatuh monster-monster tersebut
                    untuk dapat di ikutkan dalam pertarunagn (Battle) bahkan
                    bisa masuk ke tournament.
                    </p>
                  </Row>
                            </Col>
                            <Col span={14} style={{marginTop:'-4em',}}>
                            <Image src={asset1} width='60%' preview={false} />

                            </Col>
                        </Row>
                    </div>
                </div>
                <div style={{ background: `url(${bg2})`, width:'100vw' ,height:'140vh',backgroundSize:'90%',backgroundRepeat:'no-repeat'}} >
                <div>
                    <Row>
                     
                        <Col span={14} >
                        <Image src={asset2} width='70%' preview={false} style={{marginTop:'15em',marginLeft:'-5em'}}/>
                        </Col>
                        <Col span={8}>
                        <Row style={{marginTop:'18em'}}>
                    <p style={{ color: 'black', fontWeight: '400', textAlign: 'left', fontSize: 16, marginTop: '10px', marginRight: '30px', marginLeft: '5px' }}>
                    Salah satu yang mungkin juga menjadi daya tarik dari game
NUBI GO adalah player dapat berburu ribuan hadiah menarik
mulai dari snack ringan,bingkisan,voucher makan gratis,
vocher hotel, hingga ke peralatan elektronik kipas angin,
rice cooker, HP hingga laptop. Bukan hanya itu hadiah 
kendaraan pun mulai dari sepeda, motor hingga mobil pun
bisa di dapatkan dengan bermain game ini.
                    </p>
                  </Row>
                  <Row>
                    <p style={{ color: 'black', fontWeight: '400', textAlign: 'left', fontSize: 16, marginTop: '10px', marginRight: '30px', marginLeft: '5px' }}>
                    Adapun jenis hadiah yang tersedia dalam game ini berupa
hadiah langsung ataupun berupa puzzle dimana para gamers 
harus mengumpulkan kumpulan kepingan puzzle dalam game
NUBI GO ini dan mengclaim hadiah tersebut.
                    </p>
                  </Row>
                        
                        </Col>
                        <Col span={2}>

                        </Col>
                    </Row>
                </div>
                </div>
                <div style={{ background: `url(${bg3})`, width:'100vw' ,height:'210vh',backgroundSize:'100%',backgroundRepeat:'no-repeat'}} >
                    <div>
                        <Row align='middle' justify='center' style={{transform:'translateY(10em)'}}>
                        <Image src={prev} width={80} preview={false} style={{marginTop:'10em',marginLeft:'-6em'}}/>
                        <Image src={asset_2} width='20%' preview={false} style={{marginTop:'10em',}}/>
                        <Image src={asset_1} width='30%' preview={false} />
                        <Image src={asset_3} width='20%' preview={false} style={{marginTop:'8.9em',}} />
                        <Image src={next} width={80} preview={false} style={{marginTop:'10em',marginLeft:'50px'}}/>
                        </Row>
                    </div>
                   
                  <Row >
                    <Col span={4}>

                    </Col>
                    <Col span={16}>
                    <p style={{ color: 'white', fontWeight: '400', textAlign: 'left', fontSize: 20, marginTop: '10em', marginRight: '30px', marginLeft: '5px' }}>
                    Untuk Memaminkan game NUBI GO unu bisa di download pada link
                    dibawah ini:

                    </p>
                    <p onClick={this.onClickNubiGo} style={{ color: 'white', fontWeight: '400', textAlign: 'left', fontSize: 20, marginTop: '1em', marginRight: '30px', marginLeft: '5px' }}>
                    https://play.google.com/store/apps/details?id=com.NubiGames.NubiGo

                    </p>
                    <p style={{ color: 'white', fontWeight: '400', textAlign: 'left', fontSize: 20, marginTop: '1em', marginRight: '30px', marginLeft: '5px' }}>
                    Game ini menggunakan Teknologi Augmented Reality dan HARUS & WAJIB 
menggunkan HP yang mensupport Teknologi AR. Jadi jika HP yang
tidak mensupport teknologi AR maka tidak bisa mendownload game ini.
Namun ada beberapa jenis HP yang tidak mendukung Teknologi AR
sehinnga kami menyediakan aplikasi kedua yaitu : 
                    </p>
                    <p onClick={this.onClickNubiGoNoAR} style={{ color: 'white', fontWeight: '400', textAlign: 'left', fontSize: 20, marginTop: '1em', marginRight: '30px', marginLeft: '5px' }} >
                    https://play.google.com/store/apps/details?id=com.NubiGames.NubiGoNoAR

                    </p>
                    </Col>
                    <Col span={4}>

</Col>
                  </Row>
                   <div>
                    </div> 
                </div>
                <div style={{ background: `url(${bg4})`, width:'100vw' ,height:'auto',backgroundSize:'100%',backgroundRepeat:'no-repeat'}} >
                   <div>
                    <Row align='middle' justify='center'>
                        <text style={{marginTop:'3em',color:'#1a92d7',
                        fontSize:40, fontWeight:'600'
                    }}>VISI DAN MISI NUBI GAME</text>
                    </Row>
                    <Row >
                        <Col span={2}></Col>
                        <Col span={8}>
                        <h1 style={{marginTop:'4em',color:'#1a92d7',
                        fontSize:35, fontWeight:'600'
                    }}>Visi Nobi Game</h1>
                        <p style={{textAlign:'left',color:'grey',
                        fontSize:16, fontWeight:'400'}}>Menjadi developer game dengan konsep yang unik di indonesia
                            dan membawa karya anak bangsake kancah internasional.
                        </p>
                        <h1 style={{color:'#1a92d7',
                        fontSize:35, fontWeight:'600'}}>Misi Nobi Game</h1>
                        <p style={{textAlign:'left',color:'grey',
                        fontSize:16, fontWeight:'400'}}>
                        Mengembangkan sistem terbaru dan terunik yang belum pernah
                        ada sebelumnya.
                        </p>
                        <p style={{textAlign:'left',color:'grey',
                        fontSize:16, fontWeight:'400'}}>
                        Mengembangkan Suatu permainan dimana dengan sambil bermain
bisa mendapatkan berbagai macam hadiah.
                        </p>
                        <p style={{textAlign:'left',color:'grey',
                        fontSize:16, fontWeight:'400'}}>
                        Mengembangkan suatu permainan dengan konsep FIND2EARN dimana 
para pemain dapat berpetualang mencari hadia-hadiah yang 
tersebar dalam dunia maya yang bisa di hadirkan ke dalam
dunia nyata
                        </p>
                        </Col>
                        <Col span={14} >
                        <Image src={visi} width='50%' preview={false} style={{marginTop:'8em',marginBottom:'3em'}}/>
                        </Col>
                    </Row>
                   </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;
