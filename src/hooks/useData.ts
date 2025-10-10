import { useState, useEffect } from 'react';

interface PricingData {
  lastUpdated: string;
  pricing: {
    licenses: Array<{
      type: string;
      category: string;
      price: string;
    }>;
    upgrades: Array<{
      from: string;
      to: string;
      price: string;
    }>;
    exams: {
      teorik: string;
      direksiyon: string;
    };
    taxes: {
      [key: string]: string;
    };
    services: {
      [key: string]: string;
    };
  };
}

interface ContactData {
  lastUpdated: string;
  contact: {
    companyName: string;
    phone: string;
    email: string;
    address: {
      street: string;
      district: string;
      city: string;
      postalCode: string;
      country: string;
    };
    workingHours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    branches: Array<{
      name: string;
      address: string;
      phone: string;
    }>;
  };
}

export const usePricingData = () => {
  const [data, setData] = useState<PricingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/pricing.json');
        if (!response.ok) {
          throw new Error('Failed to fetch pricing data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export const useContactData = () => {
  const [data, setData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/contact.json');
        if (!response.ok) {
          throw new Error('Failed to fetch contact data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
