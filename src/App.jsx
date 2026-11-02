import React from 'react';
import { Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Core & Discovery Pages
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import TasksPage from './pages/TasksPage';
import TaskDetailPage from './pages/TaskDetailPage';
import ToolDetailPage from './pages/ToolDetailPage';
import CompareHubPage from './pages/CompareHubPage';
import ToolVsToolPage from './pages/ToolVsToolPage';
import ToolAlternativesPage from './pages/ToolAlternativesPage';
import AiFinderPage from './pages/AiFinderPage';
import DealsPage from './pages/DealsPage';
import LaunchesPage from './pages/LaunchesPage';
import ReviewsPage from './pages/ReviewsPage';
import FreeToolsPage from './pages/FreeToolsPage';
import TrendingPage from './pages/TrendingPage';
import NewToolsPage from './pages/NewToolsPage';
import SearchResultsPage from './pages/SearchResultsPage';

// Founder Portal Pages
import SubmitPage from './pages/SubmitPage';
import SubmitFormPage from './pages/SubmitFormPage';
import SubmitSuccessPage from './pages/SubmitSuccessPage';
import PromotePage from './pages/PromotePage';
import FounderPricingPage from './pages/FounderPricingPage';
import FounderDashboardPage from './pages/FounderDashboardPage';
import ManageListingPage from './pages/ManageListingPage';

// Trust, Legal & Account Pages
import RankingMethodologyPage from './pages/RankingMethodologyPage';
import ReviewMethodologyPage from './pages/ReviewMethodologyPage';
import SponsoredPolicyPage from './pages/SponsoredPolicyPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import GenericInfoPage from './pages/GenericInfoPage';
import PasswordPage from './pages/PasswordPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Core & Discovery */}
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:slug" element={<CategoryDetailPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/task/:slug" element={<TaskDetailPage />} />
        <Route path="/tool/:slug" element={<ToolDetailPage />} />
        <Route path="/free-ai-tools" element={<FreeToolsPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/new" element={<NewToolsPage />} />
        <Route path="/industries" element={<GenericInfoPage title="AI Tools by Industry" tag="Planned after MVP" subtitle="Industry-specific buying guides are prepared as a later roadmap feature." content={<p>For launch, browse tools by category or task. Industry-specific stacks will be added after the P0 directory is live.</p>} ctaText="Browse by task" ctaLink="/tasks" />} />
        <Route path="/stack-builder" element={<GenericInfoPage title="AI Stack Builder" tag="Architecture prepared" subtitle="Multi-tool workflow recommendations are intentionally deferred until after the core directory launch." content={<p>The planned experience will combine role, task and budget inputs. No recommendation engine or fabricated result is presented yet.</p>} ctaText="Use AI Finder preview" ctaLink="/ai-finder" />} />
        <Route path="/search" element={<SearchResultsPage />} />

        {/* Comparisons & Alternatives */}
        <Route path="/compare" element={<CompareHubPage />} />
        <Route path="/compare/:compareSlug" element={<ToolVsToolPage />} />
        <Route path="/alternatives" element={<ToolAlternativesPage />} />
        <Route path="/alternatives/:slug" element={<ToolAlternativesPage />} />
        <Route path="/:slug-alternatives" element={<ToolAlternativesPage />} />

        {/* AI Finder */}
        <Route path="/ai-finder" element={<AiFinderPage />} />

        {/* Growth, Deals, Launches & Reviews */}
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/launches" element={<LaunchesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/blog" element={<ReviewsPage />} />

        {/* Founder Portal */}
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/submit/new" element={<SubmitFormPage />} />
        <Route path="/submit/success" element={<SubmitSuccessPage />} />
        <Route path="/promote" element={<PromotePage />} />
        <Route path="/founders" element={<SubmitPage />} />
        <Route path="/pricing" element={<FounderPricingPage />} />
        <Route path="/founder/dashboard" element={<FounderDashboardPage />} />
        <Route path="/founder/tools/:id" element={<ManageListingPage />} />

        {/* Secondary Founder Pages */}
        <Route
          path="/claim"
          element={
            <GenericInfoPage
              title="Claim Your AI Tool Listing"
              tag="Ownership Verification"
              subtitle="Are you the founder or official team member of an indexed tool? Verify your ownership to manage details and access real-time analytics."
              content={
                <p>
                  To claim an existing listing, locate your tool in the directory, click the 'Claim Listing' button on the profile, or email our founder verification team at verification@aidirectory.example from your official domain address.
                </p>
              }
              ctaText="Browse Directory to Claim"
              ctaLink="/tools"
            />
          }
        />
        <Route
          path="/verified"
          element={
            <GenericInfoPage
              title="Get Verified Partner Badge"
              tag="Trust & Authenticity"
              subtitle="The Verified Badge signals to users and enterprise buyers that your product is actively maintained and has passed security and output tests."
              content={
                <p>
                  Verified partners undergo technical evaluation, maintain active uptime, and provide transparent privacy terms. The badge appears beside your tool across search, comparisons, and category hubs.
                </p>
              }
              ctaText="Submit for Verification"
              ctaLink="/submit"
            />
          }
        />
        <Route
          path="/advertise"
          element={
            <GenericInfoPage
              title="Advertise & Sponsorship Opportunities"
              tag="Audience Distribution"
              subtitle="Reach targeted software engineers, AI builders, product managers, and enterprise technology buyers."
              content={
                <p>
                  We offer dedicated weekly newsletter takeovers, category header sponsorships, and homepage featured placements. All sponsorships follow our clear labeling rules.
                </p>
              }
              ctaText="View Promotion Packages"
              ctaLink="/promote"
            />
          }
        />

        {/* Trust & Methodology */}
        <Route path="/ranking-methodology" element={<RankingMethodologyPage />} />
        <Route path="/review-methodology" element={<ReviewMethodologyPage />} />
        <Route path="/sponsored-policy" element={<SponsoredPolicyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Account Authentication */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<PasswordPage />} />
        <Route path="/reset-password" element={<PasswordPage />} />
        <Route path="/admin" element={<AdminPage />} />

        {/* Legal */}
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route
          path="/cookies"
          element={
            <GenericInfoPage
              title="Cookie Policy"
              tag="Compliance & Privacy"
              subtitle="How AI Directory uses cookies to enhance browsing and personalization."
              content={
                <p>
                  We use strictly necessary cookies to keep you signed in and maintain your theme preferences, as well as lightweight performance analytics cookies. You can manage cookie permissions in your browser settings.
                </p>
              }
            />
          }
        />
        <Route
          path="/community-guidelines"
          element={
            <GenericInfoPage
              title="Community & Review Guidelines"
              tag="Authentic Feedback"
              subtitle="Standards for submitting user reviews, ratings, and feedback."
              content={
                <p>
                  We welcome constructive, honest reviews based on firsthand usage. We strictly prohibit fake reviews, undisclosed founder self-reviews, defamatory content, or spam. Violating accounts are permanently suspended.
                </p>
              }
            />
          }
        />

        {/* 404 Recovery */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
