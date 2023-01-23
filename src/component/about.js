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
import "../component/about.css"
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
                <div style={{ background: `url(${bg1})`, width:'auto' ,height:'auto'}} >
                    
                    <div style={{ background: `url(${footer})`, width:'auto' ,height:'auto',transform:'translateY(4em)'}}>
                    <Row >
            <Col  md={{span:12}} xs={{span:24}}>
                <Row align='middle' justify='center'>
                    <Col span={2}>

                    </Col>
                    <Col span={20}>
                    <div className='div_pg'>
                    <div className='text_pg1'>ABOUT</div>
                    <div className='text2_pg1'>TO NUBI GO</div>
                   
                    
                </div>
                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
            </Col>

            <Col md={{span:12}}  xs={{span:24}}>
            <div className='div_donload'>
                        <Row align='middle' justify='center ' >
                            <div className='dw1'>
                            <Image src={dw1}  preview={false}/>
                            </div>
                            <div className='dw2'>
                              <Image src={dw2}  preview={false} />
                              </div> 
                        </Row>
                    </div>
            </Col>
        </Row>
                    </div>

                    <div style={{ transform:'translateY(4em)'}}>
                        <Row>
                     
                            <Col lg={{span:8, push:2}} md={{span:10,}} xs={{span:22,push:2}} style={{marginTop:'3em',}} >
                 <div className='div_p1'>
                 <Row>
                    <p className='p_pg1'>
                    NUBI GO adalah game dengan konsep FIND2EARN pertama di
                    INDONESIA! yang dikembangkan dengan teknologi Augmented
                    Reality. Para gamer dapat berpetualang mencari monster dan
                    hadiah berupa coin,snack,mainan,voucher,makan,hingga 
                    kendaraan!
                    </p>
                  </Row>
                  <Row>
                    <p className='p_pg1'>
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
                 </div>
                            </Col>
                            <Col lg={{span:14}}  md={{span:14}} xs={{span:24}}>
                           <div className='asset1'>
                           <Image src={asset1}  preview={false} />
                           </div>

                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='p2_bg' >
                <div>
                    <Row>
                     
                        <Col lg={{span:14}} xs={{span:8}} >
                            <div className='asset2'>
                            <Image src={asset2}  preview={false} />

                            </div>
                        </Col>
                        <Col lg={{span:9}} xs={{span:16}}>
                      <div className='div_p2'>
                      <Row >
                            <p className='p_pg2'>
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
                        <p className='p2_pg2'>
                        Adapun jenis hadiah yang tersedia dalam game ini berupa
                        hadiah langsung ataupun berupa puzzle dimana para gamers 
                        harus mengumpulkan kumpulan kepingan puzzle dalam game
                        NUBI GO ini dan mengclaim hadiah tersebut.
                        </p>
                    </Row>
                      </div>
                        
                        </Col>
                        
                    </Row>
                </div>
                </div>
                <div style={{ background: `url(${bg3})`, width:'auto' ,height:'auto',backgroundSize:'cover',}} >
                    <div> 
                        <div className='div_asset'>
                        <Row align='middle' justify='space-between' >
                     
                        <Col span={2}>
                        <div className='prev'>
                       <Image src={prev}  preview={false}/>
                       </div>
                        </Col>
                        <Col span={6}>
                        <div className='asset_2'>
                       <Image src={asset_2}  preview={false} />
                       </div>
                        </Col>

                        <Col span={8}>
                        <div className='asset_1'>
                       <Image src={asset_1}  preview={false}  />
                        
                       </div>
                        </Col>

                        <Col span={6}>
                        <div className='asset_3'>
                       <Image src={asset_3}  preview={false}  />
                       
                       </div>
                        </Col>

                       <Col span={2}>
                       <div className='next'>
                       <Image src={next}  preview={false} />
                       
                       </div>
                       </Col>
                       </Row>
                      </div>
                        
                    </div>
                   
                  <Row >
                    <Col lg={{span:4}} xs={{span:2}}>

                    </Col>
                    <Col lg={{span:16}}  xs={{span:20}}>
                   <div className='div_pg3'>
                   <p className='p_pg3'>
                    Untuk Memaminkan game NUBI GO unu bisa di download pada link
                    dibawah ini:

                    </p>
                    <p onClick={this.onClickNubiGo} className='plink_pg3'>
                    https://play.google.com/store/apps/details?id=com.NubiGames.NubiGo

                    </p>
                    <p className='p2_pg3'>
                    Game ini menggunakan Teknologi Augmented Reality dan HARUS & WAJIB 
menggunkan HP yang mensupport Teknologi AR. Jadi jika HP yang
tidak mensupport teknologi AR maka tidak bisa mendownload game ini.
Namun ada beberapa jenis HP yang tidak mendukung Teknologi AR
sehinnga kami menyediakan aplikasi kedua yaitu : 
                    </p>
                    <p onClick={this.onClickNubiGoNoAR} className='plink_pg3' >
                    https://play.google.com/store/apps/details?id=com.NubiGames.NubiGoNoAR

                    </p>
                   </div>
                    </Col>
                    <Col lg={{span:4}}  xs={{span:2}}>

</Col>
                  </Row>
                   <div>
                    </div> 
                </div>
                <div style={{ background: `url(${bg4})`, width:'100vw' ,height:'auto',backgroundSize:'cover',}} >
                   <div>
                    <Row align='middle' justify='center'>
                        <p className='title'>VISI DAN MISI NUBI GAME</p>
                    </Row>
                    <Row >
                        <Col md={{span:2}} xs={{span:2}}></Col>
                        <Col md={{span:8}} xs={{span:24}}>
                        <h1 className='visi'>Visi Nobi Game</h1>
                        <p className='pp_title'>Menjadi developer game dengan konsep yang unik di indonesia
                            dan membawa karya anak bangsake kancah internasional.
                        </p>
                        <h1 className='misi'>Misi Nobi Game</h1>
                        <p className='pp_title'>
                        Mengembangkan sistem terbaru dan terunik yang belum pernah
                        ada sebelumnya.
                        </p>
                        <p className='pp_title'>
                        Mengembangkan Suatu permainan dimana dengan sambil bermain
bisa mendapatkan berbagai macam hadiah.
                        </p>
                        <p className='pp_title'>
                        Mengembangkan suatu permainan dengan konsep FIND2EARN dimana 
para pemain dapat berpetualang mencari hadia-hadiah yang 
tersebar dalam dunia maya yang bisa di hadirkan ke dalam
dunia nyata
                        </p>
                        </Col>
                        <Col md={{span:14}} xs={{span:24}}>
                       <div className='asset_pg4'>
                       <Image src={visi} preview={false} />
                       </div>
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
