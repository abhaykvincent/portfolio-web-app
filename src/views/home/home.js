import React,{useEffect,useState } from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

import $, { easing } from 'jquery'
import Aos from 'aos'
import './home.scss';
import { gsap,TimelineLite, CSSPlugin } from "gsap/all";
import ImagePX from '../../images/NicePng_abstract-shapes-png_1594019.png'
import 'aos/dist/aos.css';


export default function Home() {

    let svg1=null;
    let card1=null;
    let card2=null;
    let card3=null;
    let arrow=null;
    let rightCard=null;
    let social=[];
    
    let svg2=null;
    let macbook=null;
    let phone=null;
    let line1=[]//macbook
    let line2=[]//mobile
    let button=[]//mobile
    let circle1=[]//mobile
    let circle2=[]//mobile
    let rectangle1=[]//mobile


    useEffect(() => {
        Aos.init({duration:300})

        gsap.from( svg1 , 0.4, {  y: 100 ,scale:0,opacity : 0,delay:1}, 4)
        gsap.from( card1 , 1, {  y: 200,opacity : 0,delay:1.2 }, 1)
        gsap.from( card3 , 0.5, {  y: 300,opacity : 0,delay:1.75 }, 2)
        gsap.from( card2 , 0.5, {  y: 300,opacity : 0,delay:1.7 }, 3)
        gsap.from( arrow , 0.5, {  y: 300,opacity : 0,delay:1.8}, 3)
        gsap.from( rightCard , 0.5, {  y: 300,opacity : 0,delay:1.6 }, 3)


        gsap.to( rightCard , 0.5, {  y: -300,opacity : 0,delay:4 }, 3)
        gsap.to( arrow , 0.5, {  scale:0,opacity : 0,delay:4 }, 3)
        gsap.to( card1 , 0.4, {  x:-100,opacity : 0,delay:4.1   ,easing:"ease-out" }, 3.5)
        gsap.to( card2 , 0.4, {  x:-100,opacity : 0,delay:4.2   ,easing:"ease-out" }, 4)
        gsap.to( card3 , 0.5, {  x:-100,opacity : 0,delay:4.4   ,easing:"ease-out" }, 4.2)
        gsap.to( svg1 , 1, {  y:-200,opacity : 0,delay:4.5 ,easing:"ease-out", scale:0}, 4.2)


        gsap.from( svg2 , 1, {  y:200,opacity : 0,delay:5 ,easing:"ease-in"}, 4.2)
        gsap.from( macbook , 1, {  y:200,opacity : 0,delay:5 ,easing:"ease-in"}, 4.2)
        gsap.from( phone , 1, {  y:200,opacity : 0,delay:5.2 ,easing:"ease-in"}, 4.2)

        gsap.from( circle1[0] , 1, {  scale:0,opacity : 0,delay:7 ,easing:"ease-in",transformOrigin:"center"}, 4.2)
        gsap.from( circle1[1] , 1, {  scale:0,opacity : 0,delay:7.5 ,easing:"ease-in",transformOrigin:"center"}, 4.2)
        gsap.from( circle1[2] , 0.5, {  scale:0,opacity : 0,delay:7.8 ,easing:"ease-in",transformOrigin:"center"}, 4.2)

        gsap.from( circle2[0] , 1, {  scale:0,opacity : 0,delay:7.8 ,easing:"ease-in",transformOrigin:"center"}, 4.2)
        gsap.from( circle2[1] , 0.5, {  scale:0,opacity : 0,delay:8 ,easing:"ease-in",transformOrigin:"center"}, 4.2)

        gsap.to( rectangle1[0] , 6, {   opacity:0, scale:4,delay:8 ,easing:"ease-in",transformOrigin:"center"}, 4.2)
        gsap.to( rectangle1[1] , 6, {   opacity:0, scale:4,delay:9 ,easing:"ease-in",transformOrigin:"center"}, 4.2)
        gsap.to( rectangle1[2] , 6, {   opacity:0, scale:4,delay:11 ,easing:"ease-in",transformOrigin:"center"}, 4.2)


        gsap.from( line1[0] , 1, {  width: 0,delay:5.1 ,easing:"ease-in"}, 4.2)
        gsap.from( line1[1] , 1, {  width: 0,delay:5.3 ,easing:"ease-in"}, 4.2)
        gsap.from( line1[2] , 1, {  width: 0,delay:5.7 ,easing:"ease-in"}, 4.2)
        gsap.from( line1[3] , 1, {  width: 0,delay:5.8 ,easing:"ease-in"}, 4.2)
        gsap.from( line1[4] , 1, {  width: 0,delay:6 ,easing:"ease-in"}, 4.2)

        gsap.from( line2[0] , 1, {  width: 0,delay:5.3 ,easing:"ease-in"}, 4.2)
        gsap.from( line2[1] , 1, {  width: 0,delay:5.6 ,easing:"ease-in"}, 4.2)
        gsap.from( line2[2] , 1, {  width: 0,delay:6 ,easing:"ease-in"}, 4.2)
        gsap.from( line2[3] , 1, {  width: 0,delay:6.5 ,easing:"ease-in"}, 4.2)
        gsap.from( line2[4] , 1, {  width: 0,delay:7 ,easing:"ease-in"}, 4.2)

        gsap.from( button[0] , 0.1, {  width: 0,delay:7.5 ,easing:"ease-in"}, 4.2)
        gsap.from( button[1] , 0.1, {  width: 0,delay:7.5 ,easing:"ease-in"}, 4.3)




        gsap.from( social[0] , 1, { x:-40,y:20,scale:0, opacity : 0, delay:5,    easing:"ease-in"})
        gsap.from( social[1] , 1, { x:-40,y:40,scale:0, opacity : 0, delay:5.1,    easing:"ease-in" })
        gsap.from( social[2] , 1, { x:-40,y:80,scale:0, opacity : 0, delay:5.2,    easing:"ease-in" })
        gsap.from( social[3] , 1, { x:-40,y:120,scale:0, opacity : 0, delay:5.3,    easing:"ease-in" })

    }, []);
    let mainContent01=`Hi ,`
    let mainContent02=`I'm Abhay`
    let mainContent04=`Web Developer`
    let mainContent03=`Media Designer`

    let subContent01=`UI-UX   Illustration     Digital Painting      Animation`
    let subContent02=`React    CSS    Node.js    Firebase     JavaScript`

    let parallax1=null;
    return (
        <div className="home">
            <div className="spalsh">
                <div className="splash__2020">PORTFOLIO</div>
                <div className="splash__left">

                    <div className="splash__left__main">
                        <div className="animation_text_1a text_1a-0">{
                            mainContent01.split("").map(function(char, index){
                                let className= char===" " ? 'animation-letter space' : 'animation-letter'
                                return <span 
                                className={className}
                                aria-hidden="true" 
                                style={{'animationDelay':`${index*0.04+1.1}s`}}
                                key={index}>
                                    {char}
                                    </span>;
                            })}
                        </div>
                        <div className="animation_text_1a text_1a-1">{
                            mainContent02.split("").map(function(char, i){
                                let className= char===" " ? 'animation-letter space ' : 'animation-letter '
                                let className__color= i>3 ?  'orange' : ''

                                return <span 
                                className={className + className__color}
                                aria-hidden="true" 
                                style={{'animationDelay':`${i*0.03+0.3}s`}}
                                key={i}>
                                    {char}
                                    </span>;
                            })}
                        </div>
                        <div className="animation_text__wrap">
                            <div className="animation_text_1b text_1a-2">{
                                mainContent03.split("").map(function(char, index){
                                    let className= char===" " ? 'animation-letter space' : 'animation-letter'
                                    return <span 
                                    className={className}
                                    aria-hidden="true" 
                                    style={{'animationDelay':`${index*0.02+0.6}s`}}
                                    key={index}>
                                        {char}
                                        </span>;
                                })}
                            </div>
                            <div className="animation_text_1c text_1a-2">{
                                mainContent04.split("").map(function(char, index){
                                    let className= char===" " ? 'animation-letter space' : 'animation-letter'
                                    return <span 
                                    className={className}
                                    aria-hidden="true" 
                                    style={{'animationDelay':`${index*0.02+0.6+3.5}s`}}
                                    key={index}>
                                        {char}
                                        </span>;
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="splash__left__sub">
                        <div className="animation_text__wrap-2">
                            <div className="animation_text_2a text_1a-0">{
                                subContent01.split("").map(function(char, index){
                                    let className= char===" " ? 'animation-letter space' : 'animation-letter'
                                    return <span 
                                    className={className}
                                    aria-hidden="true" 
                                    style={{'animationDelay':`${index*0.005+1}s`}}
                                    key={index}>
                                        {char}
                                        </span>;
                                })}
                            </div>
                            <div className="animation_text_2b text_1a-0">{
                                subContent02.split("").map(function(char, i){
                                    let className= char===" " ? 'animation-letter space ' : 'animation-letter '
                                    
                                    return <span 
                                    className={className}
                                    aria-hidden="true" 
                                    style={{'animationDelay':`${i*0.005+3.3}s`}}
                                    key={i}>
                                        {char}
                                        </span>;
                                })}
                            </div>
                        </div>
                        
                    </div>
                    <div className="splash__left_social">
                        <a ref={e=> social[0]=e} className="social" href="http://www.facebook.com/abhay.vincent"><div > </div></a>
                        <a ref={e=> social[1]=e} className="social" href="http://www.instagram.com/fullstack_lad"><div ></div></a>
                        <a ref={e=> social[2]=e} className="social" href="https://www.linkedin.com/in/abhayvincent/"><div ></div></a>
                        <a ref={e=> social[3]=e} className="social" href="http://www.twitter.com/abhaykvincent"><div ></div></a>
                    </div>
                </div>
                <div className="splash__right">
                <svg  className="svg1" ref={e => svg1 = e} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 507.577 253.519">
                    <g id="undraw_design_components_9vy6" transform="translate(0 0)">
                        <path id="Path_520" data-name="Path 520" d="M217.244,205.26a106.684,106.684,0,0,0-40.236,7.8c-.515.211-1.031.423-1.548.64A107.1,107.1,0,0,0,110,312.5V429.525a4.667,4.667,0,0,0,4.661,4.661l.093.008c89.845,16.316,177.189,24.584,259.678,24.584q1.855,0,3.706-.006c81.085-.247,160.039-8.515,234.668-24.575l.109-.012a4.667,4.667,0,0,0,4.662-4.661v-219.6a4.667,4.667,0,0,0-4.661-4.661Z" transform="translate(-110 -205.26)" fill="#f9a826"/>
                        <g id="Group_64" data-name="Group 64" transform="translate(386.084 22.789)" opacity="0.4">
                        <circle id="Ellipse_318" data-name="Ellipse 318" cx="3.31" cy="3.31" r="3.31" fill="#fff"/>
                        <circle id="Ellipse_319" data-name="Ellipse 319" cx="3.31" cy="3.31" r="3.31" transform="translate(13.79)" fill="#fff"/>
                        <circle id="Ellipse_320" data-name="Ellipse 320" cx="3.31" cy="3.31" r="3.31" transform="translate(27.58)" fill="#fff"/>
                        <circle id="Ellipse_321" data-name="Ellipse 321" cx="3.31" cy="3.31" r="3.31" transform="translate(41.369)" fill="#fff"/>
                        <circle id="Ellipse_322" data-name="Ellipse 322" cx="3.31" cy="3.31" r="3.31" transform="translate(55.159)" fill="#fff"/>
                        <circle id="Ellipse_323" data-name="Ellipse 323" cx="3.31" cy="3.31" r="3.31" transform="translate(68.949)" fill="#fff"/>
                        <circle id="Ellipse_324" data-name="Ellipse 324" cx="3.31" cy="3.31" r="3.31" transform="translate(82.739)" fill="#fff"/>
                        <circle id="Ellipse_325" data-name="Ellipse 325" cx="3.31" cy="3.31" r="3.31" transform="translate(0 10.48)" fill="#fff"/>
                        <circle id="Ellipse_326" data-name="Ellipse 326" cx="3.31" cy="3.31" r="3.31" transform="translate(13.79 10.48)" fill="#fff"/>
                        <circle id="Ellipse_327" data-name="Ellipse 327" cx="3.31" cy="3.31" r="3.31" transform="translate(27.58 10.48)" fill="#fff"/>
                        <circle id="Ellipse_328" data-name="Ellipse 328" cx="3.31" cy="3.31" r="3.31" transform="translate(41.369 10.48)" fill="#fff"/>
                        <circle id="Ellipse_329" data-name="Ellipse 329" cx="3.31" cy="3.31" r="3.31" transform="translate(55.159 10.48)" fill="#fff"/>
                        <circle id="Ellipse_330" data-name="Ellipse 330" cx="3.31" cy="3.31" r="3.31" transform="translate(68.949 10.48)" fill="#fff"/>
                        <circle id="Ellipse_331" data-name="Ellipse 331" cx="3.31" cy="3.31" r="3.31" transform="translate(82.739 10.48)" fill="#fff"/>
                        <circle id="Ellipse_332" data-name="Ellipse 332" cx="3.31" cy="3.31" r="3.31" transform="translate(0 20.961)" fill="#fff"/>
                        <circle id="Ellipse_333" data-name="Ellipse 333" cx="3.31" cy="3.31" r="3.31" transform="translate(13.79 20.961)" fill="#fff"/>
                        <circle id="Ellipse_334" data-name="Ellipse 334" cx="3.31" cy="3.31" r="3.31" transform="translate(27.58 20.961)" fill="#fff"/>
                        <circle id="Ellipse_335" data-name="Ellipse 335" cx="3.31" cy="3.31" r="3.31" transform="translate(41.369 20.961)" fill="#fff"/>
                        <circle id="Ellipse_336" data-name="Ellipse 336" cx="3.31" cy="3.31" r="3.31" transform="translate(55.159 20.961)" fill="#fff"/>
                        <circle id="Ellipse_337" data-name="Ellipse 337" cx="3.31" cy="3.31" r="3.31" transform="translate(68.949 20.961)" fill="#fff"/>
                        <circle id="Ellipse_338" data-name="Ellipse 338" cx="3.31" cy="3.31" r="3.31" transform="translate(82.739 20.961)" fill="#fff"/>
                        <circle id="Ellipse_339" data-name="Ellipse 339" cx="3.31" cy="3.31" r="3.31" transform="translate(0 31.441)" fill="#fff"/>
                        <circle id="Ellipse_340" data-name="Ellipse 340" cx="3.31" cy="3.31" r="3.31" transform="translate(13.79 31.441)" fill="#fff"/>
                        <circle id="Ellipse_341" data-name="Ellipse 341" cx="3.31" cy="3.31" r="3.31" transform="translate(0 41.921)" fill="#fff"/>
                        <circle id="Ellipse_342" data-name="Ellipse 342" cx="3.31" cy="3.31" r="3.31" transform="translate(13.79 41.921)" fill="#fff"/>
                        <circle id="Ellipse_343" data-name="Ellipse 343" cx="3.31" cy="3.31" r="3.31" transform="translate(27.58 41.921)" fill="#fff"/>
                        <circle id="Ellipse_344" data-name="Ellipse 344" cx="3.31" cy="3.31" r="3.31" transform="translate(27.58 31.441)" fill="#fff"/>
                        <circle id="Ellipse_345" data-name="Ellipse 345" cx="3.31" cy="3.31" r="3.31" transform="translate(41.369 31.441)" fill="#fff"/>
                        <circle id="Ellipse_346" data-name="Ellipse 346" cx="3.31" cy="3.31" r="3.31" transform="translate(55.159 31.441)" fill="#fff"/>
                        <circle id="Ellipse_347" data-name="Ellipse 347" cx="3.31" cy="3.31" r="3.31" transform="translate(68.949 31.441)" fill="#fff"/>
                        <circle id="Ellipse_348" data-name="Ellipse 348" cx="3.31" cy="3.31" r="3.31" transform="translate(82.739 31.441)" fill="#fff"/>
                        </g>
                        <g id="Group_65" data-name="Group 65" transform="translate(25.379 126.451)" opacity="0.4">
                        <circle id="Ellipse_349" data-name="Ellipse 349" cx="2.602" cy="2.602" r="2.602" transform="translate(0 65.051)" fill="#fff"/>
                        <circle id="Ellipse_350" data-name="Ellipse 350" cx="2.602" cy="2.602" r="2.602" transform="translate(0 54.21)" fill="#fff"/>
                        <circle id="Ellipse_351" data-name="Ellipse 351" cx="2.602" cy="2.602" r="2.602" transform="translate(0 43.368)" fill="#fff"/>
                        <circle id="Ellipse_352" data-name="Ellipse 352" cx="2.602" cy="2.602" r="2.602" transform="translate(0 32.526)" fill="#fff"/>
                        <circle id="Ellipse_353" data-name="Ellipse 353" cx="2.602" cy="2.602" r="2.602" transform="translate(0 21.684)" fill="#fff"/>
                        <circle id="Ellipse_354" data-name="Ellipse 354" cx="2.602" cy="2.602" r="2.602" transform="translate(0 10.842)" fill="#fff"/>
                        <circle id="Ellipse_355" data-name="Ellipse 355" cx="2.602" cy="2.602" r="2.602" fill="#fff"/>
                        <circle id="Ellipse_356" data-name="Ellipse 356" cx="2.602" cy="2.602" r="2.602" transform="translate(8.24 65.051)" fill="#fff"/>
                        <circle id="Ellipse_357" data-name="Ellipse 357" cx="2.602" cy="2.602" r="2.602" transform="translate(8.24 54.21)" fill="#fff"/>
                        <circle id="Ellipse_358" data-name="Ellipse 358" cx="2.602" cy="2.602" r="2.602" transform="translate(8.24 43.368)" fill="#fff"/>
                        <circle id="Ellipse_359" data-name="Ellipse 359" cx="2.602" cy="2.602" r="2.602" transform="translate(8.24 32.526)" fill="#fff"/>
                        <circle id="Ellipse_360" data-name="Ellipse 360" cx="2.602" cy="2.602" r="2.602" transform="translate(8.24 21.684)" fill="#fff"/>
                        <circle id="Ellipse_361" data-name="Ellipse 361" cx="2.602" cy="2.602" r="2.602" transform="translate(8.24 10.842)" fill="#fff"/>
                        <circle id="Ellipse_362" data-name="Ellipse 362" cx="2.602" cy="2.602" r="2.602" transform="translate(8.24)" fill="#fff"/>
                        <circle id="Ellipse_363" data-name="Ellipse 363" cx="2.602" cy="2.602" r="2.602" transform="translate(16.48 65.051)" fill="#fff"/>
                        <circle id="Ellipse_364" data-name="Ellipse 364" cx="2.602" cy="2.602" r="2.602" transform="translate(16.48 54.21)" fill="#fff"/>
                        <circle id="Ellipse_365" data-name="Ellipse 365" cx="2.602" cy="2.602" r="2.602" transform="translate(16.48 43.368)" fill="#fff"/>
                        <circle id="Ellipse_366" data-name="Ellipse 366" cx="2.602" cy="2.602" r="2.602" transform="translate(16.48 32.526)" fill="#fff"/>
                        <circle id="Ellipse_367" data-name="Ellipse 367" cx="2.602" cy="2.602" r="2.602" transform="translate(16.48 21.684)" fill="#fff"/>
                        <circle id="Ellipse_368" data-name="Ellipse 368" cx="2.602" cy="2.602" r="2.602" transform="translate(16.48 10.842)" fill="#fff"/>
                        <circle id="Ellipse_369" data-name="Ellipse 369" cx="2.602" cy="2.602" r="2.602" transform="translate(16.48)" fill="#fff"/>
                        <circle id="Ellipse_370" data-name="Ellipse 370" cx="2.602" cy="2.602" r="2.602" transform="translate(24.72 65.051)" fill="#fff"/>
                        <circle id="Ellipse_371" data-name="Ellipse 371" cx="2.602" cy="2.602" r="2.602" transform="translate(24.72 54.21)" fill="#fff"/>
                        <circle id="Ellipse_372" data-name="Ellipse 372" cx="2.602" cy="2.602" r="2.602" transform="translate(32.959 65.051)" fill="#fff"/>
                        <circle id="Ellipse_373" data-name="Ellipse 373" cx="2.602" cy="2.602" r="2.602" transform="translate(32.959 54.21)" fill="#fff"/>
                        <circle id="Ellipse_374" data-name="Ellipse 374" cx="2.602" cy="2.602" r="2.602" transform="translate(32.959 43.368)" fill="#fff"/>
                        <circle id="Ellipse_375" data-name="Ellipse 375" cx="2.602" cy="2.602" r="2.602" transform="translate(24.72 43.368)" fill="#fff"/>
                        <circle id="Ellipse_376" data-name="Ellipse 376" cx="2.602" cy="2.602" r="2.602" transform="translate(24.72 32.526)" fill="#fff"/>
                        <circle id="Ellipse_377" data-name="Ellipse 377" cx="2.602" cy="2.602" r="2.602" transform="translate(24.72 21.684)" fill="#fff"/>
                        <circle id="Ellipse_378" data-name="Ellipse 378" cx="2.602" cy="2.602" r="2.602" transform="translate(24.72 10.842)" fill="#fff"/>
                        <circle id="Ellipse_379" data-name="Ellipse 379" cx="2.602" cy="2.602" r="2.602" transform="translate(24.72)" fill="#fff"/>
                        </g>
                        <g id="card1" ref={e => card1 = e}>
                        <path id="Path_525" data-name="Path 525" d="M443.543,238.262H270.686a3.205,3.205,0,0,0-3.2,3.2v147.81a3.205,3.205,0,0,0,3.2,3.2H443.543a3.205,3.205,0,0,0,3.2-3.2V241.464A3.205,3.205,0,0,0,443.543,238.262Zm1.919,151.012a1.926,1.926,0,0,1-1.919,1.925H270.686a1.922,1.922,0,0,1-1.919-1.925V241.464a1.922,1.922,0,0,1,1.919-1.925H443.543a1.926,1.926,0,0,1,1.919,1.925Z" transform="translate(-185.917 -221.169)" fill="#3f3d56"/>
                        <path id="Path_526" data-name="Path 526" d="M326.43,473.13c0,.228-.006.456-.018.678a13.039,13.039,0,0,1-26.042,0c-.012-.222-.018-.45-.018-.678a13.039,13.039,0,1,1,26.078,0Z" transform="translate(-201.762 -328.105)" fill="#fff"/>
                        <path id="Path_527" data-name="Path 527" d="M484.094,468.479H381.64a2.174,2.174,0,0,0,0,4.347H484.094a2.174,2.174,0,0,0,0-4.347Z" transform="translate(-239.9 -332.149)" fill="#3f3d56"/>
                        <path id="Path_528" data-name="Path 528" d="M425.728,493.66H381.643a2.171,2.171,0,0,0,0,4.341h44.085a2.171,2.171,0,1,0,0-4.341Z" transform="translate(-239.903 -344.287)" fill="#fff"/>
                        </g>
                        <g id="card3" ref={e => card3 = e}>
                        <path id="Path_529" data-name="Path 529" d="M521.693,359.994H348.837a4.433,4.433,0,0,1-4.428-4.428V279.708a4.433,4.433,0,0,1,4.428-4.428H521.693a4.433,4.433,0,0,1,4.428,4.428v75.858A4.433,4.433,0,0,1,521.693,359.994Zm-172.856-83.16a2.877,2.877,0,0,0-2.874,2.874v75.858a2.878,2.878,0,0,0,2.874,2.874H521.693a2.878,2.878,0,0,0,2.874-2.874V279.708a2.877,2.877,0,0,0-2.874-2.874Z" transform="translate(-223 -239.014)" fill="#fff"/>
                        <path id="Path_530" data-name="Path 530" d="M418.9,328.7a2.173,2.173,0,0,0,0,4.346H521.353a2.173,2.173,0,1,0,0-4.346Z" transform="translate(-257.863 -264.766)" fill="#fff"/>
                        <path id="Path_531" data-name="Path 531" d="M418.9,353.012a2.173,2.173,0,0,0,0,4.346H521.353a2.173,2.173,0,0,0,0-4.346Z" transform="translate(-257.863 -276.486)" fill="#fff"/>
                        <path id="Path_532" data-name="Path 532" d="M418.9,377.029a2.173,2.173,0,1,0,0,4.346h44.085a2.173,2.173,0,0,0,0-4.346Z" transform="translate(-257.863 -288.064)" fill="#fff"/>
                        </g>
                        <g id="arrow" ref={e => arrow = e}>
                        <path id="Path_523" data-name="Path 523" d="M753.154,546.711a18.269,18.269,0,1,1,18.269-18.269A18.269,18.269,0,0,1,753.154,546.711Zm0-35.5a17.233,17.233,0,1,0,17.233,17.233A17.233,17.233,0,0,0,753.154,511.21Z" transform="translate(-411.235 -352.248)" fill="#3f3d56"/>
                        <path id="Path_524" data-name="Path 524" d="M769.013,535.546H763.76v-5.253a1.751,1.751,0,1,0-3.5,0v5.253H755a1.751,1.751,0,0,0,0,3.5h5.253V544.3a1.751,1.751,0,1,0,3.5,0v-5.253h5.253a1.751,1.751,0,1,0,0-3.5Z" transform="translate(-420.09 -361.103)" fill="#fff"/>
                        <path id="Path_533" data-name="Path 533" d="M722.237,476.138l-17.361-24.5,5.62,1.171a.777.777,0,0,0,.317-1.522l-8.375-1.743-1.13,8.479a.777.777,0,0,0,1.541.205l.758-5.694,17.363,24.5a.777.777,0,1,0,1.267-.9Z" transform="translate(-395.045 -323.019)" fill="#fff"/>
                        </g>
                        <g id="card2" ref={e => card2 = e}>
                        <path id="Path_534" data-name="Path 534" d="M442.684,605.836h-123.4A2.288,2.288,0,0,1,317,603.55V572.94a2.288,2.288,0,0,1,2.285-2.285h123.4a2.288,2.288,0,0,1,2.285,2.285V603.55A2.288,2.288,0,0,1,442.684,605.836Zm-123.4-34.267a1.373,1.373,0,0,0-1.371,1.371V603.55a1.373,1.373,0,0,0,1.371,1.371h123.4a1.373,1.373,0,0,0,1.371-1.371V572.94a1.373,1.373,0,0,0-1.371-1.371Z" transform="translate(-209.786 -381.404)" fill="#3f3d56"/>
                        <g id="card2-content">
                            <circle id="Ellipse_380" data-name="Ellipse 380" cx="9.309" cy="9.309" r="9.309" transform="translate(119.361 196.358)" fill="#fff"/>
                            <path id="Path_535" data-name="Path 535" d="M398.494,590.368a1.551,1.551,0,1,0,0,3.1h73.14a1.551,1.551,0,0,0,0-3.1Z" transform="translate(-248.325 -390.907)" fill="#fff"/>
                            <path id="Path_536" data-name="Path 536" d="M398.494,608.341a1.551,1.551,0,1,0,0,3.1h31.472a1.551,1.551,0,1,0,0-3.1Z" transform="translate(-248.325 -399.571)" fill="#fff"/>
                        </g>
                        </g>
                        <g id="right-card" ref={e  => rightCard = e}>
                        <g id="Group_67" data-name="Group 67">
                            <path id="Path_40" data-name="Path 40" d="M852.933,385.452a3.08,3.08,0,1,0,0,6.16h77.217a3.08,3.08,0,1,0,.1-6.159H852.933Z" transform="translate(-466.657 -292.124)" fill="#3f3d56"/>
                            <path id="Path_521" data-name="Path 521" d="M1034.581,383.632a.606.606,0,0,0,0,.857l2.6,2.6h-6.415a.606.606,0,0,0,0,1.212h6.415l-2.6,2.6a.606.606,0,1,0,.857.857l3.636-3.636a.606.606,0,0,0,0-.857l-3.636-3.636a.606.606,0,0,0-.857,0Z" transform="translate(-553.578 -291.161)" fill="#fff"/>
                            <path id="Path_522" data-name="Path 522" d="M817.58,383.632a.606.606,0,0,1,0,.857l-2.6,2.6h6.415a.606.606,0,0,1,0,1.212h-6.415l2.6,2.6a.606.606,0,1,1-.857.857l-3.636-3.636a.606.606,0,0,1,0-.857l3.636-3.636a.606.606,0,0,1,.857,0Z" transform="translate(-448.848 -291.161)" fill="#fff"/>
                        </g>
                        <g id="Group_68" data-name="Group 68">
                            <path id="Path_537" data-name="Path 537" d="M871.9,428.016h54.845a2.288,2.288,0,0,1,2.285,2.285V487.42a2.288,2.288,0,0,1-2.285,2.285H871.9a2.288,2.288,0,0,1-2.285-2.285V430.3A2.288,2.288,0,0,1,871.9,428.016Zm54.845,60.776a1.373,1.373,0,0,0,1.371-1.371V430.3a1.373,1.373,0,0,0-1.371-1.371H871.9a1.373,1.373,0,0,0-1.371,1.371V487.42a1.373,1.373,0,0,0,1.371,1.371Z" transform="translate(-476.182 -312.643)" fill="#3f3d56"/>
                            <path id="Path_538" data-name="Path 538" d="M926.616,521.492a1.551,1.551,0,0,0,0-3.1H895.144a1.551,1.551,0,1,0,0,3.1Z" transform="translate(-487.743 -356.209)" fill="#fff"/>
                            <path id="Path_539" data-name="Path 539" d="M926.616,503.843a1.551,1.551,0,0,0,0-3.1H895.144a1.551,1.551,0,1,0,0,3.1Z" transform="translate(-487.743 -347.701)" fill="#fff"/>
                            <path id="Path_540" data-name="Path 540" d="M917.881,450.758a9.766,9.766,0,1,1-9.766,9.766A9.766,9.766,0,0,1,917.881,450.758Z" transform="translate(-494.743 -323.606)" fill="#fff"/>
                        </g>
                        </g>
                    </g>
                    </svg>
                <svg   className="svg2" ref={e => svg2 = e} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 561.829 322.815">
                        <g id="Group_69" data-name="Group 69" transform="translate(-1242.671 524.136)">
                            <circle  ref={ e => circle1[2]=e}   id="Ellipse_381" data-name="Ellipse 381" cx="29.218" cy="29.218" r="29.218" transform="translate(1335.185 -296.024)" fill="#f2f2f2"/>
                            <circle  ref={ e => circle1[1]=e}   id="Ellipse_382" data-name="Ellipse 382" cx="29.218" cy="29.218" r="29.218" transform="translate(1339.936 -300.3)" fill="#f9a826"/>
                            <rect id="Rectangle_182" data-name="Rectangle 182" width="361.509" height="0.986" transform="translate(1392.686 -303.411)" fill="#3f3d56"/>
                            <g id="macbook" ref={e=> macbook=e}>
                            <path id="Path_541" data-name="Path 541" d="M381.244,138.663H252.93v-2.645H194.748v2.645H65.906a8.679,8.679,0,0,0-8.679,8.679v175.7a8.679,8.679,0,0,0,8.679,8.679H381.244a8.679,8.679,0,0,0,8.679-8.679v-175.7a8.679,8.679,0,0,0-8.679-8.679Z" transform="translate(1198.668 -653.6)" fill="#7e7e7e"/>
                            <rect id="Rectangle_183" data-name="Rectangle 183" width="309.424" height="174.547" transform="translate(1267.531 -499.598)" fill="#f9a826"/>
                            <circle id="Ellipse_383" data-name="Ellipse 383" cx="3.174" cy="3.174" r="3.174" transform="translate(1418.804 -510.705)" fill="#f9a826"/>
                            <path id="Path_542" data-name="Path 542" d="M271.34,224.3H50.406V49.754Z" transform="translate(1217.125 -549.352)" opacity="0.1"/>
                            <circle  ref={ e => circle2[0]=e}    id="Ellipse_384" data-name="Ellipse 384" cx="29.743" cy="29.743" r="29.743" transform="translate(1286.203 -397.598)" fill="#f2f2f2"/>
                            <rect ref={ e => button[0]=e}id="button-1" width="28.904" height="6.04" transform="translate(1494.175 -405.463)" fill="#3f3d56"/>
                            <g id="lines-1">
                                <rect ref={e=> line1[0]=e} id="Rectangle_185" data-name="Rectangle 185" width="98.79" height="2.588" transform="translate(1459.232 -452.486)" fill="#3f3d56"/>
                                <rect ref={e=> line1[1]=e} id="Rectangle_186" data-name="Rectangle 186" width="98.79" height="2.588" transform="translate(1459.232 -444.289)" fill="#3f3d56"/>
                                <rect ref={e=> line1[2]=e} id="Rectangle_187" data-name="Rectangle 187" width="98.79" height="2.588" transform="translate(1459.232 -436.092)" fill="#3f3d56"/>
                                <rect ref={e=> line1[3]=e} id="Rectangle_188" data-name="Rectangle 188" width="98.79" height="2.588" transform="translate(1459.232 -427.896)" fill="#3f3d56"/>
                                <rect ref={e=> line1[4]=e} id="Rectangle_189" data-name="Rectangle 189" width="98.79" height="2.588" transform="translate(1459.232 -419.699)" fill="#3f3d56"/>
                            </g>
                            <rect id="Rectangle_190" data-name="Rectangle 190" width="12.079" height="12.079" transform="translate(1545.943 -496.057)" fill="#f2f2f2"/>
                            <path id="Path_543" data-name="Path 543" d="M666.122,200.453H651.455V185.785h14.667Zm-14.03-.638h13.392V186.423H652.092Z" transform="translate(897.508 -678.822)" fill="#3f3d56"/>
                            <path id="Path_544" data-name="Path 544" d="M385.023,517.281h-30.2v-2.176a.431.431,0,0,0-.431-.431H344.04a.431.431,0,0,0-.431.431v2.176h-6.471v-2.176a.431.431,0,0,0-.431-.431H326.353a.431.431,0,0,0-.431.431v2.176H319.45v-2.176a.431.431,0,0,0-.431-.431H308.665a.431.431,0,0,0-.431.431v2.176h-6.471v-2.176a.431.431,0,0,0-.431-.431H290.978a.431.431,0,0,0-.431.431v2.176h-6.471v-2.176a.431.431,0,0,0-.431-.431H273.291a.431.431,0,0,0-.431.431v2.176h-6.471v-2.176a.431.431,0,0,0-.431-.431H255.6a.431.431,0,0,0-.431.431v2.176H248.7v-2.176a.431.431,0,0,0-.431-.431h-81.1a.431.431,0,0,0-.431.431v2.176h-6.471v-2.176a.431.431,0,0,0-.431-.431H149.48a.431.431,0,0,0-.431.431v2.176h-6.471v-2.176a.431.431,0,0,0-.431-.431H131.793a.431.431,0,0,0-.431.431v2.176H124.89v-2.176a.431.431,0,0,0-.431-.431H114.105a.431.431,0,0,0-.431.431v2.176H107.2v-2.176a.431.431,0,0,0-.431-.431H96.418a.431.431,0,0,0-.431.431v2.176H89.516v-2.176a.431.431,0,0,0-.431-.431H78.731a.431.431,0,0,0-.431.431v2.176H71.829v-2.176a.431.431,0,0,0-.431-.431H61.044a.431.431,0,0,0-.431.431v2.176H40.768a10.354,10.354,0,0,0-10.354,10.354v4.682A10.354,10.354,0,0,0,40.768,542.67H385.023a10.354,10.354,0,0,0,10.353-10.354v-4.682a10.354,10.354,0,0,0-10.353-10.354Z" transform="translate(1212.256 -845.506)" fill="#7e7e7e"/>
                            <path id="Path_545" data-name="Path 545" d="M155.068,400.237a37.483,37.483,0,1,1,37.483-37.483,37.483,37.483,0,0,1-37.483,37.483Zm0-73.979a36.5,36.5,0,1,0,36.5,36.5A36.5,36.5,0,0,0,155.068,326.258Z" transform="translate(1168.077 -749.515)" fill="#3f3d56"/>
                            </g>
                            <rect id="Rectangle_191" data-name="Rectangle 191" width="125.764" height="0.986" transform="translate(1531.766 -508.086)" fill="#3f3d56"/>
                            <rect id="Rectangle_192" data-name="Rectangle 192" width="361.509" height="0.986" transform="translate(1442.991 -247.681)" fill="#7e7e7e"/>
                            <rect ref={ e => rectangle1[1]=e}id="rectangle-2" width="14" height="14" transform="translate(1475 -253)" fill="#f9a826"/>
                            <path id="Path_546" data-name="Path 546" d="M529.183,667.5H512.415V650.728h16.769Zm-16.039-.729h15.31v-15.31h-15.31Z" transform="translate(967.974 -914.459)" fill="#7e7e7e"/>
                            <rect  ref={ e => rectangle1[0]=e}   id="rectangle-1" width="14" height="14" transform="translate(1635 -513)" fill="#f9a826"/>
                            <path id="Path_547" data-name="Path 547" d="M854.183,139.5H837.415V122.728h16.768Zm-16.039-.729h15.31v-15.31h-15.31Z" transform="translate(803.262 -646.864)" fill="#3f3d56"/>
                            <rect ref={ e => rectangle1[2]=e}id="rectangle-3" width="14" height="14" transform="translate(1774 -253)" fill="#f9a826"/>
                            <path id="Path_548" data-name="Path 548" d="M1136.183,667.5h-16.769V650.728h16.769Zm-16.04-.729h15.31v-15.31h-15.31Z" transform="translate(660.342 -914.459)" fill="#7e7e7e"/>
                            <path ref={ e => circle1[0]=e}   id="Path_553" data-name="Path 553" d="M306.494,689.087A42.908,42.908,0,1,1,349.4,646.179a42.908,42.908,0,0,1-42.908,42.908Zm0-84.829a41.921,41.921,0,1,0,41.921,41.921,41.921,41.921,0,0,0-41.921-41.921Z" transform="translate(1094.083 -890.408)" fill="#7e7e7e"/>
                            <g id="phone"  ref={e=> phone=e}>
                            <path id="Path_549" data-name="Path 549" d="M978.186,302.548h-1.173V270.411a18.6,18.6,0,0,0-18.6-18.6H890.326a18.6,18.6,0,0,0-18.6,18.6V446.718a18.6,18.6,0,0,0,18.6,18.6h68.087a18.6,18.6,0,0,0,18.6-18.6V325.424h1.173Z" transform="translate(785.872 -712.284)" fill="#7e7e7e"/>
                            <path id="Path_550" data-name="Path 550" d="M978.328,277.47v176.05a13.891,13.891,0,0,1-13.891,13.893H896.024a13.89,13.89,0,0,1-13.888-13.891V277.47a13.889,13.889,0,0,1,13.887-13.888h8.3a6.6,6.6,0,0,0,6.111,9.089h39.007a6.6,6.6,0,0,0,6.111-9.09h8.887a13.889,13.889,0,0,1,13.888,13.887Z" transform="translate(780.596 -718.25)" fill="#f9a826"/>
                            <rect ref={ e => button[1]=e} id="button-2" width="20.38" height="6.04" transform="translate(1700.638 -338.589)" fill="#3f3d56"/>
                            <g id="lines-2">
                                <rect ref={ e => line2[0]=e}id="Rectangle_198" data-name="Rectangle 198" width="69.658" height="2.588" transform="translate(1675.999 -385.611)" fill="#3f3d56"/>
                                <rect ref={ e => line2[1]=e}id="Rectangle_199" data-name="Rectangle 199" width="69.658" height="2.588" transform="translate(1675.999 -377.414)" fill="#3f3d56"/>
                                <rect ref={ e => line2[2]=e}id="Rectangle_200" data-name="Rectangle 200" width="69.658" height="2.588" transform="translate(1675.999 -369.218)" fill="#3f3d56"/>
                                <rect ref={ e => line2[3]=e}id="Rectangle_201" data-name="Rectangle 201" width="69.658" height="2.588" transform="translate(1675.999 -361.021)" fill="#3f3d56"/>
                                <rect ref={ e => line2[4]=e}id="Rectangle_202" data-name="Rectangle 202" width="69.658" height="2.588" transform="translate(1675.999 -352.825)" fill="#3f3d56"/>
                            </g>
                            <rect id="Rectangle_203" data-name="Rectangle 203" width="12.079" height="12.079" transform="translate(1701.183 -419.984)" fill="#f2f2f2"/>
                            <path id="Path_551" data-name="Path 551" d="M969.474,340.032V354.7h14.667V340.032Zm14.031,14.031h-13.4v-13.4h13.4Z" transform="translate(736.333 -756.995)" fill="#3f3d56"/>
                            <path id="Path_552" data-name="Path 552" d="M978.328,532.487v18.8a13.891,13.891,0,0,1-13.891,13.893H896.024a13.89,13.89,0,0,1-13.888-13.891v-94.8l57.639,45.536.986.779,10.722,8.468,1,.794Z" transform="translate(780.596 -816.018)" opacity="0.1"/>
                            <circle  ref={ e => circle2[1]=e}   id="Ellipse_385" data-name="Ellipse 385" cx="21.635" cy="21.635" r="21.635" transform="translate(1683.275 -299.813)" fill="#f2f2f2"/>
                            <path id="Path_554" data-name="Path 554" d="M952.711,599.523A27.126,27.126,0,1,1,979.837,572.4a27.125,27.125,0,0,1-27.125,27.126Zm0-53.265A26.139,26.139,0,1,0,978.851,572.4,26.139,26.139,0,0,0,952.711,546.258Z" transform="translate(758.576 -861.013)" fill="#3f3d56"/>
                            </g>
                        </g>
                        </svg>

                </div>
            </div>
            <div className="works">
                <div className="work" data-aos="flip-up"    data-aos-anchor=""    data-aos-delay="100"    data-aos-easing="ease-out-sine">
                <div className="word__details">
                        <h3 className="name">H&M Fasion Store</h3>
                        <p className="description">Mockup</p>
                        <p className="techs">React Firebase</p>
                    </div>
                </div>
                <div className="work second-work" data-aos="flip-left" data-aos-anchor=""     data-aos-delay="100"    data-aos-easing="ease-out-sine">
                    <div className="word__details">
                        <h3 className="name">Easy Groceries </h3>
                        <p className="description">Online Grocery Store</p>
                        <p className="techs">React Firebase</p>
                    </div>
                </div>
                <div className="work" data-aos="flip-down"  data-aos-anchor=""    data-aos-delay="100"    data-aos-easing="ease-out-sine">
                <div className="word__details">
                        <h3 className="name">Apeiro Movies </h3>
                        <p className="description">Movie Database</p>
                        <p className="techs">React Firebase</p>
                    </div>
                </div>
                <div className="work monalisa" data-aos="flip-right"  data-aos-anchor=""   data-aos-delay="100"    data-aos-easing="ease-out-sine">
                    <div className="word__details">
                        <h3 className="name">Monalisa Studio</h3>
                        <p className="description">Photography Studio Landing</p>
                        <p className="techs">React Firebase</p>
                    </div>
                </div>
                <div className="work illustrations last-work" data-aos="flip-left" data-aos-anchor=""     data-aos-delay="100"   data-aos-easing="ease-out-sine">
                    <div className="word__details">
                        <p className="description">Illustrations</p>
                        <p className="techs">Photoshop Wacom </p>
                    </div>
                </div>
                <div className="work second-last" data-aos="flip-up"    data-aos-anchor=""    data-aos-delay="100"    data-aos-easing="ease-out-sine">
                <div className="word__details">
                        <h3 className="name">Lakeridge Health</h3>
                        <p className="description">Cancer Clinical Trial </p>
                        <p className="techs">JavaScript</p>
                    </div>
                </div>
            </div>
            <div className="html_css_js" >
            
                <div className="about about_html">
                    <p className="pri">HTML</p>
                    <p className="ter orange">is</p>
                    <p className="sec">Structure</p>
                </div>
                <div className="about about_css ">
                    <p className="pri" data-aos="flip-down" data-aos-delay="80">CSS</p>
                    <p className="ter" data-aos="flip-down" data-aos-delay="120">is</p>
                    <p className="sec orange" data-aos="flip-down" data-aos-delay="140">Presentation</p>
                    </div>
                <div className="about about_js">
                <ParallaxBanner
                    className="your-class"
                    layers={[
                        {
                            children: <p  className="pri" style={{paddingTop:'250px'}}>Javascript</p>,
                            amount: -0.5,
                        },
                        {
                            children: <p className="ter" style={{paddingTop:'370px'}}>is</p>,
                            amount: -0.6,
                        },
                        {
                            children: <div className="behavior-image"></div>,
                            amount:0,
                        },
                        {
                            children: <p  className="sec" style={{paddingTop:'490px'}}>Behavior</p>,
                            amount: -0.75,
                        }
                    ]}
                    style={{
                        height: '500px'
                    }}
>
                    </ParallaxBanner>
                </div>
            </div>
            
            <div className="details">
                <div className="details__top">
                    <h1 className="name">Abhay Vincent</h1>
                    <p>Front-end developer</p>
                </div>
                <div className="details__left">
                    <div className="label1">DETAILS</div>

                    <div className="label2">ADDRESS</div>
                    <div className="content1">Toronto, Canada</div>
                    <div className="label2">PHONE</div>
                    <div className="content1">+1 365 688 2276</div>
                    <div className="label2">EMAIL</div>
                    <div className="content1">abhaykvincent@gmail.com</div>
                    <div className="label2">BORN</div>
                    <div className="content1">Kochi, India</div>
                </div>
                <div className="details__right">

                <div className="label1">ABOUT ME</div>
                <p>I’m a front-end developer who believes in Design, Good Design, that solves problems in artistic ways.</p><br/>

                <p>I love building responsive websites, applications, landing pages using HTML, React, SCSS, JavaScript ES6, Firebase, Node.js, Redux, npm, Git.</p><br/>


                <p>I'm currently interested in learning SVG animations, Commercial Web Applications.</p>
                </div>
            </div>
            <div className="social-section splash__left_social">

                        <a className="social-sec" href="http://www.facebook.com/abhay.vincent"><div > </div></a>
                        <a className="social-sec" href="http://www.instagram.com/fullstack_lad"><div ></div></a>
                        <a className="social-sec" href="https://www.linkedin.com/in/abhayvincent/"><div ></div></a>
                        <a className="social-sec" href="http://www.twitter.com/abhaykvincent"><div ></div></a>
                    
            </div>
            {/*     

                    dark background !! **

                    Social *
                        Instagram
                        Dribble
                        Twitter

            */}

            <div className="freelance" data-aos="flip-down" data-aos-delay="100">
                <div className="top__image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 653.513 251.176">
                    <g id="Group_27" data-name="Group 27" transform="translate(-383.804 35.342)">
                        <ellipse className="eclipse_motion"  id="Ellipse_84" data-name="Ellipse 84" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(665.159 -35.342)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_85" data-name="Ellipse 85" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(665.159 29.454)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_86" data-name="Ellipse 86" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(733.039 -35.342)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_87" data-name="Ellipse 87" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(733.039 29.454)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_88" data-name="Ellipse 88" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(800.92 -35.342)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_89" data-name="Ellipse 89" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(800.92 29.454)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_90" data-name="Ellipse 90" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(800.92 94.251)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_105" data-name="Ellipse 105" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(936.92 94.251)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_91" data-name="Ellipse 91" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(800.92 159.047)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_106" data-name="Ellipse 106" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(936.92 159.047)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_92" data-name="Ellipse 92" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(868.8 -35.342)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_93" data-name="Ellipse 93" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(868.8 29.454)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_94" data-name="Ellipse 94" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(868.8 94.251)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_104" data-name="Ellipse 104" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(1004.8 94.251)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_95" data-name="Ellipse 95" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(868.8 159.047)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_103" data-name="Ellipse 103" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(1004.8 159.047)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_96" data-name="Ellipse 96" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(936.681 -35.342)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_97" data-name="Ellipse 97" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(936.681 29.454)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_98" data-name="Ellipse 98" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(1004.561 -35.342)" fill="#f2f2f2"/>
                        <ellipse className="eclipse_motion"  id="Ellipse_99" data-name="Ellipse 99" cx="16.258" cy="16.258" rx="16.258" ry="16.258" transform="translate(1004.561 29.454)" fill="#f2f2f2"/>
                        <path   id="Path_331" data-name="Path 331" d="M490.527,369.357h-76.52a8.408,8.408,0,0,1-8.4-8.4V277.906a8.408,8.408,0,0,1,8.4-8.4h76.52a8.408,8.408,0,0,1,8.4,8.4v83.052A8.408,8.408,0,0,1,490.527,369.357Zm-76.52-97.983a6.539,6.539,0,0,0-6.532,6.532v83.052a6.54,6.54,0,0,0,6.532,6.532h76.52a6.539,6.539,0,0,0,6.532-6.532V277.906a6.539,6.539,0,0,0-6.532-6.532Z" transform="translate(-21.804 -153.523)" fill="#3f3d56"/>
                        <path id="Path_332" data-name="Path 332" d="M640.527,369.357h-76.52a8.408,8.408,0,0,1-8.4-8.4V277.906a8.408,8.408,0,0,1,8.4-8.4h76.52a8.408,8.408,0,0,1,8.4,8.4v83.052A8.408,8.408,0,0,1,640.527,369.357Zm-76.52-97.983a6.54,6.54,0,0,0-6.532,6.532v83.052a6.539,6.539,0,0,0,6.532,6.532h76.52a6.539,6.539,0,0,0,6.532-6.532V277.906a6.539,6.539,0,0,0-6.532-6.532Z" transform="translate(-31.828 -153.523)" fill="#3f3d56"/>
                        <path id="Path_333" data-name="Path 333" d="M430.288,305.372h-7.465a4.2,4.2,0,0,1-4.2-4.2v-7.465a4.2,4.2,0,0,1,4.2-4.2h7.465a4.2,4.2,0,0,1,4.2,4.2v7.465A4.2,4.2,0,0,1,430.288,305.372Z" transform="translate(-22.674 -154.859)" fill="#f9a826"/>
                        <path id="Path_334" data-name="Path 334" d="M430.288,330.372h-7.465a4.2,4.2,0,0,1-4.2-4.2v-7.465a4.2,4.2,0,0,1,4.2-4.2h7.465a4.2,4.2,0,0,1,4.2,4.2v7.465a4.2,4.2,0,0,1-4.2,4.2Z" transform="translate(-22.674 -156.53)" fill="#ccc"/>
                        <path id="Path_335" data-name="Path 335" d="M486.9,301.159H452.044a2.8,2.8,0,0,1-2.8-2.8V297.17a2.8,2.8,0,0,1,2.8-2.8H486.9a2.8,2.8,0,0,1,2.8,2.8v1.189a2.8,2.8,0,0,1-2.8,2.8Z" transform="translate(-24.72 -155.184)" fill="#f9a826"/>
                        <path id="Path_336" data-name="Path 336" d="M580.978,303.8h-7.465a4.2,4.2,0,0,1-4.2-4.2v-7.465a4.2,4.2,0,0,1,4.2-4.2h7.465a4.2,4.2,0,0,1,4.2,4.2V299.6a4.2,4.2,0,0,1-4.2,4.2Z" transform="translate(-32.744 -154.754)" fill="#ccc"/>
                        <path id="Path_337" data-name="Path 337" d="M637.587,299.59H602.733a2.8,2.8,0,0,1-2.8-2.8V295.6a2.8,2.8,0,0,1,2.8-2.8h34.854a2.8,2.8,0,0,1,2.8,2.8v1.189A2.8,2.8,0,0,1,637.587,299.59Z" transform="translate(-34.79 -155.079)" fill="#ccc"/>
                        <path id="Path_338" data-name="Path 338" d="M635.448,323.59H570.733a2.8,2.8,0,0,1-2.8-2.8V319.6a2.8,2.8,0,0,1,2.8-2.8h64.715a2.8,2.8,0,0,1,2.8,2.8v1.189A2.8,2.8,0,0,1,635.448,323.59Z" transform="translate(-32.652 -156.683)" fill="#f9a826"/>
                        <path id="Path_339" data-name="Path 339" d="M635.448,340.59H570.733a2.8,2.8,0,0,1-2.8-2.8V336.6a2.8,2.8,0,0,1,2.8-2.8h64.715a2.8,2.8,0,0,1,2.8,2.8v1.189A2.8,2.8,0,0,1,635.448,340.59Z" transform="translate(-32.652 -157.819)" fill="#ccc"/>
                        <path id="Path_340" data-name="Path 340" d="M635.448,357.59H570.733a2.8,2.8,0,0,1-2.8-2.8V353.6a2.8,2.8,0,0,1,2.8-2.8h64.715a2.8,2.8,0,0,1,2.8,2.8v1.189a2.8,2.8,0,0,1-2.8,2.8Z" transform="translate(-32.652 -158.955)" fill="#ccc"/>
                        <path id="Path_341" data-name="Path 341" d="M790.527,369.357h-76.52a8.408,8.408,0,0,1-8.4-8.4V277.906a8.408,8.408,0,0,1,8.4-8.4h76.52a8.408,8.408,0,0,1,8.4,8.4v83.052A8.408,8.408,0,0,1,790.527,369.357Zm-76.52-97.983a6.54,6.54,0,0,0-6.532,6.532v83.052a6.54,6.54,0,0,0,6.532,6.532h76.52a6.539,6.539,0,0,0,6.532-6.532V277.906a6.539,6.539,0,0,0-6.532-6.532Z" transform="translate(-41.852 -153.523)" fill="#3f3d56"/>
                        <path id="Path_342" data-name="Path 342" d="M787.587,299.59H752.733a2.8,2.8,0,0,1-2.8-2.8V295.6a2.8,2.8,0,0,1,2.8-2.8h34.853a2.8,2.8,0,0,1,2.8,2.8v1.189a2.8,2.8,0,0,1-2.8,2.8Z" transform="translate(-44.814 -155.079)" fill="#ccc"/>
                        <path id="Path_343" data-name="Path 343" d="M785.448,323.59H720.733a2.8,2.8,0,0,1-2.8-2.8V319.6a2.8,2.8,0,0,1,2.8-2.8h64.715a2.8,2.8,0,0,1,2.8,2.8v1.189A2.8,2.8,0,0,1,785.448,323.59Z" transform="translate(-42.676 -156.683)" fill="#ccc"/>
                        <path id="Path_344" data-name="Path 344" d="M785.448,340.59H720.733a2.8,2.8,0,0,1-2.8-2.8V336.6a2.8,2.8,0,0,1,2.8-2.8h64.715a2.8,2.8,0,0,1,2.8,2.8v1.189A2.8,2.8,0,0,1,785.448,340.59Z" transform="translate(-42.676 -157.819)" fill="#ccc"/>
                        <path id="Path_345" data-name="Path 345" d="M785.448,357.59H720.733a2.8,2.8,0,0,1-2.8-2.8V353.6a2.8,2.8,0,0,1,2.8-2.8h64.715a2.8,2.8,0,0,1,2.8,2.8v1.189a2.8,2.8,0,0,1-2.8,2.8Z" transform="translate(-42.676 -158.955)" fill="#ccc"/>
                        <path id="Path_346" data-name="Path 346" d="M486.9,326.159H452.044a2.8,2.8,0,0,1-2.8-2.8V322.17a2.8,2.8,0,0,1,2.8-2.8H486.9a2.8,2.8,0,0,1,2.8,2.8v1.189a2.8,2.8,0,0,1-2.8,2.8Z" transform="translate(-24.72 -156.855)" fill="#ccc"/>
                        <path id="Path_347" data-name="Path 347" d="M430.288,355.372h-7.465a4.2,4.2,0,0,1-4.2-4.2v-7.465a4.2,4.2,0,0,1,4.2-4.2h7.465a4.2,4.2,0,0,1,4.2,4.2v7.465A4.2,4.2,0,0,1,430.288,355.372Z" transform="translate(-22.674 -158.2)" fill="#ccc"/>
                        <path id="Path_348" data-name="Path 348" d="M486.9,351.159H452.044a2.8,2.8,0,0,1-2.8-2.8V347.17a2.8,2.8,0,0,1,2.8-2.8H486.9a2.8,2.8,0,0,1,2.8,2.8v1.189a2.8,2.8,0,0,1-2.8,2.8Z" transform="translate(-24.72 -158.525)" fill="#ccc"/>
                        <path id="Path_349" data-name="Path 349" d="M736,294.9c0-.022,0-.042,0-.064a8.4,8.4,0,0,0-8.4-8.4V294.9Z" transform="translate(-43.322 -154.654)" fill="#f9a826"/>
                        <path id="Path_350" data-name="Path 350" d="M726.007,295.9v-8.462a8.4,8.4,0,1,0,8.4,8.462Z" transform="translate(-42.654 -154.72)" fill="#ccc"/>
                    </g>
                    </svg>

                </div>
                <div className="freelance__content">
                    <h2 data-aos="flip-up" data-aos-delay="100">I occasionally take on freelance opportunities.</h2>
                    <p data-aos="flip-up" data-aos-delay="200">Have an exciting project where you need some help? Send me over a message, and let’s chat.</p>
                </div>
            </div>
            
            <div className="cta"></div>
            {/*     Works       */}
            {/*     CTA         */}
        </div>
    )
}


