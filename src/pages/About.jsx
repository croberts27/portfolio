function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center ">
            <br className="hidden lg:inline-block" /> About Me
          </h1>
          <p className="mb-8 leading-relaxed text-justify ">
            Hello! My name is Calvin Matson-Roberts, and I recently graduated
            from the Columbia School of Engineering Full Stack Web Development
            Boot Camp. Currently, I am pursuing a career in Web Development, as
            well as exploring the many interests this industry has to offer.
            Please, check out the links to my projects and blog posts, and be on
            the lookout for future additions!
          </p>
          <div className="flex justify-center">
            <a
              href="#footer"
              className="inline-flex text-white bg-gray-900 text-center border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-900 text-center border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Portfolio
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="profile picture"
            src="src/images/profPic.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
