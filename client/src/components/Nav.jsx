const Nav = () => {
  return (
    <div className="px-10 py-5 flex justify-between bg-primary z-10 sticky top-0 shadow-xl">
      <a href="/" className="flex items-center gap-2">
        <img
          src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1695725306/cblpu/of0sh9fxngmdj3twgdh0.png"
          alt="CodingBlocksLPU logo"
          className="w-10"
        />
        <h1 className="text-3xl font-semibold">CodingBlocks LPU</h1>
      </a>
      <div className="flex gap-6 items-center">
        <a href="/">
          <p className="nav-item">Home</p>
        </a>
        <a href="#event">
          <p className="nav-item">Event</p>
        </a>
        <a href="#contact">
          <p className="nav-item">Contact Us</p>
        </a>
        <button className="secondary-btn">Login</button>
      </div>
    </div>
  );
};

export default Nav;
