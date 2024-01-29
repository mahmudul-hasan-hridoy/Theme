// components/Footer.js
import ThemeSwitch from "./themeSwitch";

const Footer = () => {
  return (
    <footer className="dark:bg-slate-900 dark:text-white p-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tailwindcss. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          <a href="/privacy-policy" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          {" | "}
          <a href="/terms-of-service" className="text-blue-500 hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
      <div className="flex items-center justify-center mt-2">
        <ThemeSwitch />
      </div>
    </footer>
  );
};

export default Footer;
