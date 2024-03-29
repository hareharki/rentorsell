import React from 'react'
import MyComponent from '../components/MapContainer/MyComponent'
import { Container, Row, Col } from "react-bootstrap";
import {useTranslation} from 'react-i18next';
import emailjs from 'emailjs-com';

const Lac = () => {

  const {t}= useTranslation();

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_u5ljzf8' , 
    'template_bw0wz5u',
    e.target, 
    'K6sd_FegYTMVNRf-o'
    ).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err)
    }).then(()=> alert("E-mail sent succesfully"));
  }
  
  return (
    <>
    <h2>{t('location_and_contact')}</h2>
      <MyComponent/>   
      <Container> 
      <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{t('contact_us')}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">{t('get_your_new_real_estate')}</h3>
            <address>
              <strong>E-mail:</strong>{" "}
              <p>info@realestates.ba</p>
              <br />
              <br />
                <p>
                  <strong>Phone:</strong> 
                  +387111111111
                </p>
            </address>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100" onSubmit={sendEmail} >
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea 
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit"> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Lac