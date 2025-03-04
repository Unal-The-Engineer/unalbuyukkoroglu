import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Home2() {
  const { language } = useLanguage();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {language === "en" ? (
                <>LET ME <span className="purple"> INTRODUCE </span> MYSELF</>
              ) : (
                <>KENDİMİ <span className="purple"> TANITAYIM </span></>
              )}
            </h1>
            <p className="home-about-body">
              {language === "en" ? (
                <>
                  I have experience with Python and TensorFlow, mainly working on object detection applications and AI-driven analytics.
                  <br />
                  <br />
                  My field of interest is building <b className="purple">AI-based solutions</b>, including football analytics and real-time data processing.
                  <br />
                  <br />
                  Lately, I have been exploring <b className="purple">AI agents</b> and their potential applications.
                </>
              ) : (
                <>
                  Python ve TensorFlow ile deneyimim var, özellikle nesne algılama uygulamaları ve yapay zeka destekli analizler üzerinde çalışıyorum.
                  <br />
                  <br />
                  İlgi alanım, futbol analitiği ve gerçek zamanlı veri işleme dahil olmak üzere <b className="purple">yapay zeka tabanlı çözümler</b> geliştirmektir.
                  <br />
                  <br />
                  Son zamanlarda <b className="purple">yapay zeka ajanlarını</b> ve potansiyel uygulamalarını keşfediyorum.
                </>
              )}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{language === "en" ? "FIND ME ON" : "BANA ULAŞIN"}</h1>
            <p>
              {language === "en" ? (
                <>Feel free to <span className="purple">connect </span>with me</>
              ) : (
                <>Benimle <span className="purple">iletişime geçmekten </span>çekinmeyin</>
              )}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Unal-The-Engineer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/%C3%BCnal-b%C3%BCy%C3%BCkk%C3%B6ro%C4%9Flu-89361a1ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
