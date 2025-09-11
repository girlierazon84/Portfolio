// src/pages/ContactPage.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { createMessage } from "../assets/api/service/MessageService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DSBackground from "../assets/images/DS_bg.jpg";
import Pic03 from "../assets/images/Pic03.png";

const ContactSection = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 4rem 1.5rem;
    background: url(${DSBackground}) center/cover no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(4px);
        z-index: 0;
    }
`;

const Container = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 1100px;
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: stretch;
        gap: 3rem;
    }
`;

const ImageWrapper = styled(motion.div)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 70%;
        max-width: 350px;
        height: auto;
        object-fit: contain;
        border-radius: 1rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
        animation: float 4s ease-in-out infinite;

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
        }

        @media (max-width: 767px) {
            display: none;
        }
    }
`;

const FormWrapper = styled(motion.div)`
    flex: 1;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(14px);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;

    h2 {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
        background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    input,
    textarea {
        width: 100%;
        padding: 1rem 1.2rem;
        border-radius: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        outline: none;
        font-size: 1rem;
        background: rgba(255, 255, 255, 0.12);
        color: #fff;
        transition: all 0.3s ease;

        &::placeholder {
            color: rgba(255, 255, 255, 0.75);
        }

        &:focus {
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 0 3px #60a5fa;
        }
    }

    textarea {
        resize: none;
        min-height: 140px;
    }

    button {
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        border: none;
        font-size: 1.05rem;
        font-weight: 600;
        cursor: pointer;
        background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6);
        color: #fff;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 18px rgba(0, 0, 0, 0.4);
        }
    }
`;

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const tempData = formData;
        setFormData({ name: "", email: "", message: "" });

        try {
            await createMessage(tempData);
            toast.success("✅ Message sent successfully!");
        } catch (err) {
            console.error(err);
            toast.error("❌ Failed to send message. Please try again.");
        }
    };

    return (
        <ContactSection>
            <Container>
                <ImageWrapper
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    variants={fadeIn}
                >
                    <img src={Pic03} alt="Contact Illustration" />
                </ImageWrapper>

                <FormWrapper
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    variants={fadeIn}
                >
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </FormWrapper>
            </Container>
            <ToastContainer position="bottom-center" autoClose={4000} hideProgressBar />
        </ContactSection>
    );
};

export default ContactPage;
