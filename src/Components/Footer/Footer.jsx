import React, { useState, useEffect } from 'react';

const Footer = () => {
  const birthday = new Date('2005-03-28T00:00:00Z'); // UTC for consistency
  const [timeElapsed, setTimeElapsed] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - birthday.getTime();

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
      const remainingAfterYears = difference % (1000 * 60 * 60 * 24 * 365.25);
      const days = Math.floor(remainingAfterYears / (1000 * 60 * 60 * 24));
      const remainingAfterDays = remainingAfterYears % (1000 * 60 * 60 * 24);
      const hours = Math.floor(remainingAfterDays / (1000 * 60 * 60));
      const remainingAfterHours = remainingAfterDays % (1000 * 60 * 60);
      const minutes = Math.floor(remainingAfterHours / (1000 * 60));
      const seconds = Math.floor((remainingAfterHours % (1000 * 60)) / 1000);

      setTimeElapsed(
        `${years} years, ${Math.floor(days / 30)} months, ${days % 30} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 py-16 w-full mt-[3000px] mb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">About Me</h3>
          <p className="text-sm leading-relaxed">
            A passionate full-stack developer crafting innovative digital experiences. Exploring the intersection of technology and design. Let's build something amazing together.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400"><i className="fab fa-github text-xl"></i></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400"><i className="fab fa-linkedin text-xl"></i></a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400"><i className="fab fa-twitter text-xl"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/projects" className="hover:text-indigo-300">My Projects</a></li>
            <li><a href="/blog" className="hover:text-indigo-300">My Blog</a></li>
            <li><a href="/skills" className="hover:text-indigo-300">Skills & Expertise</a></li>
            <li><a href="/contact" className="hover:text-indigo-300">Contact Me</a></li>
          </ul>
        </div>

        {/* Recent Blog Posts (Example - would need dynamic data) */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">Latest Thoughts</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/blog/post-1" className="hover:text-indigo-300">Embracing Functional Components</a>
              <p className="text-xs text-gray-500">May 10, 2025</p>
            </li>
            <li>
              <a href="/blog/post-2" className="hover:text-indigo-300">The Power of Tailwind CSS</a>
              <p className="text-xs text-gray-500">May 5, 2025</p>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">Get In Touch</h3>
          <p className="text-sm mb-2">
            Have a project idea or just want to chat? Reach out!
          </p>
          <a href="/contact" className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
            Let's Talk
          </a>
          <p className="mt-3 text-xs text-gray-500">
            Or email me at: <a href="tirthoray10@gmail.com" className="hover:text-indigo-300">your.email@example.com</a>
          </p>
        </div>

      </div>
      <div className="mt-12 py-4 border-t border-gray-700 text-center text-sm text-gray-500 flex flex-col items-center">
        <div>&copy; {new Date().getFullYear()} Tirtho Ray Crafted with <span className="text-red-500">❤️</span> and Code.</div>
        <div className="mt-2">
          Time since my birthday (March 28, 2005):
        </div>
        <div>
          {timeElapsed}
        </div>
      </div>
    </footer>
  );
};

export default Footer;