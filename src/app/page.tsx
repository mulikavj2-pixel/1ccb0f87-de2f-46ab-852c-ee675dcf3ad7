"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import FeatureCardTwenty from '@/components/sections/feature/FeatureCardTwenty';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardFour from '@/components/sections/team/TeamCardFour';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Phone, Linkedin, Twitter, Github, Mail } from "lucide-react";

export default function TechCorpPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="floatingGradient"
      cardStyle="elevated-accent"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="TechCorp Solutions"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Clients", id: "clients" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="TechCorp Solutions"
          description="Empowering businesses with cutting-edge IT solutions, cloud infrastructure, and digital transformation. We deliver innovation that drives growth."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376698698-41nn9yot.jpg"
          imageAlt="Modern tech office workspace"
          frameStyle="browser"
          ariaLabel="Hero section for TechCorp Solutions"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwenty
          tag="Our Services"
          title="Comprehensive IT Solutions"
          description="From cloud infrastructure to cybersecurity, we provide end-to-end technology services tailored to your business needs."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          images={[
            {
              id: 1,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376700335-dqb2bw6o.jpg",
              imageAlt: "Cloud computing infrastructure"
            },
            {
              id: 2,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376701596-bf5d0tfx.jpg",
              imageAlt: "Cybersecurity solutions"
            },
            {
              id: 3,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376703041-l7mjcdia.jpg",
              imageAlt: "Software development"
            },
            {
              id: 4,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376704386-xmsf2ryr.jpg",
              imageAlt: "Data analytics services"
            }
          ]}
        />
      </div>

      <div id="clients" data-section="clients">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of companies that rely on our expertise to power their digital transformation"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376705708-twppzzg7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376707951-un6ax3cm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376709829-ackh1qai.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376711140-962tujy5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376712247-db9ftgli.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376713426-uvajrf9o.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376714603-s0pe3s7o.jpg"
          ]
          speed={40}
          showCard={true}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFour
          title="Meet Our Expert Team"
          description="Talented professionals dedicated to delivering exceptional IT solutions and support"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          team={[
            {
              id: "1",
              name: "John Anderson",
              role: "Chief Technology Officer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376716263-t2agk1w0.jpg"
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              role: "Cloud Architect",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376717617-raqcuhg8.jpg"
            },
            {
              id: "3",
              name: "Michael Chen",
              role: "Senior Developer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376719308-1f319ygl.jpg"
            },
            {
              id: "4",
              name: "Emma Rodriguez",
              role: "Security Engineer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376720446-6qkd59nd.jpg"
            },
            {
              id: "5",
              name: "David Johnson",
              role: "Project Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376721879-uzzenr2v.jpg"
            },
            {
              id: "6",
              name: "Lisa Wang",
              role: "Solutions Consultant",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376723146-ktjkpkkh.jpg"
            },
            {
              id: "7",
              name: "Robert Martinez",
              role: "Infrastructure Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376724462-ccrwd4y7.jpg"
            },
            {
              id: "8",
              name: "Jessica Brown",
              role: "UX Designer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376725762-rio8p1n9.jpg"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our IT services and support"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What IT services do you provide?",
              content: "We provide comprehensive IT services including cloud infrastructure, cybersecurity, software development, data analytics, managed IT support, and digital transformation consulting tailored to your business needs."
            },
            {
              id: "2",
              title: "How long does a typical IT project take?",
              content: "Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, medium projects 2-4 months, and enterprise solutions 4-12 months. We'll provide detailed estimates during the consultation phase."
            },
            {
              id: "3",
              title: "What support do you offer after implementation?",
              content: "We provide 24/7 managed IT support, regular maintenance, security updates, performance monitoring, and dedicated account management to ensure your systems run smoothly."
            },
            {
              id: "4",
              title: "How do you approach cybersecurity?",
              content: "We follow industry best practices with multi-layered security strategies including threat detection, penetration testing, employee training, compliance management, and incident response planning."
            },
            {
              id: "5",
              title: "Can you integrate with our existing systems?",
              content: "Yes, we specialize in seamless integration with existing infrastructure. Our architects analyze your current setup and design solutions that work alongside your present systems without disruption."
            },
            {
              id: "6",
              title: "What does your cloud migration process look like?",
              content: "We conduct a comprehensive assessment, develop a migration strategy, execute in phases to minimize downtime, perform thorough testing, and provide training and support throughout the transition."
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          cardTitle="Over 500 companies trust us to deliver exceptional IT solutions and support"
          cardTag="Client Success Stories"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "James Wilson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376727533-q7uwatd5.jpg"
            },
            {
              id: "2",
              name: "Patricia Davis",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376728970-0zz5z067.jpg"
            },
            {
              id: "3",
              name: "Christopher Lee",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376730311-j0r2ru0p.jpg"
            },
            {
              id: "4",
              name: "Amanda Garcia",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765376731706-nb5cfpr7.jpg"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Transform Your IT?"
          ctaDescription="Let's discuss your technology needs and how we can help drive your business forward."
          ctaIcon={Phone}
          ctaButton={{
            text: "Schedule a Consultation",
            href: "#contact"
          }}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
          faqs={[
            {
              id: "c1",
              title: "How do I get started?",
              content: "Contact us for a free initial consultation. We'll understand your business goals, assess your current IT infrastructure, and propose tailored solutions."
            },
            {
              id: "c2",
              title: "What's the typical engagement process?",
              content: "After consultation, we develop a detailed proposal, establish a project timeline, assign your dedicated team, and maintain regular communication throughout implementation."
            },
            {
              id: "c3",
              title: "Do you provide training?",
              content: "Yes, we provide comprehensive training for your team on new systems and solutions, including documentation, workshops, and ongoing support resources."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoText="TechCorp Solutions"
          description="Delivering innovative IT solutions and digital transformation services to drive business growth and success."
          copyrightText="© 2025 TechCorp Solutions. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "Cloud Infrastructure", href: "services" },
                { label: "Cybersecurity", href: "services" },
                { label: "Software Development", href: "services" },
                { label: "Data Analytics", href: "services" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Careers", href: "careers" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Documentation", href: "docs" },
                { label: "FAQ", href: "faq" },
                { label: "Support Portal", href: "https://support.example.com" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" },
                { label: "Cookie Policy", href: "cookies" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            },
            {
              icon: Github,
              href: "https://github.com",
              ariaLabel: "GitHub"
            },
            {
              icon: Mail,
              href: "mailto:contact@example.com",
              ariaLabel: "Email"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}