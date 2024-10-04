import React from 'react';
import Logo from '../images/Testimonial/logo.png';
import ProfileImage from '../images/Testimonial/profile.png';

const Testimonial = () => {
  return (
    <div
      style={{
        background: '#F9FAFB',
        padding: '48px 16px', 
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          padding: '0 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
       
        <div
          style={{
            width: '100%',
            maxWidth: '1216px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px', 
            opacity: 1,
            textAlign: 'center', 
          }}
        >
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center', 
              gap: '10px',
            }}
          >
            <img
              src={Logo}
              alt="Sisyphus Logo"
              style={{ width: '24px', height: '40px' }} 
            />
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '40px',
                color: '#000',
                margin: 0, 
              }}
            >
              Sisyphus
            </h1>
          </div>

         
          <div
            style={{
              width: '100%',
              maxWidth: '800px',
              opacity: 1,
            }}
          >
            <p
              style={{
                fontSize: '35px', 
                fontWeight: 500,
                lineHeight: '50px',
                letterSpacing: '-0.02em',
                color: '#000',
                margin: '0', 
                padding: '0 16px', 
              }}
            >
              “We’ve been using Untitled to kick start every new project and can’t imagine working
              without it.”
            </p>
          </div>

         
          <div
            style={{
              width: '100%',
              maxWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
           
            <img
              src={ProfileImage}
              alt="Candice Wu"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
              }}
            />

           
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: '28px',
                margin: 0, 
              }}
            >
              Candice Wu
            </h3>

           
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                color: '#475467',
                margin: 0, 
              }}
            >
              Product Manager, Sisyphus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
