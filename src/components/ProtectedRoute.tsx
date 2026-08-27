import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  unlocked: boolean;
  children: React.ReactNode;
}

export default function ProtectedRoute({ unlocked, children }: ProtectedRouteProps) {
  if (!unlocked) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}