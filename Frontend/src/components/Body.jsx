import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="bg-white my-20  min-h-screen ">
      {/* Hero Section */}
      <header className=" text-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empower Your Learning Journey
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore a variety of courses, resources, and opportunities to build your future.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-8">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="/images/expert-teachers.png"
                alt="Expert Teachers"
                className="mx-auto w-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Expert Teachers</h3>
              <p className="text-black">
                Learn from industry-leading instructors with years of experience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="/images/flexible-learning.png"
                alt="Flexible Learning"
                className="mx-auto w-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p className="text-black">
                Access courses anytime, anywhere, at your own pace.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="/images/certifications.png"
                alt="Certifications"
                className="mx-auto w-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <p className="text-black">
                Earn certificates to showcase your skills and boost your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Learning Adventure Today!
          </h2>
          <p className="text-lg mb-6">
            Join thousands of learners around the world and take the next step in your journey.
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
