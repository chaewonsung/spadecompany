import React from 'react';

const linkStyle = {
  display: 'inline-block',
  padding: '0.7em 1em',
  background: 'white',
  borderRadius: '10px',
};

const IntroPage = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div>
        <div
          style={{ fontSize: '3rem', marginBottom: '30px', lineHeight: 1.5 }}
        >
          안녕하세요😀<br />
          퍼블리셔 지원자 황채원입니다
        </div>
        <a
          href="https://github.com/chaewonsung/spadecompany"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...linkStyle,
            marginRight: '10px',
          }}
        >
          Github
        </a>
        <a
          href="https://chaewonsung.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default IntroPage;
