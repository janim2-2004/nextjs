import { useState } from "react";
 
export default function Home() {
  return (
    <main className="flex gap-3 flex-col justify-between p-24 max-w-5xl mx-auto">
      <div>
        <h1 className="text-6xl">Manvendra Jani</h1>
        <p>Computer Engineering student at McMaster University</p>
      </div>
 
      <div>
        <h2 className="text-4xl">Social Links:</h2>
 
        <ul>
          <li>
            Email: {" "}
            <a
              className="text-blue-600 underline"
              href="janimanvendra@gmail.com">
              janimanvendra@gmail.com
            </a>
          </li>
          <li>
            Github: {" "}
            <a
              className="text-blue-600 underline"
              href="https://github.com/janim2-2004">
              @janim2-2004
            </a>
          </li>
          <li>
            LinkedIn: {" "}
            <a
              className="text-blue-600 underline"
              href="https://www.linkedin.com/in/manvendra-jani/">
              @Manvendra Jani
            </a>
          </li>
        </ul>
      </div>
 
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl">Projects</h2>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold">Project Alpha</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold">Project Beta</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold">Project Gamma</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold">Project Delta</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
 
      {/* An example of how to use JS functions in JSX*/}
      The date is {new Date().toUTCString()}
 
    </main>
  )
}
 