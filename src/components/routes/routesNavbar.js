import React from "react";

const routesNavbar = () => {
  return (
    <Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </section>
    </Fragment>
  );
};

export default routesNavbar;
