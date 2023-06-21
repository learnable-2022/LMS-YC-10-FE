import React from 'react'
import style from '../styles/MeetTeam.module.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import victor from '../images/victor.png';
import emma from '../images/emma.png';
import lucy from '../images/lucy.png';
import shalom from '../images/shalom.png';
import aduonye from '../images/aduonye.png';
import amaka from '../images/amaka.png';
import jim from '../images/jim.png';
import ubaka from '../images/ubaka.png';
import anointing from '../images/anointing.png';
import nkem from '../images/nkem.png';
import nkechi from '../images/nkechi.png';
import lawrence from '../images/lawrence.png';



function MeetTeam() {
  return (
    <div className={style.theTeamWrapper}> 
        <div>
            <Header />
        </div>
        <div className={style.teamBodyWrapper}>
            <div>
            <div className={style.teamHeader}>
                <h1>The Team</h1>
            </div>
            <div className={style.teamBody}>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={amaka} alt='victor' />
                    </div>
                    <h3>Chiamaka Okeke</h3>
                    <p>Designer</p>
                </div>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={nkechi} alt='victor' />
                    </div>
                    <h3>Nkechi Nnaemeka</h3>
                    <p>Designer</p>
                </div>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={aduonye} alt='victor' />
                    </div>
                    <h3>Aduonye Jaja</h3>
                    <p>Backend Developer</p>
                </div>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={nkem} alt='victor' />
                    </div>
                    <h3>Nkemdilim Ugwu</h3>
                    <p>Designer</p>
                </div>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={ubaka} alt='victor' />
                    </div>
                    <h3>Chukwubuikem Ubaka</h3>
                    <p>Designer</p>
                </div>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={jim} alt='victor' />
                    </div>
                    <h3>Jim Aneto</h3>
                    <p>Designer</p>
                </div>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={shalom} alt='victor' />
                    </div>
                    <h3>Shalom Kene-Okafor</h3>
                    <p>Designer</p>
                </div>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={lawrence} alt='victor' />
                    </div>
                    <h3>Chukwu Lawrence</h3>
                    <p>Web3 Developer</p>
                </div>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={emma} alt='victor' />
                    </div>
                    <h3>Emmanuel Ngwu</h3>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={victor} alt='victor' />
                    </div>
                    <h3>Victor Anyadiegwu</h3>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={victor} alt='victor' />
                    </div>
                    <h3>Chimzuruoke Enemuo</h3>
                    <p>Backend Developer</p>
                </div>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={anointing} alt='victor' />
                    </div>
                    <h3>Anointing Okechukwu</h3>
                    <p>Designer</p>
                </div>
                <div className={style.member}>
                    <div className={style.triangle}>
                        <img src={lucy} alt='victor' />
                    </div>
                    <h3>Lucy Asogwa</h3>
                    <p>Designer</p>
                </div>
            </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default MeetTeam