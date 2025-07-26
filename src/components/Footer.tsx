import React from 'react';


const Footer = () => {
  return (
    <footer className="text-white py-16">
      <hr
        className="border-t mx-auto w-[71%] flex justify-center mb-7"
        style={{ color: '#684574' }}
      />
      <div className='mx-auto flex justify-center semi-bold text-xl'>
        Let's get in touch
      </div>
      <div className='=mx-auto flex justify-center'>
        <div className='w-[75%] mx-auto flex justify-center' style={{ color: '#BABABA' }}>
          Feel free to send me a message using the form or email me at {' '}
          <span style={{ color: '#346444', fontWeight: '500' }}>shoryavardhan7@gmail.com</span>{' '}
        </div>
      </div>
    </footer>
  );
};

export default Footer;