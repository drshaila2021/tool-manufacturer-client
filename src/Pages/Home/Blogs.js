import React from "react";

const Blogs = () => {
  return (
    <div className="h-100">
      <h3 className="text-center font-bold mt-12 text-3xl">
        Technology Topics
      </h3>
      <div className="carousel rounded-lg ml-24 mr-24 mb-20">
        <div
          id="item1"
          className="carousel-item w-full justify-center flex flex-col"
        >
          <h4 className="text-xl font-bold my-4">
            How to Improvement Performance of React Applicaton ?
          </h4>{" "}
          <p className="text-lg text-justify">
            {" "}
            To get the optimum Performance of react app first it needs to make
            sure it has been minified and it's a production build created with
            'npm run build'. For Single-File build, the suitable file format for
            profuction verion is '.production.min.js' . For Brunch prodcution it
            remommnded to use 'terser-brunch' plugin. For Browserify and Rollup
            it's better to use some specifig plugin as recommended. Windowing
            should be used when long list of data is needed to render by the
            application. Reconciliation should be avoided and
            'shouldComponentUpdate' can be set fasle unless it's needed as true.
            Code can be rewrite where objects are mutating to make it non
            mutating.
          </p>
        </div>
        <div
          id="item2"
          className="carousel-item w-full justify-center flex flex-col"
        >
          <h4 className="text-xl font-bold my-4">
            What is different ways to manage state in react application?
          </h4>{" "}
          <p className="text-lg text-justify">
            {" "}
            There are differnt ways state can be managed with React suhc as
            using Hooks, using Context API and using Apollo Link State
          </p>
        </div>
        <div
          id="item3"
          className="carousel-item w-full justify-center flex flex-col"
        >
          <h4 className="text-xl font-bold my-4">
            How pototypical inheritance works?
          </h4>{" "}
          <p className="text-lg text-justify">
            {" "}
            Prototypical inheritance is the build in feature of Javascript to
            add methods and propertices in object. It a method
            [[Prototypel]]through which an object inherites properties and
            methods from another object. This can be used by __proto__.
          </p>
        </div>
        <div
          id="item4"
          className="carousel-item w-full justify-center flex flex-col"
        >
          <h4 className="text-xl font-bold my-4">
            What is a unit test ? Why should write unit test ?
          </h4>{" "}
          <p className="text-lg text-justify">
            {" "}
            Unit tesitng is a software testing propcess through which individual
            units of source code is tested to find for any issue. <br></br>
            The benefit of using Unit Test is - it helps reduce bug or defects.
            This also helps reduce cost as bugs can be identified at early
            stage.
          </p>
        </div>
        <div
          id="item5"
          className="carousel-item w-full justify-center flex flex-col"
        >
          <h4 className="text-xl font-bold my-4">
            Why do not set state directly ?
          </h4>{" "}
          <p className="text-lg text-justify">
            When state is assigned directly it mutuates the objects directly and
            calls setState() with an empty object and previous state populates
            with mutation. Due to this, the shallow campare and merge of two
            state get disturbed as there is only one state and this disdupts
            React's Lifecycle methods.
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item4" className="btn btn-xs">
          5
        </a>
      </div>
    </div>
  );
};

export default Blogs;
