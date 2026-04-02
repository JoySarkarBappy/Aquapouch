/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Materials from "./components/Materials";
import Results from "./components/Results";
import Cost from "./components/Cost";
import Features from "./components/Features";
import Team from "./components/Team";
import FutureInsights from "./components/FutureInsights";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Materials />
        <Results />
        <Cost />
        <Features />
        <Team />
        <FutureInsights />
      </main>
      <Footer />
    </div>
  );
}
