/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Materials from "./components/Materials";
import Results from "./components/Results";
import Cost from "./components/Cost";
import Features from "./components/Features";
import Team from "./components/Team";
import FutureInsights from "./components/FutureInsights";
import Footer from "./components/Footer";
import PurchaseModal from "./components/PurchaseModal";

export default function App() {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const openPurchaseModal = () => setIsPurchaseModalOpen(true);
  const closePurchaseModal = () => setIsPurchaseModalOpen(false);

  return (
    <div className="min-h-screen">
      <Navbar onPurchase={openPurchaseModal} />
      <main>
        <Hero onPurchase={openPurchaseModal} />
        <Materials />
        <Results />
        <Cost onPurchase={openPurchaseModal} />
        <Features />
        <Team />
        <FutureInsights />
      </main>
      <Footer />
      <PurchaseModal isOpen={isPurchaseModalOpen} onClose={closePurchaseModal} />
    </div>
  );
}
