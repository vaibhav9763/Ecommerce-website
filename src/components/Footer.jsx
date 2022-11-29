import styled from "styled-components";
import { mobile } from "../responsive";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { GrInternetExplorer } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BIGCART</Logo>
        <Desc>
          Once you place your order on any online shopping store, the next
          obvious thing to do is wait for your product to arrive. This wait can
          be quite anxiety-ridden if you do not get updates about your order or
          do not receive support post-delivery of your order. However, with the
          BIGCART Help Centre, your wait becomes exciting, and your shopping
          experience becomes joyful, thanks to all the support it provides
          related to your order.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <AiFillFacebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <BsInstagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <BsTwitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <GrInternetExplorer />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <BiSupport style={{ marginRight: "10px", fontSize: "20px" }} /> 24x7
          Customer Care Support
        </ContactItem>
        <ContactItem>
          <FaMapMarkerAlt style={{ marginRight: "10px" }} /> 22 Main Path ,
          Maharashtra, 431009
        </ContactItem>
        <ContactItem>
          <BsTelephoneFill style={{ marginRight: "10px" }} /> +91 234 5678 999
        </ContactItem>
        <ContactItem>
          <HiOutlineMail style={{ marginRight: "10px" }} /> support@bigcart.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
