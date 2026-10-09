# SmartBorrow – EMI Compass
### Production-Grade Loan EMI Calculator, Visualizer & Multi-Bank Scenario Planner

> An editorial fintech web application built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Recharts**. Designed with the calm, trustworthy aesthetics of modern financial tools (Linear, Wise, Stripe), SmartBorrow eliminates borrowing guesswork through precision mathematics, multi-scenario comparisons, and proactive repayment simulations.

---

## 🏛️ Problem Statement
Borrowers struggle to evaluate what a loan truly costs each month and over its lifetime. Crucial details—such as the disproportionate weight of interest during initial years, the impact of processing fees on effective APR, or the compounding savings from small prepayments—are frequently buried in complex lender disclosures. Furthermore, borrowers lack simple tools to compare disparate offers (e.g., Bank A at 8.5% for 20 years vs. Bank B at 9% for 15 years) side by side.

---

## 🎯 Solution Overview
**SmartBorrow (EMI Compass)** delivers complete loan transparency via:
1. **Live Synchronized Calculator**: Live-debounced sliders and numeric inputs with instant feedback and 0% promotional interest edge case handling.
2. **Multi-Perspective Visualizations**: Interactive Donut chart, Stacked Yearly Progression (Principal vs. Interest), and Outstanding Balance curves.
3. **Scenario Comparison (Hero Feature)**: Compare up to 4 bank offers side by side with automated **"Best"** metric badges, overlay balance curves, and auto-generated plain-English verdicts.
4. **Interactive Repayment & Affordability Planner**:
   - **Prepayment Simulator**: Test monthly or lump-sum prepayments and see months and interest saved.
   - **Affordability / DTI Guard**: Evaluate Debt-to-Income (FOIR) ratios with visual green/amber/red risk flags (alert at >40%).
   - **Reverse Loan Calculator**: Discover maximum eligible borrowing power based on affordable monthly EMI.
5. **Smart Insights & Tenure Trade-off Curve**: Proactive advice cards (e.g., "+10% EMI cuts tenure by 3.2 years") and real-time interest-vs-tenure slider curve.
6. **Persistence & Sharing**: Encodes complete loan scenarios in shareable URLs and persists state in `localStorage` wrapped in error boundaries.
7. **Export & Offline Support**: One-click CSV schedule export, print-friendly reporting stylesheet, and offline PWA service worker.

---

## 📐 Formulas & Mathematical Methodology

### 1. Equated Monthly Installment (EMI)
$$\text{EMI} = \frac{P \times r \times (1 + r)^n}{(1 + r)^n - 1}$$
Where:
- $P$ = Principal Loan Amount
- $r$ = Monthly interest rate $= \frac{\text{Annual Rate}}{12 \times 100}$
- $n$ = Total tenure in months $= \text{Years} \times 12$

#### Edge Case: 0% Interest Rate
When $r = 0$:
$$\text{EMI} = \frac{P}{n}$$
$$\text{Total Interest} = 0$$

### 2. Reverse Loan Inversion (Borrowing Power)
$$P = \text{EMI} \times \frac{(1 + r)^n - 1}{r \times (1 + r)^n}$$

### 3. Effective APR with Upfront Processing Fees
$$\text{Effective APR} \approx \text{Nominal Rate} + \left( \frac{\text{Processing Fee}}{P \times \text{Tenure in Years}} \times 100 \right)$$

### 4. Break-Even Crossover Point
The exact month $m$ where cumulative principal paid exceeds cumulative interest paid:
$$\sum_{k=1}^{m} \text{Principal}_k \ge \sum_{k=1}^{m} \text{Interest}_k$$

---

## 🚀 Project Folder Structure

