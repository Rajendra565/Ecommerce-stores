import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-[#131313] text-white py-4 mt-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
          <p className="text-sm">Follow us on social media</p>
          <div className="flex justify-center gap-4 mt-2">
            {/* Add your social media icons here */}
            <a href="#" className="text-white">
              Facebook
            </a>
            <a href="#" className="text-white">
              Twitter
            </a>
            <a href="#" className="text-white">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
