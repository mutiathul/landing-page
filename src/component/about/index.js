import React, { Component } from 'react';
import { Col, Image, Row,Button } from 'antd'
import './about.css'
import footer from '../../asset/home/footer.jpg'
import banner from '../../asset/home/banner gambar.png'
import dw1 from '../../asset/home/dww1.png'
import dw2 from '../../asset/home/dww.png'
import bg3 from '../../asset/about/bg3.jpg'
import bg4 from '../../asset/about/bg4.jpg'
import Bg1 from '../../asset/home/bg1.jpg'
import asset1 from '../../asset/about/asset1.png'
import asset2 from '../../asset/about/asset2.png'
import asset_2 from '../../asset/about/Asset_1.png'
import asset_1 from '../../asset/about/Asset 397.png'
import asset_3 from '../../asset/about/Asset 393.png'
import asset_4 from '../../asset/about/asset_about.png'
import next from '../../asset/about/next.png'
import prev from '../../asset/about/prev.png'
import visi from '../../asset/about/visi misi.png'
import Header from '../../component/header'
import Footer from '../../component/footer'
class Index extends Component {
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
               <div style={{ background: `url(${footer})` }}>
               <Row align='middle' justify='space-evenly'>
            <Col  md={{span:12}} xs={{span:24}}>
                <Row >
                    <Col span={2}>

                    </Col>
                    <Col span={20}>
                   <Row align='middle' justify='center'>
                   <div className='div_pg' >
                    <div className='about'>ABOUT</div>
                    <div className='tonubi'>NUBI GO</div>
                   
                    
                </div>
                   </Row>
                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
            </Col>

            <Col md={{span:12}}  xs={{span:24}}>
            <div className='div_donload'>
                        <Row align='middle' justify='center ' >
                            <div className='dw'>
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
               <div style={{ background: `url(${Bg1})` }}>
               <Row>
            <Col md={{span:12}} xs={{span:24}}>
            <Row  justify='center'>
                    <Col span={2}>

                    </Col>
                    <Col span={20}>
                    <div className='div_p'>
                    
                    <p className='p'>
                    NUBI GO adalah game dengan konsep FIND2EARN pertama di
                    INDONESIA! yang dikembangkan dengan teknologi Augmented
                    Reality. Para gamer dapat berpetualang mencari monster dan
                    hadiah berupa coin,snack,mainan,voucher,makan,hingga 
                    kendaraan!
                    </p>
                    <p className='p'>
                    Lewat konsep FIND2EARN ini NUBI GO mengembangkan konsep 
                    game dengan menggunakan teknologi AR ( Augmented Reality )
                    dimana dalam game ini para gamers akan di arahkan untuk 
                    berburu mosnter-monster tersebut harus dikalahkan untuk
                    dapat di koleksi, dan setelah berhasil mengkoleksi monster
                    tersebut para gamers dapat melatuh monster-monster tersebut
                    untuk dapat di ikutkan dalam pertarunagn (Battle) bahkan
                    bisa masuk ke tournament.
                      
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
             <div  className='asset1'>
             <Image src={asset1} preview={false}/>
             </div>
            </Col>
            </Row>
            </Col>
        </Row>
               </div>
               <div className='bg2'>
               <Row>
          
            <Col md={{span:12}} xs={{span:24}}>
            <Row align='middle' justify='center'>
            <Col >
             <div  className='assett2'>
             <Image src={asset2} preview={false}/>
             </div>
            </Col>
            </Row>
            </Col>
            <Col md={{span:12}} xs={{span:24}}>
            <Row  justify='center'>
                    <Col span={2}>

                    </Col>
                    <Col span={20}>
                    <div className='div_pg2'>
                    
                    <p className='p_bg2'>
                    Salah satu yang mungkin juga menjadi daya tarik dari game
                            NUBI GO adalah player dapat berburu ribuan hadiah menarik
                            mulai dari snack ringan,bingkisan,voucher makan gratis,
                            vocher hotel, hingga ke peralatan elektronik kipas angin,
                            rice cooker, HP hingga laptop. Bukan hanya itu hadiah 
                            kendaraan pun mulai dari sepeda, motor hingga mobil pun
                            bisa di dapatkan dengan bermain game ini.
                    </p>
                    <p className='p_bg2'>
                    Adapun jenis hadiah yang tersedia dalam game ini berupa
                        hadiah langsung ataupun berupa puzzle dimana para gamers 
                        harus mengumpulkan kumpulan kepingan puzzle dalam game
                        NUBI GO ini dan mengclaim hadiah tersebut.
                      
                    </p>
                    
                   
                    
                </div>
                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
            </Col>
        </Row>
               </div>
               <div style={{ background: `url(${bg3})`, height:'auto' }}>
               <div className='div_asset'>
               <Row align='middle' justify='center'>
               <div  className='asset_4'>
             <Image src={asset_4} preview={false}/>
             </div>
                </Row>
                <Row  justify='center'>
                    <Col span={4}>

                    </Col>
                    <Col span={16}>
                    <div className='div_pg4'>
                    
                    <p className='p'>
                    NUBI GO adalah permainan realitas dengan konsep petualangan
                      mencari HARTA KARUN. dimana beragam reward telah di sebar ke
                      beberapa titk dalam koordinat peta dan tugas dari pemain adalah
                      mengumpulkan ENERGY dan mengambil reward yang telah di sebar.
                      Petualangan dan pengumpulan reward ini menggunakan Teknology
                      " Augmented Reality".
                    </p>
                    <p className='p'>
                    https://play.google.com/store/apps/details?id=com.NubiGames.NubiGo
                      
                    </p>
                    <p className='p'>
                    Game ini menggunakan Teknologi Augmented Reality dan HARUS & WAJIB 
menggunkan HP yang mensupport Teknologi AR. Jadi jika HP yang
tidak mensupport teknologi AR maka tidak bisa mendownload game ini.
Namun ada beberapa jenis HP yang tidak mendukung Teknologi AR
sehinnga kami menyediakan aplikasi kedua yaitu : 
                    </p>
                    <p className='p'>
                    https://play.google.com/store/apps/details?id=com.NubiGames.NubiGoNoAR
                      
                    </p>
                    
                   
                    
                </div>
                    </Col>
                    <Col span={4}>

                    </Col>
                </Row>
               </div>
               </div>
               <div style={{ background: `url(${bg4})` }}>
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
                       <Row align='middle' justify='center'>
                       <div className='asset_pg44'>
                       <Image src={visi} preview={false} />
                       </div>
                       </Row>
                        </Col>
                    </Row>
                   </div>
               </div>
               <Footer />
            </div>
        );
    }
}

export default Index;
