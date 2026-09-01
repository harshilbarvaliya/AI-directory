import React from 'react';
import { CheckCircle, Zap, Sparkles, Tag, DollarSign } from 'lucide-react';

export default function Badge({ type = 'subtle', children, icon = true, className = '' }) {
  const getBadgeConfig = () => {
    switch (type) {
      case 'verified':
        return {
          classes: 'badge-verified',
          iconComponent: icon ? <CheckCircle size={12} strokeWidth={2.5} /> : null,
          defaultText: 'Verified'
        };
      case 'sponsored':
        return {
          classes: 'badge-sponsored',
          iconComponent: icon ? <Zap size={12} /> : null,
          defaultText: 'Sponsored'
        };
      case 'new':
        return {
          classes: 'badge-new',
          iconComponent: icon ? <Sparkles size={12} /> : null,
          defaultText: 'New'
        };
      case 'deal':
        return {
          classes: 'badge-deal',
          iconComponent: icon ? <Tag size={12} /> : null,
          defaultText: 'Exclusive Deal'
        };
      case 'free':
        return {
          classes: 'badge-free',
          iconComponent: icon ? <DollarSign size={12} /> : null,
          defaultText: 'Free'
        };
      case 'freemium':
        return {
          classes: 'badge-freemium',
          iconComponent: null,
          defaultText: 'Freemium'
        };
      case 'paid':
        return {
          classes: 'badge-paid',
          iconComponent: null,
          defaultText: 'Paid'
        };
      default:
        return {
          classes: 'badge-subtle',
          iconComponent: null,
          defaultText: ''
        };
    }
  };

  const config = getBadgeConfig();

  return (
    <span className={`badge ${config.classes} ${className}`}>
      {config.iconComponent}
      {children || config.defaultText}
    </span>
  );
}
