import React from 'react';
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-500 p-6">
        <section className="my-10 bg-white rounded-lg shadow-lg p-6 mt-24">
          <h2 className="text-4xl font-semibold text-gray-800">Who We Are</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We are a passionate team committed to providing exceptional educational resources and support to our students. 
            Our goal is to foster a love for learning and to make a positive impact in the community.
          </p>
        </section>

        <section className="my-10 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-4xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our mission is to empower students with the knowledge and skills needed to thrive in their academic and personal lives. 
            We believe in creating an inclusive environment where every student can flourish.
          </p>
        </section>

        <section className="my-10 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-4xl font-semibold text-gray-800">Our Values</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all our actions.</li>
            <li><strong>Collaboration:</strong> Teamwork is essential to our success.</li>
            <li><strong>Excellence:</strong> We strive to provide the highest quality of education.</li>
            <li><strong>Innovation:</strong> We embrace change and seek creative solutions.</li>
          </ul>
        </section>

        <section className="my-10">
          <h2 className="text-4xl font-semibold text-gray-800 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John Doe" className="rounded-full mx-auto w-24 h-24 mb-4" />
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="mt-2 text-gray-700">With over 15 years of experience in education, John is passionate about transforming lives through learning.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Jane Smith" className="rounded-full mx-auto w-24 h-24 mb-4" />
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Head of Curriculum</p>
              <p className="mt-2 text-gray-700">Jane is dedicated to developing innovative curricula that engage and inspire students.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Michael Johnson" className="rounded-full mx-auto w-24 h-24 mb-4" />
              <h3 className="text-lg font-semibold">Michael Johnson</h3>
              <p className="text-gray-600">Community Outreach Coordinator</p>
              <p className="mt-2 text-gray-700">Michael collaborates with the community to create partnerships and support programs for students.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
