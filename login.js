* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "montserrat";
    color: #fff;
  }
  
  html,
  body {
    height: 100%;
  
    width: 100%;
  }
  *::selection {
    background-color: #fff;
    color: #95c11e;
  }
  
  body::-webkit-scrollbar {
    display: block;
    width: 8px;
    background: #95c11e;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #fff;
  
    border-radius: 50px;
  }
  body {
    overflow-x: hidden;
  }
  #cursor {
    height: 20px;
    width: 20px;
    background-color: #95c11e;
    border-radius: 50%;
    position: fixed;
    z-index: 99;
    transition: all linear 0.1s;
  }
  #cursor-blur {
    height: 500px;
    width: 500px;
    background-color: rgba(150, 193, 30, 0.3);
    border-radius: 50%;
    position: fixed;
    filter: blur(80px);
    z-index: 9;
    transition: all linear 0.4s;
  }
  #nav {
    height: 130px;
    width: 100%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    padding: 0 120px;
    gap: 50px;
    position: fixed;
    justify-content: flex-start;
    z-index: 999;
  }
  #nav img {
    height: 4.5vw;
  }
  #nav h4 {
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.15vw;
  }
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    position: fixed;
  }
  
  #main {
    position: relative;
    background-color: rgba(0, 0, 0, 0.39);
  }
  
  #page1 {
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    z-index: 10;
  }
  #page1 h1 {
    font-size: 7.5vw;
    font-weight: 900;
    position: relative;
  }
  #page1 h1::before {
    content: "EAT. DRINK. PLAY.";
    position: absolute;
    color: #000;
    top: -5px;
    left: -5px;
    -webkit-text-stroke: 1.5px #95c11e;
    z-index: -1;
  }
  #page1 h2 {
    font-size: 30px;
    font-weight: 800;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  #page1 p {
    font-size: 1.2vw;
    font-weight: 500;
    width: 40%;
  }
  #page1 #arrow {
    height: 250px;
    width: 250px;
    background-color: transparent;
    border: 2px solid #95c11e;
    position: absolute;
    display: flex;
    left: -2%;
    bottom: 0%;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all ease 0.5s;
  }
  #page1 #arrow i {
    font-size: 50px;
    font-weight: 100;
  }
  #page1 #arrow:hover {
    scale: 0.4;
    background-color: #95c11e;
  }
  #page2 {
    min-height: 100vh;
    width: 100%;
    z-index: 10;
  }
  
  #scroller {
    /* background-color: red; */
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    z-index: 10;
  }
  #scroller::-webkit-scrollbar {
    display: none;
  }
  #scroller-in {
    display: inline-block;
    white-space: nowrap;
    animation-name: scroll;
    animation-duration: 40s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  
  #scroller h4 {
    display: inline-block;
    font-size: 120px;
    font-weight: 900;
    font-family: gilroy;
    margin-right: 20px;
    transition: all linear 0.3s;
    color: #000;
    -webkit-text-stroke: 2px #ffffff;
  }
  #scroller h4:hover {
    color: #95c11e;
    -webkit-text-stroke: 2px #95c11e;
  }
  
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  