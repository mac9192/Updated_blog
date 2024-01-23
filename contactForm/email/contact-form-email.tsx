import React from "react";
import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderName: string;
  senderLast: string,
  senderEmail: string;
  senderPhoneNumber:string;
  senderMessage: string;
};

export default function ContactFormEmail({
  senderMessage,
  senderEmail,
  senderLast,
  senderPhoneNumber,
  senderName

}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{senderMessage}</Text>
              <Hr />
              <Text>The sender's name is: {senderName}</Text>
              <Text>The sender's Last name is: {senderLast}</Text>
              <Text>The sender's email is: {senderEmail}</Text>
              <Text>The sender's phone number is: {senderPhoneNumber}</Text>
              <Text>The sender's message is: {senderMessage}</Text>
              
              <Hr />
           
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}