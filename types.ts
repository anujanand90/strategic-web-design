
// Import React to resolve React.ReactNode type reference
import React from 'react';

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  quote: string;
  avatar: string;
}

export interface ClientLogo {
  name: string;
  icon: React.ReactNode;
}

export interface BusinessAnalysis {
  brandVoice: string;
  targetAudiencePainPoints: string[];
  strategicAngle: string;
  suggestedFeatures: string[];
}
