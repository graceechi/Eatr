import './footer.css';

function Footer() {
    const footerText = ['React', 'Redux', 'Express', 'Node', 'Sequelize', 'PostgreSQL', 'HTML', 'CSS'];

    return (
        <footer className='footer-container'>
          {/* <div id='name'>
            Created by Grace Chi
          </div> */}
          <div className='footer-text'>
            {footerText.map((text) => {
                return <div key={text}>{text}</div>
            })}

            <a href='https://github.com/graceechi/' target='_blank' rel='noreferrer'>
                <i className="fab fa-github"></i>
            </a>
            <a href='https://www.linkedin.com/in/graceechi/' target='_blank' rel='noreferrer'>
                <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div id='line-text'>
            Connecting people through food photography.
          </div>
        </footer>
      )
};

export default Footer;
