import React, { createRef, useEffect, useRef } from 'react'
import './App.css';
import NavBar from './components/Navbar.jsx'
import Wrapper from './components/Wrapper'
import LanguageBox from './components/LanguageBox'
import ProjectBox from './components/ProjectBox'
import OneSettings from './images/OneSettings.png'
import Ourea from './images/Ourea.png'
import SmallTweaks from './images/SmallTweaks.png'
import Hexact from './images/Hexact.png'
import Footer from './components/Footer';

function App() {

  const navBarRef = useRef()
  const firstWrapperRef = createRef()
  const secondWrapperRef = createRef()
  const thirdWrapperRef = createRef()
  const fourthWrapperRef = createRef()
  const bodyRef = createRef()

  let selected = 0

  const scroll = () => {
    secondWrapperRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  const scrollToContact = () => {
    fourthWrapperRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  useEffect(() => {
    document.addEventListener('scroll', e => {

      let scrolled = document.scrollingElement.scrollTop
      let secondOffsetTop = secondWrapperRef.current.offsetTop
      let thirdOffsetTop = thirdWrapperRef.current.offsetTop

      if (scrolled + 400 >= secondOffsetTop && scrolled + 300 <= thirdOffsetTop) {
        thirdWrapperRef.current.style.animation = 'secondview 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
        selected = 1
      } else if (scrolled <= secondOffsetTop){
        selected = 0
        secondWrapperRef.current.style.animation = 'secondview 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
      } else {
        selected = 2
        fourthWrapperRef.current.style.animation = 'secondview 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
      }

      navBarRef.current.update(selected)
    })

    navBarRef.current.update(selected)
  })

  return (
    <React.Fragment>
      <div ref={bodyRef} className='body'>
        <div ref={firstWrapperRef}>
          <Wrapper className='wrapper'>
            <svg className='background-image' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1000 828' preserveAspectRatio='xMidYMid meet'>
              <g id='Custom_Size_1' data-name='Custom Size – 1' clipPath='url(#clip-Custom_Size_1)'>
                  <path id='Path_1' data-name='Path 1' d='M233,1135.818H374.914V655.024L527.972,1002.31l121.951,121.951H827.609l52.23-52.23,52.231,52.23h178.98L1233,1002.31V296.945H1091.932v645.7l-39.506,39.506H994.009L954.5,942.649v-645.7H812.128v645.7l-39.506,39.506h-63.16l-39.506-39.506v-645.7H527.972V643.683L374.914,296.945H233Z' transform='translate(-233.001 -296.945)'/>
              </g>
            </svg>
            <h1 className='wrapper-intro-header'>
              <div className='wrapper-header-box'></div>
              Hello! I'm Nightwind
            </h1>
            <h1 className='wrapper-intro-description'>
              <div className='wrapper-header-box'></div>
              iOS and web developer
            </h1>
            <div className='contact-wrapper'>
              <a className='contact-button' href='https://github.com/NightwindDev' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                <svg fill='#FFFFFF' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' width='30px'
                    height='30px'>
                    <path
                        d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z' />
                </svg>
              </a>
              <a className='contact-button' href='https://discord.gg/K3wGBBhPqp' target='_blank' rel='noopener noreferrer' aria-label='Discord'>
                <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Discord</title><path d='M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z'/></svg>
              </a>
              <a className='contact-button' href='https://twitter.com/NightwindDev' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
                <svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg'
                                  x='0px' y='0px' viewBox='0 0 455.731 455.731'>
                    <g>
                        <path
                            d='M60.377,337.822c30.33,19.236,66.308,30.368,104.875,30.368c108.349,0,196.18-87.841,196.18-196.18
                        c0-2.705-0.057-5.39-0.161-8.067c3.919-3.084,28.157-22.511,34.098-35c0,0-19.683,8.18-38.947,10.107
                        c-0.038,0-0.085,0.009-0.123,0.009c0,0,0.038-0.019,0.104-0.066c1.775-1.186,26.591-18.079,29.951-38.207
                        c0,0-13.922,7.431-33.415,13.932c-3.227,1.072-6.605,2.126-10.088,3.103c-12.565-13.41-30.425-21.78-50.25-21.78
                        c-38.027,0-68.841,30.805-68.841,68.803c0,5.362,0.617,10.581,1.784,15.592c-5.314-0.218-86.237-4.755-141.289-71.423
                        c0,0-32.902,44.917,19.607,91.105c0,0-15.962-0.636-29.733-8.864c0,0-5.058,54.416,54.407,68.329c0,0-11.701,4.432-30.368,1.272
                        c0,0,10.439,43.968,63.271,48.077c0,0-41.777,37.74-101.081,28.885L60.377,337.822z' />
                    </g>
                </svg>
              </a>
              <a className='contact-button' href='https://nightwinddev.github.io' target='_blank' rel='noopener noreferrer' aria-label='Repo'>
                <svg className='svg-icon' viewBox='0 0 1024 1024'
                    version='1.1' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M874.24 320.853333a8.106667 8.106667 0 0 1 0-3.413333 7.253333 7.253333 0 0 1 0-2.986667v-3.84l-2.56-6.4a20.48 20.48 0 0 0-3.84-4.693333l-3.84-3.413333h-2.133333l-168.106667-106.24-158.72-98.133334a36.266667 36.266667 0 0 0-12.373333-6.4h-3.413334a34.986667 34.986667 0 0 0-11.52 0h-4.266666a48.213333 48.213333 0 0 0-14.08 5.546667L170.666667 289.28l-3.84 2.986667-3.84 3.413333-4.266667 2.986667-2.133333 2.56-2.56 6.4v6.4a29.44 29.44 0 0 0 0 8.533333v372.48a42.666667 42.666667 0 0 0 20.053333 36.266667l320 197.973333 6.4 2.56h3.413333a36.693333 36.693333 0 0 0 22.186667 0h3.413333l6.4-2.56L853.333333 734.293333a42.666667 42.666667 0 0 0 20.053334-36.266666V325.546667s0.853333-2.986667 0.853333-4.693334zM512 177.92l75.946667 46.933333-238.506667 147.626667-76.373333-46.933333z m-42.666667 640l-234.666666-143.36V401.92l234.666666 145.066667z m42.666667-346.026667l-81.493333-49.066666 238.506666-148.053334 81.92 50.773334z m277.333333 201.386667L554.666667 819.2v-272.213333l234.666666-145.066667z' />
                </svg>
              </a>
              <a className='contact-button' onClick={scrollToContact} target='_blank' rel='noopener noreferrer' aria-label='Repo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="385" height="369" viewBox="0 0 385 369">
                  <g id="Custom_Size_1" data-name="Custom Size – 1" clip-path="url(#clip-Custom_Size_1)">
                    <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(36 54)" fill="none" stroke="#fff" stroke-width="40">
                      <rect width="314" height="261" rx="73" stroke="none"/>
                      <rect x="20" y="20" width="274" height="221" rx="53" fill="none"/>
                    </g>
                    <line id="Line_1" data-name="Line 1" x2="135" y2="82" transform="translate(57.5 127.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="40"/>
                    <line id="Line_2" data-name="Line 2" x1="134" y2="82" transform="translate(192.5 127.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="40"/>
                  </g>
                </svg>
              </a>
            </div>
            <button className='scroll-button' onClick={scroll} aria-label='Scroll Down'>
              <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 21 21'>
                <g id='Group_1' data-name='Group 1' transform='translate(-254 -232)'>
                  <rect id='Rectangle_1' data-name='Rectangle 1' className='cls-1' width='21' height='21' transform='translate(254 232)'/>
                  <path id='angle-down' d='M107.741,10.99l-8.3,8.6a1.318,1.318,0,0,1-1.911,0,1.437,1.437,0,0,1,0-1.981L104.875,10,97.535,2.391a1.437,1.437,0,0,1,0-1.981,1.318,1.318,0,0,1,1.911,0l8.3,8.6a1.436,1.436,0,0,1,0,1.98Z' transform='translate(274.5 139.862) rotate(90)'/>
                </g>
              </svg>
            </button>
          </Wrapper>
        </div>
        <div className='scrolled-into-view' ref={secondWrapperRef}>
          <Wrapper className='dynamic-wrapper'>
            <h1 className='wrapper-title'>My Knowledge</h1>
            <div className='language-wrapper'>
              <LanguageBox>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='X100Y200 meet'>
                  <g id='Custom_Size_1' data-name='Custom Size – 1' clipPath='url(#clip-Custom_Size_1)' transform='scale(0.2)'>
                    <path id='Exclusion_1' data-name='Exclusion 1' d='M250,500a251.849,251.849,0,0,1-50.384-5.079A248.63,248.63,0,0,1,110.223,457.3,250.73,250.73,0,0,1,19.646,347.311,248.744,248.744,0,0,1,5.079,300.384a252.44,252.44,0,0,1,0-100.767A248.632,248.632,0,0,1,42.7,110.223,250.729,250.729,0,0,1,152.689,19.646,248.741,248.741,0,0,1,199.616,5.079a252.44,252.44,0,0,1,100.767,0A248.632,248.632,0,0,1,389.778,42.7a250.73,250.73,0,0,1,90.577,109.993,248.734,248.734,0,0,1,14.567,46.928,252.44,252.44,0,0,1,0,100.767A248.63,248.63,0,0,1,457.3,389.778a250.732,250.732,0,0,1-109.993,90.577,248.736,248.736,0,0,1-46.928,14.567A251.846,251.846,0,0,1,250,500Zm6.95-312.244a122.575,122.575,0,0,0-28.447,3.13,88.018,88.018,0,0,0-23.82,9.39,81.219,81.219,0,0,0-18.928,15.133,84.726,84.726,0,0,0-13.77,20.361,106.089,106.089,0,0,0-8.393,25.117,146.881,146.881,0,0,0-2.8,29.4v24.592a146.966,146.966,0,0,0,2.784,29.345,105.735,105.735,0,0,0,8.35,25.039,84.006,84.006,0,0,0,13.72,20.279,80.788,80.788,0,0,0,18.893,15.065,88.009,88.009,0,0,0,23.842,9.343,124.024,124.024,0,0,0,28.567,3.114,119.4,119.4,0,0,0,24.273-2.383,95.621,95.621,0,0,0,21.482-7.149,84.376,84.376,0,0,0,18-11.42,75.594,75.594,0,0,0,13.817-15.2,68.659,68.659,0,0,0,8.952-18.46,78.692,78.692,0,0,0,3.4-21.208v-6.429H296.018a49.764,49.764,0,0,1-1.61,10.4,41.863,41.863,0,0,1-3.7,9.219,35.078,35.078,0,0,1-13.191,13.6,34.594,34.594,0,0,1-9.265,3.729,45.572,45.572,0,0,1-10.886,1.243,44.129,44.129,0,0,1-12.406-1.675,35.07,35.07,0,0,1-10.439-5.024,36.7,36.7,0,0,1-8.335-8.257,48.669,48.669,0,0,1-6.093-11.374,70.883,70.883,0,0,1-3.729-14.366,111.669,111.669,0,0,1-1.243-17.234V290.357a112.21,112.21,0,0,1,1.257-17.377,71.073,71.073,0,0,1,3.772-14.47,50.084,50.084,0,0,1,6.136-11.473,37.771,37.771,0,0,1,8.349-8.386,34.84,34.84,0,0,1,10.411-5.131,42.763,42.763,0,0,1,12.32-1.711,43.826,43.826,0,0,1,10.808,1.28,34.3,34.3,0,0,1,9.258,3.839A35.852,35.852,0,0,1,284.99,243a36.989,36.989,0,0,1,5.695,7.964,43.93,43.93,0,0,1,3.716,9.516,52.506,52.506,0,0,1,1.617,10.726h50.855v-6.216a83.686,83.686,0,0,0-2.054-16.623,71.593,71.593,0,0,0-5.254-15,74.247,74.247,0,0,0-18.841-24.427,79.989,79.989,0,0,0-13.055-9.046,91.064,91.064,0,0,0-15.192-6.662,102.331,102.331,0,0,0-17.012-4.1A122.088,122.088,0,0,0,256.95,187.756Zm46.267-46.892a34.923,34.923,0,0,0,1.925,11.519,28.759,28.759,0,0,0,5.864,9.882,27.579,27.579,0,0,0,10.054,6.885,37.775,37.775,0,0,0,14.426,2.528,42.919,42.919,0,0,0,13.733-2.046,28.671,28.671,0,0,0,10.439-6.138,25.623,25.623,0,0,0,6.595-10.141,41.254,41.254,0,0,0,2.2-14.052V78.689H346.424v60.73c0,4.091-.893,7.3-2.655,9.536a8.13,8.13,0,0,1-3.453,2.529,13.731,13.731,0,0,1-5.047.843,11.228,11.228,0,0,1-5.743-1.431,9.883,9.883,0,0,1-3.8-3.991,13.411,13.411,0,0,1-1.421-6.04H303.217Zm-126.6-63.811A52.833,52.833,0,0,0,164.7,78.331a38.177,38.177,0,0,0-10.044,3.831,34.3,34.3,0,0,0-8.032,6.194,35.136,35.136,0,0,0-5.883,8.361,42.338,42.338,0,0,0-3.606,10.329,57.923,57.923,0,0,0-1.2,12.095v10.626a56.94,56.94,0,0,0,1.2,11.977,42.334,42.334,0,0,0,3.606,10.282,35.115,35.115,0,0,0,5.883,8.354,34.328,34.328,0,0,0,8.032,6.19A38.165,38.165,0,0,0,164.7,170.4a56.406,56.406,0,0,0,23.871,0,37.989,37.989,0,0,0,10.039-3.832,34.213,34.213,0,0,0,8.01-6.19,35.029,35.029,0,0,0,5.861-8.354,42.441,42.441,0,0,0,3.59-10.282,57.179,57.179,0,0,0,1.2-11.977V119.14a57.821,57.821,0,0,0-1.2-12.057,42.294,42.294,0,0,0-3.59-10.3,35.229,35.229,0,0,0-5.861-8.356,34.569,34.569,0,0,0-8.01-6.22,37.787,37.787,0,0,0-10.039-3.864A52.575,52.575,0,0,0,176.619,77.054Zm51.469,1.635h0V170h41.066a41.267,41.267,0,0,0,16.114-3.034,26.617,26.617,0,0,0,11.406-8.818,21.163,21.163,0,0,0,3.162-6.405,26.624,26.624,0,0,0,1.054-7.645,21.862,21.862,0,0,0-3.037-11.919,20.663,20.663,0,0,0-7.757-7.269,24.942,24.942,0,0,0-9.853-2.9v-.99a22.382,22.382,0,0,0,8.111-3.358,18.3,18.3,0,0,0,5.926-6.615,20.705,20.705,0,0,0,2.237-9.925,22.166,22.166,0,0,0-1.923-9.42,19.106,19.106,0,0,0-5.768-7.089A26.844,26.844,0,0,0,279.9,80.17a40.81,40.81,0,0,0-11.385-1.481H228.088Zm33.674,75.741H249.854V129.987h14.115a19.24,19.24,0,0,1,8.093,1.516,10.778,10.778,0,0,1,4.9,4.3,12.689,12.689,0,0,1,1.634,6.522,12.247,12.247,0,0,1-.987,5.013,10.506,10.506,0,0,1-2.96,3.84,13.16,13.16,0,0,1-5.195,2.441A31.889,31.889,0,0,1,261.762,154.43Zm-85.143-.625a17.153,17.153,0,0,1-9.542-2.673,17.618,17.618,0,0,1-6.413-8.019,33.586,33.586,0,0,1-2.314-13.261V118.879a33.408,33.408,0,0,1,2.314-13.25,17.769,17.769,0,0,1,6.413-8.007,18.2,18.2,0,0,1,19.063,0,17.826,17.826,0,0,1,6.392,8.007,33.429,33.429,0,0,1,2.312,13.25v10.974a33.606,33.606,0,0,1-2.312,13.261,17.673,17.673,0,0,1-6.392,8.019A17.049,17.049,0,0,1,176.619,153.805Zm83.9-37.974H249.854V94.259h13.082c3.847,0,6.863.968,8.966,2.878a9.991,9.991,0,0,1,3.169,7.747,10.742,10.742,0,0,1-1.528,5.751,9.966,9.966,0,0,1-4.731,3.83A21.446,21.446,0,0,1,260.518,115.832Z' fill='#fff'/>
                  </g>
                </svg>
                <h2>Objective-C</h2>
              </LanguageBox>
              <LanguageBox>
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'
                                  viewBox='0 0 299.215 299.215'>
                                  <g id='XMLID_106_'>
                                      <path id='XMLID_107_' d='M22.347,0c-2.75,0-4.799,2.241-4.555,4.98l23.184,260.047c0.244,2.739,2.611,5.582,5.262,6.318
                                  l98.381,27.316c2.65,0.736,6.986,0.736,9.637,0.002l98.68-27.361c2.65-0.735,5.02-3.578,5.264-6.316L281.422,4.98
                                  c0.246-2.739-1.805-4.98-4.555-4.98H22.347z M232.049,59.641c-0.219,2.443-0.598,6.684-0.842,9.423l-0.611,6.823
                                  c-0.246,2.738-0.596,6.654-0.781,8.701c-0.184,2.048-0.359,3.723-0.391,3.723c-0.031,0-2.307,0-5.057,0h-69.76
                                  c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0h-36.74c-2.75,0-4.799,2.241-4.555,4.98l2.143,23.955c0.244,2.738,2.695,4.98,5.445,4.98
                                  H144.5c2.75,0,5.025,0,5.055,0s2.303,0,5.053,0h57.939c2.75,0,7.006,0,9.457,0c2.449,0,4.273,1.999,4.051,4.442
                                  c-0.223,2.443-0.604,6.685-0.848,9.423l-6.891,77.228c-0.246,2.739-0.557,6.238-0.691,7.776c-0.137,1.537-2.416,3.396-5.066,4.131
                                  l-58.133,16.119c-2.65,0.734-4.852,1.342-4.893,1.351c-0.041,0.009-2.242-0.586-4.893-1.321l-58.195-16.148
                                  c-2.65-0.735-5.018-3.578-5.262-6.317l-3.746-42.045c-0.244-2.739,1.807-4.98,4.557-4.98h5.311c2.75,0,7.25,0,10,0h7.92
                                  c2.75,0,5.199,2.241,5.445,4.98l1.469,16.459c0.244,2.739,2.615,5.566,5.271,6.283l27.221,7.351
                                  c2.654,0.717,4.836,1.304,4.848,1.304s2.193-0.588,4.848-1.305l27.27-7.369c2.654-0.717,5.027-3.545,5.273-6.283l2.957-32.976
                                  c0.246-2.739-1.803-4.98-4.553-4.98h-30.666c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0H80.511c-2.75,0-5.199-2.242-5.443-4.98
                                  l-7.256-81.306c-0.244-2.739-0.623-6.979-0.842-9.423c-0.217-2.443,1.854-4.442,4.604-4.442H144.5c2.75,0,5.025,0,5.055,0
                                  s2.303,0,5.053,0h72.838C230.195,55.198,232.267,57.197,232.049,59.641z' />
                                  </g>
                              </svg>

                <h2>HTML</h2>
              </LanguageBox>
              <LanguageBox>
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 470.699 470.699'>
                                  <path d='M426.981,0H43.701C34.52,0,27.632,7.769,28.442,16.949L63.45,409.254c0.811,9.173,8.745,18.774,17.644,21.253
                                l138.006,38.335c8.887,2.463,23.413,2.479,32.313,0.032l138.177-38.281c8.901-2.472,16.835-11.986,17.645-21.175l35.023-392.469
                                C443.068,7.769,436.209,0,426.981,0z M360.51,141.611c-0.006,0.06-0.053,0.107-0.112,0.117c-0.06,0.01-0.118-0.021-0.144-0.077
                                L252.13,185.96c-1.54,0.631-2.418,2.264-2.098,3.897c0.322,1.633,1.754,2.811,3.419,2.811h84.103c4.474,0,8.736,1.9,11.728,5.227
                                c2.991,3.327,4.429,7.768,3.954,12.216l-13.141,123.273c-0.645,6.048-4.709,11.186-10.447,13.205l-89.269,31.41
                                c-3.362,1.184-7.027,1.193-10.397,0.025l-88.852-30.778c-5.773-2-9.871-7.153-10.52-13.228l-5.957-55.828
                                c-0.313-2.931,0.634-5.857,2.604-8.048c1.971-2.192,4.779-3.444,7.727-3.444h24.725c5.313,0,9.769,4.007,10.331,9.289l3.655,34.316
                                l61.521,21.385l61.803-21.58l7.559-71.17H129.835c-5.297,0-9.746-3.985-10.327-9.25l-3.327-30.164
                                c-0.508-4.601,2.088-8.982,6.366-10.745l111.837-46.109c1.269-0.523,1.99-1.868,1.724-3.214c-0.267-1.345-1.446-2.314-2.817-2.314
                                H115.542c-3.545,0-6.518-2.677-6.888-6.201l-3.406-32.421c-0.205-1.951,0.428-3.898,1.741-5.357
                                c1.313-1.458,3.184-2.291,5.146-2.291h246.379c1.973,0,3.852,0.842,5.166,2.313c1.314,1.472,1.938,3.434,1.715,5.394L360.51,141.611
                                z' />
                              </svg>
                <h2>CSS</h2>
              </LanguageBox>
              <LanguageBox>
                <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>React</title><path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z'/></svg>
                <h2>React</h2>
              </LanguageBox>
              <LanguageBox>
                <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>JavaScript</title><path d='M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z'/></svg>
                <h2>JavaScript</h2>
              </LanguageBox>
              <LanguageBox>
                <svg xmlns='http://www.w3.org/2000/svg' id='svg1'
                    width='100%' height='100%' viewBox='0 0 500 500'>
                    <g>
                        <g id='java-seeklogo.com' transform='translate(65.102 -0.371)'>
                            <path id='Path_1' data-name='Path 1'
                                d='M89.987,267.473s-19.107,11.111,13.6,14.871c39.621,4.52,59.871,3.872,103.534-4.392a180.134,180.134,0,0,0,27.511,13.432c-97.881,41.95-221.523-2.43-144.643-23.911'
                                transform='translate(29.294 119.576)' />
                            <path id='Path_2' data-name='Path 2'
                                d='M82.614,229.659s-21.43,15.863,11.3,19.249c42.325,4.366,75.749,4.724,133.587-6.414a59.289,59.289,0,0,0,20.579,12.545c-118.343,34.605-250.157,2.729-165.464-25.38'
                                transform='translate(24.706 102.648)' />
                            <path id='Path_3' data-name='Path 3'
                                d='M150.783,207.866c24.118,27.767-6.337,52.754-6.337,52.754s61.239-31.613,33.115-71.2C151.293,152.5,131.15,134.158,240.2,70.914c0,0-171.17,42.75-89.416,136.952'
                                transform='translate(57.368 31.581)' />
                            <path id='Path_4' data-name='Path 4'
                                d='M337.606,296.749s14.14,11.651-15.572,20.664c-56.5,17.115-235.151,22.284-284.78.682-17.84-7.761,15.615-18.532,26.139-20.792,10.975-2.38,17.247-1.937,17.247-1.937C60.8,281.39-47.6,322.81,25.579,334.673c199.567,32.364,363.792-14.574,312.027-37.923'
                                transform='translate(0 130.79)' />
                            <path id='Path_5' data-name='Path 5'
                                d='M116.051,190.5s-90.874,21.584-32.181,29.422c24.782,3.318,74.185,2.567,120.2-1.288,37.608-3.172,75.371-9.917,75.371-9.917s-13.261,5.679-22.855,12.23c-92.281,24.27-270.551,12.979-219.229-11.846,43.4-20.98,78.693-18.6,78.693-18.6'
                                transform='translate(12.417 85.083)' />
                            <path id='Path_6' data-name='Path 6'
                                d='M202.089,283.094c93.808-48.746,50.435-95.591,20.161-89.28a70.206,70.206,0,0,0-10.729,2.883,17.093,17.093,0,0,1,8.016-6.183c59.891-21.056,105.952,62.1-19.334,95.037a8.161,8.161,0,0,0,1.885-2.457'
                                transform='translate(89.396 83.614)' />
                            <path id='Path_7' data-name='Path 7'
                                d='M198.181.371s51.952,51.97-49.275,131.885c-81.174,64.105-18.51,100.657-.034,142.418-47.382-42.75-82.155-80.384-58.827-115.41C124.286,107.85,219.142,82.922,198.181.371'
                                transform='translate(36.748 0)' />
                            <path id='Path_8' data-name='Path 8'
                                d='M117.128,358.83c90.044,5.764,228.317-3.2,231.591-45.8,0,0-6.295,16.152-74.416,28.979-76.854,14.463-171.643,12.775-227.864,3.505,0,0,11.509,9.525,70.689,13.32'
                                transform='translate(20.559 139.97)' />
                        </g>
                    </g>
                </svg>
                <h2>Java</h2>
                </LanguageBox>
            </div>
          </Wrapper>
        </div>
        <div className='scrolled-into-view' ref={thirdWrapperRef}>
          <Wrapper className='dynamic-wrapper'>
            <h1 className='wrapper-title'>My Work</h1>
            <div className='wrapper-inside'>
              <div className='project-wrapper'>
                <ProjectBox>
                  <div className='project-box-price'>$1.49</div>
                  <img className='project-box-image' alt='' src={OneSettings} />
                  <div className='project-box-content'>
                    <div className='project-box-title'>OneSettings</div>
                    <div className='project-box-tags-box'>
                      <div className='project-box-tag'>Logos</div>
                      <div className='project-box-tag'>Objective-C</div>
                    </div>
                    <div className='project-box-description'>
                      Jailbreak tweak to customize the Settings app. Written in the Objective-C language and the Logos preprocessor. Built using Theos.
                    </div>
                    <div className='project-box-class-buttons-box'>
                      <a href='https://chariz.com/buy/onesettings' target='_blank' rel='noopener noreferrer' aria-label='View Work on Chariz Repo'>
                        <button className='project-box-class-button'>View Work</button>
                      </a>
                    </div>
                  </div>
                </ProjectBox>
                <ProjectBox>
                  <div className='project-box-price'>Free</div>
                  <img className='project-box-image' alt='' src={Ourea} />
                  <div className='project-box-content'>
                    <div className='project-box-title'>Ourea</div>
                    <div className='project-box-tags-box'>
                      <div className='project-box-tag'>HTML</div>
                      <div className='project-box-tag'>CSS</div>
                      <div className='project-box-tag'>Objective-C</div>
                    </div>
                    <div className='project-box-description'>
                      A combination of a website and an iOS app to browse shortcuts and install them. The app is made with Objective-C, and the current website is made using HTML and CSS. Currently in progress.
                    </div>
                    <div className='project-box-class-buttons-box'>
                      <a href='https://github.com/NightwindDev/Ourea' target='_blank' rel='noopener noreferrer' aria-label='View GitHub for Ourea'>
                        <button className='project-box-class-button'>View Work</button>
                      </a>
                      <a href='https://ourea.ml' target='_blank' rel='noopener noreferrer' aria-label='Open Ourea Website'>
                        <button className='project-box-class-button'>Live Page</button>
                      </a>
                    </div>
                  </div>
                </ProjectBox>
                <ProjectBox>
                  <div className='project-box-price'>Free</div>
                  <img className='project-box-image' alt='' src={SmallTweaks} />
                  <div className='project-box-content'>
                    <div className='project-box-title'>Small Tweaks</div>
                    <div className='project-box-tags-box'>
                      <div className='project-box-tag'>Objective-C</div>
                      <div className='project-box-tag'>Logos</div>
                    </div>
                    <div className='project-box-description'>
                      A compilation of small jailbreak tweaks made in Objective-C and Logos. Built using Theos.
                    </div>
                    <div className='project-box-class-buttons-box'>
                      <a href='https://github.com/NightwindDev/Small-Tweaks' target='_blank' rel='noopener noreferrer' aria-label='Open GitHub Page for Small Tweaks'>
                        <button className='project-box-class-button'>View Work</button>
                      </a>
                      <a href='https://nightwinddev.github.io' target='_blank' rel='noopener noreferrer' aria-label='Open Repo Where Tweaks Are Hosted'>
                        <button className='project-box-class-button'>Live Page</button>
                      </a>
                    </div>
                  </div>
                </ProjectBox>
                <ProjectBox>
                  <img className='project-box-image' alt='' src={Hexact} />
                  <div className='project-box-content'>
                    <div className='project-box-title'>Hexact (Clone)</div>
                    <div className='project-box-tags-box'>
                      <div className='project-box-tag'>ReactJS</div>
                      <div className='project-box-tag'>CSS</div>
                    </div>
                    <div className='project-box-description'>
                      A <strong><u>clone</u></strong> of the official <a href="https://hexact.io">website</a>. Done as a challenge to polish ReactJS skills.
                    </div>
                    <div className='project-box-class-buttons-box'>
                      <a href='https://github.com/NightwindDev/hexact-clone' target='_blank' rel='noopener noreferrer' aria-label='Open GitHub Page for Small Tweaks'>
                        <button className='project-box-class-button'>View Work</button>
                      </a>
                      <a href='https://hexact-clone.pages.dev' target='_blank' rel='noopener noreferrer' aria-label='Open Repo Where Tweaks Are Hosted'>
                        <button className='project-box-class-button'>Live Page</button>
                      </a>
                    </div>
                  </div>
                </ProjectBox>
              </div>
            </div>
          </Wrapper>
        </div>
        <div className='scrolled-into-view' ref={fourthWrapperRef}>
          <Wrapper className='dynamic-wrapper'>
            <h1 className='wrapper-title'>Contact Me</h1>
            <form method='GET' action='mailto:nightwinddev@gmail.com'>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder='example@example.com' required/>
              </label>
              <label>
                <span>Topic</span>
                <input type="text" placeholder='Design' name="subject" required/>
              </label>
              <label>
                <span>Message</span>
                <textarea name='body' placeholder='Hey, I want to inform you about...' required></textarea>
              </label>
              <button type='submit'>Send</button>
            </form>
          </Wrapper>
        </div>
        <Footer />
      </div>
      <NavBar data-selected={selected}
              ref={navBarRef}
              firstRef={firstWrapperRef}
              secondRef={secondWrapperRef}
              thirdRef={thirdWrapperRef} />
    </React.Fragment>
  )
}

export default App;
