import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { 
  Rocket, ChevronRight, CheckCircle2, AlertCircle, 
  Layers, DollarSign, Image as ImageIcon, User, ShieldCheck, 
  ArrowLeft, ArrowRight 
} from 'lucide-react';
import Button from '../components/common/Button';
import { categories, tasks, founderPricingPlans } from '../data/mockData';

export default function SubmitFormPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialPlan = searchParams.get('plan') || 'free-listing';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    toolName: '',
    websiteUrl: '',
    tagline: '',
    logoUrl: '',
    primaryCategory: categories[0].slug,
    tasks: [],
    shortDesc: '',
    longDesc: '',
    keyFeatures: '',
    bestFor: '',
    notIdealFor: '',
    pricingModel: 'Freemium',
    startingPrice: '',
    freeTrial: true,
    screenshotUrl: '',
    videoUrl: '',
    founderName: '',
    founderEmail: '',
    selectedPlan: initialPlan,
    consentTerms: false
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleTask = (taskName) => {
    setFormData(prev => {
      const exists = prev.tasks.includes(taskName);
      return {
        ...prev,
        tasks: exists ? prev.tasks.filter(t => t !== taskName) : [...prev.tasks, taskName]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission and redirect to success
    navigate('/submit/success');
  };

  return (
    <div className="page-wrapper container" style={{ maxWidth: '840px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Rocket size={14} />
          Multi-Step Submission Engine
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
          Submit Your AI Product
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '0.9375rem' }}>
          Complete the 8-step product profile to be indexed in the AI Directory.
        </p>
      </div>

      {/* Step Indicator */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {[
          { num: 1, label: 'Basics' },
          { num: 2, label: 'Classify' },
          { num: 3, label: 'Product' },
          { num: 4, label: 'Pricing' },
          { num: 5, label: 'Media' },
          { num: 6, label: 'Founder' },
          { num: 7, label: 'Plan' },
          { num: 8, label: 'Review' }
        ].map((s) => (
          <div
            key={s.num}
            onClick={() => setStep(s.num)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem',
              cursor: 'pointer',
              minWidth: '60px'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8125rem',
                fontWeight: '700',
                background: step === s.num ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : step > s.num ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                color: step === s.num ? '#ffffff' : step > s.num ? '#34d399' : '#64748b',
                border: `1px solid ${step === s.num ? '#818cf8' : step > s.num ? '#10b981' : 'rgba(255, 255, 255, 0.1)'}`
              }}
            >
              {step > s.num ? <CheckCircle2 size={16} /> : s.num}
            </div>
            <span style={{ fontSize: '0.6875rem', fontWeight: '600', color: step === s.num ? '#f8fafc' : '#64748b' }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        
        {/* Step 1: Basics */}
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem' }}>1. Tool Basics</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Tool Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cursor, Midjourney, Perplexity"
                  value={formData.toolName}
                  onChange={(e) => updateField('toolName', e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Official Website URL *</label>
                <input
                  type="url"
                  required
                  placeholder="https://yourtool.com"
                  value={formData.websiteUrl}
                  onChange={(e) => updateField('websiteUrl', e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>One-Line Tagline / Value Proposition *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. The AI code editor built for pair programming with LLMs"
                  value={formData.tagline}
                  onChange={(e) => updateField('tagline', e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Square Logo Image URL *</label>
                <input
                  type="url"
                  required
                  placeholder="https://yourtool.com/logo.png"
                  value={formData.logoUrl}
                  onChange={(e) => updateField('logoUrl', e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Classification */}
        {step === 2 && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem' }}>2. Classification & Use Cases</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Primary Category *</label>
                <select
                  value={formData.primaryCategory}
                  onChange={(e) => updateField('primaryCategory', e.target.value)}
                  style={inputStyle}
                >
                  {categories.map(c => (
                    <option key={c.id} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={labelStyle}>Associated Tasks & Workflows (Select all that apply) *</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.625rem', marginTop: '0.5rem' }}>
                  {tasks.map(t => {
                    const selected = formData.tasks.includes(t.name);
                    return (
                      <div
                        key={t.id}
                        onClick={() => toggleTask(t.name)}
                        style={{
                          padding: '0.625rem 0.875rem',
                          borderRadius: '10px',
                          border: `1px solid ${selected ? '#6366f1' : 'rgba(255, 255, 255, 0.08)'}`,
                          background: selected ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                          color: selected ? '#ffffff' : '#94a3b8',
                          fontSize: '0.8125rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: `1px solid ${selected ? '#818cf8' : 'rgba(255, 255, 255, 0.2)'}`, background: selected ? '#6366f1' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {selected && <CheckCircle2 size={12} style={{ color: '#ffffff' }} />}
                        </div>
                        <span>{t.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Product Description */}
        {step === 3 && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem' }}>3. Product Details</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Short Description (2-3 sentences) *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Explain what problem your software solves and who benefits most..."
                  value={formData.shortDesc}
                  onChange={(e) => updateField('shortDesc', e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Key Features (One per line) *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Feature 1: Multi-file contextual index&#10;Feature 2: Real-time code execution&#10;Feature 3: Custom fine-tuned models"
                  value={formData.keyFeatures}
                  onChange={(e) => updateField('keyFeatures', e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Best For *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior engineers & growth teams"
                    value={formData.bestFor}
                    onChange={(e) => updateField('bestFor', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Not Ideal For (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Non-technical hobbyists"
                    value={formData.notIdealFor}
                    onChange={(e) => updateField('notIdealFor', e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Pricing */}
        {step === 4 && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem' }}>4. Pricing & Licensing</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Pricing Model *</label>
                <select
                  value={formData.pricingModel}
                  onChange={(e) => updateField('pricingModel', e.target.value)}
                  style={inputStyle}
                >
                  <option value="Free">Free</option>
                  <option value="Freemium">Freemium</option>
                  <option value="Paid">Paid</option>
                  <option value="Contact Sales">Contact Sales / Enterprise</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Starting Price (e.g. $15/mo or Free) *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. $20/mo"
                  value={formData.startingPrice}
                  onChange={(e) => updateField('startingPrice', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                <input
                  type="checkbox"
                  id="freeTrial"
                  checked={formData.freeTrial}
                  onChange={(e) => updateField('freeTrial', e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#6366f1' }}
                />
                <label htmlFor="freeTrial" style={{ fontSize: '0.875rem', color: '#cbd5e1', cursor: 'pointer' }}>
                  Offers a Free Trial / No Credit Card evaluation
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Media */}
        {step === 5 && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem' }}>5. Screenshots & Demo Video</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Product Screenshot URL *</label>
                <input
                  type="url"
                  required
                  placeholder="https://yourtool.com/screenshot-main.png"
                  value={formData.screenshotUrl}
                  onChange={(e) => updateField('screenshotUrl', e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>YouTube / Loom Product Demo Video URL (Optional)</label>
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={formData.videoUrl}
                  onChange={(e) => updateField('videoUrl', e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Founder */}
        {step === 6 && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem' }}>6. Founder & Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Founder / Company Legal Entity Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme AI Labs Inc."
                  value={formData.founderName}
                  onChange={(e) => updateField('founderName', e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Official Contact Email (Private / Dashboard notifications) *</label>
                <input
                  type="email"
                  required
                  placeholder="founder@yourcompany.com"
                  value={formData.founderEmail}
                  onChange={(e) => updateField('founderEmail', e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 7: Promotion Plan */}
        {step === 7 && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem' }}>7. Select Submission Plan</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {founderPricingPlans.slice(0, 4).map(p => {
                const selected = formData.selectedPlan === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => updateField('selectedPlan', p.id)}
                    style={{
                      padding: '1.25rem',
                      borderRadius: '14px',
                      border: `1px solid ${selected ? '#6366f1' : 'rgba(255, 255, 255, 0.08)'}`,
                      background: selected ? 'rgba(99, 102, 241, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <span style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#ffffff' }}>{p.name}</span>
                    <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#818cf8', margin: '0.25rem 0' }}>{p.price}</span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{p.period}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 8: Review & Submit */}
        {step === 8 && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem' }}>8. Review & Final Confirmation</h2>
            
            <div style={{ padding: '1.25rem', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.875rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div><strong>Tool Name:</strong> {formData.toolName || '—'}</div>
                <div><strong>Website:</strong> {formData.websiteUrl || '—'}</div>
                <div><strong>Category:</strong> {formData.primaryCategory}</div>
                <div><strong>Pricing:</strong> {formData.pricingModel} ({formData.startingPrice || '—'})</div>
                <div><strong>Selected Plan:</strong> {formData.selectedPlan}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <input
                type="checkbox"
                id="consent"
                required
                checked={formData.consentTerms}
                onChange={(e) => updateField('consentTerms', e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: '#6366f1', marginTop: '2px' }}
              />
              <label htmlFor="consent" style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: '1.5' }}>
                I confirm that I am an authorized representative of this software and that all information provided is accurate. I agree to the <Link to="/terms" style={{ color: '#818cf8' }}>Terms of Service</Link> and <Link to="/sponsored-policy" style={{ color: '#818cf8' }}>Sponsored Content Policy</Link>.
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="btn btn-secondary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <ArrowLeft size={14} />
              <span>Previous Step</span>
            </button>
          ) : <div />}

          {step < 8 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="btn btn-primary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <span>Continue</span>
              <ArrowRight size={14} />
            </button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={Rocket}
              iconPosition="right"
              disabled={!formData.consentTerms}
            >
              Submit Tool for Review
            </Button>
          )}
        </div>

      </form>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.8125rem',
  fontWeight: '600',
  color: '#cbd5e1',
  marginBottom: '0.35rem'
};

const inputStyle = {
  width: '100%',
  background: 'rgba(15, 18, 28, 0.8)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '10px',
  padding: '0.625rem 0.875rem',
  color: '#ffffff',
  fontSize: '0.875rem',
  outline: 'none'
};
