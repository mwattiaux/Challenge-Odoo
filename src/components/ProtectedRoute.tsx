import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  unlocked: boolean | null; // Accepte null pendant le chargement
  children: React.ReactNode;
}

export default function ProtectedRoute({ unlocked, children }: ProtectedRouteProps) {
  // Si on est encore en train de charger (null), on ne redirige pas tout de suite
  if (unlocked === null) {
    return <div style={{ color: 'white', textAlign: 'center', marginTop: '40vh' }}>Chargement...</div>;
  }

  if (!unlocked) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
}