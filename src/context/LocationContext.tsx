"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { LOCATIONS, DEFAULT_LOCATION_KEY, LocationData } from "@/data/locations";

export interface BookingFormState {
  serviceId?: string;
  issueDescription?: string;
  urgency?: "emergency" | "sameday" | "flexible";
  estimatedPriceRange?: string;
  propertyType?: string;
  zipCode?: string;
}

interface LocationContextType {
  currentLocation: LocationData;
  selectedStateKey: string;
  setSelectedStateKey: (key: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  allLocations: Record<string, LocationData>;
  isBookingModalOpen: boolean;
  openBookingModal: (initialData?: BookingFormState) => void;
  closeBookingModal: () => void;
  bookingPrefill: BookingFormState | null;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [selectedStateKey, setSelectedStateKey] = useState<string>(DEFAULT_LOCATION_KEY);
  const [selectedCity, setSelectedCity] = useState<string>(LOCATIONS[DEFAULT_LOCATION_KEY].primaryCity);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<BookingFormState | null>(null);

  const currentLocation = LOCATIONS[selectedStateKey] || LOCATIONS[DEFAULT_LOCATION_KEY];

  const handleStateChange = (newKey: string) => {
    if (LOCATIONS[newKey]) {
      setSelectedStateKey(newKey);
      setSelectedCity(LOCATIONS[newKey].primaryCity);
    }
  };

  const openBookingModal = (initialData?: BookingFormState) => {
    if (initialData) {
      setBookingPrefill(initialData);
    } else {
      setBookingPrefill(null);
    }
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <LocationContext.Provider
      value={{
        currentLocation,
        selectedStateKey,
        setSelectedStateKey: handleStateChange,
        selectedCity,
        setSelectedCity,
        allLocations: LOCATIONS,
        isBookingModalOpen,
        openBookingModal,
        closeBookingModal,
        bookingPrefill,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
}
