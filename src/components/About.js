import React from 'react';
import owners from '../images/about.jpg';


const About = () => (
    <div className='about'>
     <div className='container'>
      <h1> Our Story</h1>
      <div className='row'>
        <div className='col-sm-6'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor pulvinar lectus, nec sodales ligula blandit eget. Nunc mattis, lacus vel pulvinar venenatis, turpis purus vehicula nunc, in pretium tellus ante quis eros. Fusce eu libero ligula. Vestibulum consectetur mattis elit, ornare aliquam nibh blandit vitae. Pellentesque vehicula placerat diam, id maximus felis mollis et. Phasellus commodo pulvinar dui vel ultricies. Duis luctus nulla in interdum auctor. Aliquam sit amet velit vitae mi viverra luctus. Morbi accumsan, mi non molestie efficitur, lacus tellus tempus lectus, sit amet consectetur arcu erat a tellus. Nam venenatis pellentesque dictum. 

            Suspendisse vitae aliquam neque. Pellentesque lobortis congue ipsum, eu consectetur sem posuere ac. Maecenas suscipit ipsum sed fringilla placerat. Mauris vel condimentum dolor. Nam id euismod ex. Phasellus ac nunc ut quam cursus rhoncus sit amet ut enim. Donec nec sem auctor, rutrum orci non, eleifend sapien. Donec eu tortor quis enim fringilla bibendum. Mauris ut dictum mauris. Phasellus ullamcorper, mauris sed fringilla elementum, mi mi congue odio, quis auctor neque lacus sed enim. Fusce quis vulputate velit. Maecenas in diam est. Nulla vitae faucibus ante. Nulla eget lectus augue. Fusce finibus justo eu nulla auctor, dictum euismod nulla pretium. Mauris tortor lectus, aliquet sit amet cursus id, porttitor vel lorem.
            </p>
        </div>
        <div className='col-sm'>
            <img src={owners} style ={{height: '400px', width: '400px', borderRadius: '50%'}} alt='owners'></img>
        </div>
      </div>
     </div>
    </div>
)

export default About;