import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';

export default function index() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
