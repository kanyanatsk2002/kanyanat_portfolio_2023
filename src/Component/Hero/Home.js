import React from 'react'
import "./Home.css"
import { Typewriter } from 'react-simple-typewriter'
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import hero from "../pic/hero.png"


const Home = () => {

    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>WELCOME TO MY WORLD</h3>

                        <h1>
                            Hello, I'm <span>Kanyanat</span>
                        </h1>
                
                        <h2>
                            a 
                            <span>
                                <Typewriter 
                                words={[" Beginner Code." , " Student"]}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                />
                            </span>
                        </h2>

                        <p>Hello I'm glad to be here for this present this.I'm a student and my field of study is Computer Programming at Khon Kaen Vocational College.I'm interested to apply programmer position for the future.</p> 
                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND WITH ME</h4>
                                <div className='button'>
                                    <button className='btn_shadow'>
                                    <a href="https://www.facebook.com/profile.php?id=100007377630681" target="_blank" rel="noreferrer">
                                        <i className='fab fa-facebook-f'></i>
                                    </a>
                                    </button>
                                    <button className='btn_shadow'>
                                    <a href="https://www.instagram.com/meowe_d?utm_source=qr" target="_blank" rel="noreferrer">
                                        <i className='fab fa-instagram'></i>
                                    </a>
                                    </button>
                                    <button className='btn_shadow'>
                                    <a href="https://www.linkedin.com/in/kanyanat-s-8425a81b2" target="_blank" rel="noreferrer">
                                        <i className='fab fa-linkedin-in'></i>
                                    </a>
                                    </button>
                                </div>
                            </div>

                            <div className='col_1'>
                                <h4>BEST SKILL ON</h4>
                                <button className='btn_shadow'>
                                <a href="https://angular.io/" target="_blank" rel="noreferrer">
                                        <img src={skill1} alt='' />
                                </a>
                                </button>
                                <button className='btn_shadow'>
                                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                                        <img src={skill2} alt='' />
                                </a>
                                </button>
                                <button className='btn_shadow'>
                                <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                                        <img src={skill3} alt='' />
                                </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home