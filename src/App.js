import React, { Suspense, } from 'react';
import { BrowserRouter as Router,
  // Routes,
  // Route,
} from 'react-router-dom';
// import routes from './routes';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useInView } from 'react-intersection-observer';

// const createRoute = (data) => (
//   data.map((route, index) => {
//     const Element = route.element;
//     return (
//       <Route
//         // eslint-disable-next-line react/no-array-index-key
//         key={`${route.path}-${index}`}
//         path={route.path}
//         index={route.index ?? false}
//         element={<Element />}
//       />
//     );
//   })
// );

const App  = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        {/* <Routes>
          {createRoute(routes)}
        </Routes> */}
        <main className="main grid-container">
          <Main />
          <div ref={ref} className="bottom"></div>
        </main>
        <Footer up={inView} />
      </Suspense>
    </Router>
  );
};

export default App;