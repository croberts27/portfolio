import React from "react";

function Footer() {
  return (
    <section id="footer">
      <footer className="w-100 mt-auto bg-secondary p-4 bg-white">
        <div className="container px-5 py-5 mx-auto text-center">
          {/* <h4 className="pb-2"></h4> */}
          <ul className="mt-3 text-lg font-medium text-white-900 dark:text-gray-900 sm:mt-0">
            <li>
              <a
                href="https://github.com/croberts27/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:underline hover:text-yellow  text-gray-900 md:mr-6 "
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/calvin-mroberts"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:underline md:mr-6 hover:text-yellow  text-gray-900"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:calvin.matsonroberts@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:underline hover:text-yellow  text-gray-900 md:mr-6 "
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
