function About() {
  return (
    <section
      className="text-black flex flex-wrap justify-center items-center  body-font"
      id="about"
    >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center ">
            <br className="hidden lg:inline-block" /> About Me
          </h1>
          <p className="mb-8 leading-relaxed text-black font-medium text-justify ">
            Hello! My name is Calvin Matson-Roberts, and I recently graduated
            from the Columbia School of Engineering Full Stack Web Development
            Boot Camp. Currently, I am pursuing a career in Web Development, as
            well as exploring the many interests this industry has to offer. I
            love new technologies and am always eager to expand my knowledge.
            Please, check out the links to my projects and blog posts, and be on
            the lookout for future additions!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover mt-20 object-center rounded-full"
            alt="profile picture"
            src="/profPic.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
