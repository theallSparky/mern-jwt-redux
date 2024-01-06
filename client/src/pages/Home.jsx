export default function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold  mb-4 text-slate-700">
        Welcome to my authentication app!
      </h1>
      <p className="mb-4 text-slate-700">
        This is a full-stack web application built with the MERN (MongoDB,
        Express.js, React.js, node.js) stack.It includes google OAuth and
        authentication features which allow users to sign up, sign in, and sign
        out, while providing protected routes only for authenticated users.
      </p>
      <p className="mb-4 text-slate-700">
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDb as the database. Authentication is implemented
        usig JSON Web Tokens (JWT)!
      </p>
      <p className="mb-4 text-slate-700"></p>
    </div>
  );
}
