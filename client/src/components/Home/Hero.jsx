const Hero = () => {
  return (
    <div className="hero bg-center bg-cover h-screen flex flex-col justify-center items-center">
      <div className="p-2">
        <p className="text-4xl">Student Organisation</p>
      </div>
      <p className="text-7xl font-bold">CodingBlocks LPU</p>
      <div className="flex flex-col justify-center p-2">
        <p className="text-2xl font-semibold">Tech is the new trend</p>
        <a href="/" className="text-center">
          <button className="secondary-btn">Learn More →</button>
        </a>
      </div>
    </div>
  );
}

export default Hero
