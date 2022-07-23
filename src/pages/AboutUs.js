import React from "react";
import { Layout, Typography, Image, Card, Col, Row } from "antd";
import NavBar from "../components/NavBar";
import NavLogo from "../components/NavLogo";
import bg from "../bg.jpg";
//colors
import * as conColors from "../colors";
import "../App.less";

// images import
import oimg from '../pictures/o.jpeg'
import fimg from '../pictures/f.PNG'
import qimg from '../pictures/q.PNG'
import simg from '../pictures/s.PNG'
import aimg from '../pictures/a.PNG'
import msimg from '../pictures/ms.PNG'
import moimg from '../pictures/mo.PNG'

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const txtColor = conColors.txtColor;
const footerBgColor = conColors.footerBgColor;
const footerTxtColor = conColors.footerTxtColor;

const cardStyle = {
  textAlign: 'center',
  fontSize: "20px",
  color: txtColor,
  backgroundColor: footerBgColor,
};
function AboutUs() {
  return (

    <>
      <Layout className="aboutus">
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <NavLogo></NavLogo>
          <NavBar selectedOp="3" />
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
            marginTop: "64px",
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover'
          }}
        >
          <div
            className="site-layout-background"
            style={{ padding: "2px", margin: "16px 0" }}
          >
            <div style={{ textAlign: "center" }}>
              <Title style={{ color: txtColor }}>About Us</Title>
            </div>
            <div
            >
              <div className="site-card-border-less-wrapper">
                <Card
                  title="Crime Rate detector"
                  bordered={true}
                  headStyle={{ fontSize: "21px", color: txtColor }}
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: footerBgColor,
                  }}
                >
                  <Paragraph
                    // fontSize={20}
                    style={{
                      textAlign: "center",
                      color: txtColor,
                      fontSize: "20px"
                    }}
                  >
                    Our Model is 71.9% accurate
                    As the name suggests, this Computer Science project involves building a prediction model that can
                    analyze and predict the crime rate of a particular
                    location. Naturally, the system needs to be fed with
                    relevant data. It uses the MLPRegressor algorithm which
                    stands for Multilayer perceptron Regressor to predict the crime
                    rate? Reported number by detecting relevant crime patterns via hidden links, link prediction,
                    and statistical analysis of crime data.
                  </Paragraph>
                </Card>
              </div>
              
              
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: footerBgColor,
            color: footerTxtColor,
          }}
        >
         
        </Footer>
      </Layout>
    </>
  );
}

export default AboutUs;