```
SmartBorrow/
├── public/
│   ├── favicon.svg             # Precision compass brand glyph
│   ├── manifest.json           # Progressive Web App manifest
│   └── sw.js                   # Offline caching service worker
├── src/
│   ├── components/
│   │   ├── Amortization/
│   │   │   └── AmortizationTable.tsx   # Yearly accordion with monthly breakdown & CSV export
│   │   ├── Calculator/
│   │   │   ├── HeroResultCard.tsx      # 64px+ animated count-up EMI figure & key stats
│   │   │   ├── LoanInputPanel.tsx      # Synced sliders, presets & progressive disclosure
│   │   │   ├── LoanPresets.tsx         # Home, Car, Personal, Education presets
│   │   │   ├── SmartInsights.tsx       # Dynamic recommendations & break-even insights
│   │   │   ├── TenureTradeoffSlider.tsx # Interactive tenure vs interest trade-off curve
│   │   │   └── Visualizations.tsx      # Donut, Stacked Bar & Balance line charts
│   │   ├── Compare/
│   │   │   └── ScenarioComparison.tsx  # Hero feature: 4 scenarios, matrix & auto verdict
│   │   ├── Planner/
│   │   │   └── PlannerTools.tsx        # Prepayment simulator, Affordability & Reverse calculator
│   │   ├── common/
│   │   │   ├── GuidedTourModal.tsx     # 4-step interactive onboarding walkthrough
│   │   │   ├── KeyboardShortcutsModal.tsx # Shortcuts cheatsheet [1-4, N, D, P, S, ?]
│   │   │   ├── ShareModal.tsx          # URL sharing with base64 encoded scenario state
│   │   │   └── SliderWithInput.tsx     # Accessible, live-filled track slider with numeric input
│   │   ├── Header.tsx                  # Brand, multi-currency switcher, dark mode & utilities
│   │   └── TabsNav.tsx                 # Tab navigation with scenario counter badges
│   ├── hooks/
│   │   ├── useDebounce.ts              # Smooth input sync without re-render bottlenecks
│   │   ├── useLocalStorage.ts          # Safe storage wrapper with try/catch fallback
│   │   ├── useScenarios.ts             # Scenario manager (add, clone, delete, reorder)
│   │   └── useTheme.ts                 # Light / Dark mode toggle with system preference
│   ├── types/
│   │   └── loan.ts                     # TypeScript financial and scenario data models
│   ├── utils/
│   │   ├── calculations.ts             # Pure financial calculation engine (100% unit tested)
│   │   ├── calculations.test.ts        # Vitest test suite covering edge cases
│   │   ├── export.ts                   # CSV download and print report triggers
│   │   ├── formatters.ts               # Multi-currency (INR, USD, EUR, GBP) & compact formatters
│   │   └── urlState.ts                 # Base64 URL compression for scenario sharing
│   ├── App.tsx                         # Desktop 2-column sticky & mobile bottom sheet layout
│   ├── index.css                       # Design tokens, custom slider styles, print stylesheets
│   ├── main.tsx                        # Root React renderer with PWA registration
│   └── vite-env.d.ts                   # Vite environment definitions
├── index.html                          # HTML5 shell with Google Fonts (Fraunces & Inter)
├── package.json
├── tailwind.config.js                  # Editorial fintech color palette and typography
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Setup & Run Instructions

### Prerequisites
- Node.js (v18 or higher recommended; tested on v24)
- npm (v9 or higher)

### Installation
```bash
# Clone or navigate to the directory
cd SmartBorrow

# Install dependencies
npm install
```

### Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running Unit Tests
```bash
npm test
```
Executes all 18 Vitest test suites verifying financial accuracy, edge cases (0% interest, single-month loans, large balances, precision rounding, and reverse calculation).

### Building for Production
```bash
npm run build
```
Creates a minified, production-optimized bundle in the `dist/` directory.

---

## ⚡ Keyboard Shortcuts
| Key | Action |
|:---:|:---|
| `1` | Switch to **Calculator** tab |
| `2` | Switch to **Amortization** tab |
| `3` | Switch to **Compare** tab |
| `4` | Switch to **Planner & What-If** tab |
| `N` | Add new bank scenario (up to 4) |
| `D` | Toggle Dark / Light theme |
| `P` | Print / Save summary report as PDF |
| `S` | Share scenario link |
| `?` | Launch Interactive Guided Tour |
| `Esc` | Dismiss any active modal dialog |

---

## ⏱️ 60-Second Demo Journey Script

| Time | Action | What to Observe |
|:---:|:---|:---|
| **00:00 - 00:10** | **Load & Tweak Loan** | The Hero EMI figure renders at 64px+ in Fraunces serif typography. Drag the **Principal** slider to ₹60 Lakhs and switch the **Interest Rate** slider to 8.5%. Observe the live count-up animation and synchronized live track fill without page lag. |
| **00:10 - 00:20** | **Explore Visuals & Trade-Off Curve** | Toggle between **Total Split (Donut)** and **Yearly Stack**. Scroll to the **Tenure vs Interest Trade-off Curve** slider; slide from 20 to 15 years to immediately see total interest drop by over ₹15 Lakhs! Click *"Apply 15y to Loan"*. |
| **00:20 - 00:35** | **Add Scenarios & Compare Offers** | Press `3` (or click **Compare** tab). Click **"+ Add Scenario"** or duplicate Scenario 1. Set Option 2 as *"Bank B – 9.0% / 15y"*. Instantly examine the **Automated Verdict**: *"Bank B saves you the most money overall, cutting total interest by ₹1,42,850..."*. Note the green **Best** badges on Lowest EMI and Lowest Interest in the matrix table. |
| **00:35 - 00:48** | **Prepayment & Affordability Simulation** | Press `4` (or click **Planner** tab). In the **Prepayment Simulator**, select *"Monthly Extra"* of ₹5,000 starting from Month 12. Note the visual bar chart showing **4.1 Years Shaved Off** and over **₹4 Lakhs in interest saved**. Switch to **Affordability** to see the Debt-to-Income meter automatically validate your safe borrowing limit. |
| **00:48 - 01:00** | **Share & Export** | Press `S` to copy the base64-encoded shareable link to your clipboard. Press `P` to trigger the print stylesheet with a clean, printer-optimized amortization statement. Press `D` to view the dark theme with true neutral dark tones. |

---

## 🔮 Future Scope
1. **Multi-Currency Live FX Conversion**: Real-time cross-currency conversions for NRI and international loans.
2. **Tax Deductions Optimizer**: Incorporate Section 24(b) and Section 80C interest/principal tax deduction savings into net effective EMI.
3. **Floating Rate Shock Simulator**: Simulate what happens if benchmark repo rates rise by 50-150 bps during the loan tenure.
4. **Cloud Backup & PDF Export**: Native vector PDF export with branded bank summary headers.
