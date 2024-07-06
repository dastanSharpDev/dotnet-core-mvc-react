import React, { FC } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { UnauthorisedLayout } from './layouts/UnauthorisedLayout/UnauthorisedLayout';
import { useTypedSelector } from './hooks/useTypedSelector';
import { RecoveryPage } from './modules/auth/pages/RecoveryPage/RecoveryPage';
import { SignUpPage } from './modules/auth/pages/SignUpPage/SignUpPage';
import { LoginPage } from './modules/auth/pages/LoginPage/LoginPage';
import { InstitutionsPage } from './modules/institutions/pages/InstitutionsPage/InstitutionsPage';
import { TeachersPage } from './modules/teachers/pages/TeachersPage/TeachersPage';
import { GuardiansPage } from './modules/guardians/pages/GuardiansPage/GuardiansPage';
import { StudentsPage } from './modules/students/pages/StudentsPage/StudentsPage';
import { FinancesPage } from './modules/finances/pages/FinancesPage/FinancesPage';
import { ResultsPage } from './modules/results/pages/ResultsPage/ResultsPage';
import { SubscriptionsPage } from './modules/subscriptions/pages/SubscriptionsPage/SubscriptionsPage';
import { AccountPage } from './modules/account/pages/AccountPage/AccountPage';


const AppRoutes: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { token } = useTypedSelector((state) => state.auth)

  if (!token) {
    return (
      <Routes>
        <Route element={<UnauthorisedLayout />}>
          <Route path="/recovery" element={<RecoveryPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<LoginPage />} />
        </Route>
      </Routes>
    )
  }

  if (location.pathname === '/') {
    navigate('/account')
  }

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/institutions' element={<InstitutionsPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path='/guardians' element={<GuardiansPage />} />
        <Route path='/students' element={<StudentsPage />} />
        <Route path='/finances' element={<FinancesPage />} />
        <Route path='/results' element={<ResultsPage />} />
        <Route path='/subscriptions' element={<SubscriptionsPage />} />
        <Route path='/account' element={<AccountPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/account" replace />} />
    </Routes>
  )
}

export default AppRoutes;
