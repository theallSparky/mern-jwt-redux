export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold  mb-4 text-slate-700">About</h1>
      <p className="mb-4 text-slate-700">
        This is a MERN (MongoDB, Express.js, React.js, Node.js) stack
        application with authentication. It allows users to sign up, sign in,
        and sign out, while providing protected routes only for authenticated
        users.
      </p>
      <p className="mb-4 text-slate-700">
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDb as the database. Authentication is implemented
        usig JSON Web Tokens (JWT)!
      </p>
      <p className="mb-4 text-slate-700">
        This application is intended as a starting point for building full-stack
        web applications with the MERN stack. Please, feel free to use it as a
        template for your own projects.
      </p>
    </div>
  );
}
