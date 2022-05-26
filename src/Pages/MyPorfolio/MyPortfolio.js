import React from "react";

const MyPortfolio = () => {
  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold my-12 text-center">My Portfolio</h1>
      <div className="overflow-x-auto mx-24">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th className="py-10"></th>
              <th>Info Type</th>
              <th>Info Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Name</td>
              <td>Shaila Nasrin</td>
            </tr>

            <tr>
              <th>2</th>
              <td>Email</td>
              <td>drshaila2021@gmail.com</td>
            </tr>

            <tr>
              <th>3</th>
              <td>Phone</td>
              <td>832-998-XXXX</td>
            </tr>

            <tr>
              <th>4</th>
              <td>Contact Address</td>
              <td>Euless, TX-76039</td>
            </tr>

            <tr>
              <th>5</th>
              <td>Education</td>
              <td>Bachelor of Dental Surgery</td>
            </tr>

            <tr>
              <th>6</th>
              <td>Linkedin Profile</td>
              <td>
                <a
                  href="https://www.linkedin.com/in/shaila-nasrin-1420a1240/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linked In
                </a>
              </td>
            </tr>
            <tr>
              <th>7</th>
              <td>Webdev Projects</td>
              <td>
                <ul className="">
                  <li>
                    <a
                      href="http://localhost:3000"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tools Manufacturer
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://furniture-warehouse-949eb.web.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Furniture Warehouse
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://indipendent-service-provider.web.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Independent Service Provider
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>8</th>
              <td>Technologies </td>
              <td>
                <ul className="">
                  <li>Javascript</li>
                  <li>React JS, MongoDB, Node JS, Express</li>
                  <li>HTML-5, CSS-3, Bootstrap, Tailwind CSS framework</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPortfolio;
