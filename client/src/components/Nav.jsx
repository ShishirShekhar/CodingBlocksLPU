const Nav = () => {
  return (
    <div className="px-10 py-5 flex justify-between">
      <a href="/" className="flex items-center gap-2">
        <img
          src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1695725306/cblpu/of0sh9fxngmdj3twgdh0.png"
          alt="CodingBlocksLPU logo"
          className="w-10"
        />
        <h1 className="text-3xl font-semibold">CodingBlocks LPU</h1>
      </a>
      <div className="flex gap-2 items-center">
        <a href="/">
          <p>Home</p>
        </a>
        <a href="#event">
          <p>Event</p>
        </a>
        <a href="#contact">
          <p>Contact Us</p>
        </a>
        <button>
          Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
