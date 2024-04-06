const Banner = ({ images, speed = 5000 }) => {
  return (
    <div className="w-full flex justify-center h-[12em] bg-[#001736]">
      <div id="carousel-wrapper" className="w-9/12 md:w-8/12 lg:w-1/2">
        <div className="inner">
          <div className="wrapper">
            <section
              className="carousel-class"
              style={{ "--speed": `${speed}ms` }}
            >
              {images.map(({ id, image }) => (
                <div className="image" key={id}>
                  <img src={image} alt={id} />
                </div>
              ))}
            </section>
            <section
              className="carousel-class"
              style={{ "--speed": `${speed}ms` }}
            >
              {images.map(({ id, image }) => (
                <div className="image" key={id}>
                  <img src={image} alt={id} />
                </div>
              ))}
            </section>
            <section
              className="carousel-class"
              style={{ "--speed": `${speed}ms` }}
            >
              {images.map(({ id, image }) => (
                <div className="image" key={id}>
                  <img src={image} alt={id} />
                </div>
              ))}
            </section>
            <section
              className="carousel-class"
              style={{ "--speed": `${speed}ms` }}
            >
              {images.map(({ id, image }) => (
                <div className="image" key={id}>
                  <img src={image} alt={id} />
                </div>
              ))}
            </section>
            <section
              className="carousel-class"
              style={{ "--speed": `${speed}ms` }}
            >
              {images.map(({ id, image }) => (
                <div className="image" key={id}>
                  <img src={image} alt={id} />
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Banner };
