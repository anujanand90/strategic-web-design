
import React, { createContext, useContext, useState } from 'react';

type PackageType = 'starter' | 'growth' | 'scale' | '';

interface PackageContextType {
  selectedPackage: PackageType;
  setSelectedPackage: (pkg: PackageType) => void;
}

const PackageContext = createContext<PackageContextType | undefined>(undefined);

export const PackageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('');

  return (
    <PackageContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </PackageContext.Provider>
  );
};

export const usePackage = () => {
  const context = useContext(PackageContext);
  if (!context) throw new Error('usePackage must be used within PackageProvider');
  return context;
};
