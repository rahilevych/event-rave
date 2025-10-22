// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import { ProtectedRoute } from '../ProtectedRoute';
// import { useAuth } from '../../../shared/hooks/useAuth';

// jest.mock('../../../shared/hooks/useAuth', () => ({
//   useAuth: jest.fn(),
// }));
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   Navigate: ({ to }: { to: string }) => <div>Redirected to {to}</div>,
// }));

// describe('ProtectedRoute', () => {
//   test('redirects to login if user is not authenticated', () => {
//     (useAuth as jest.Mock).mockReturnValue({ isAuthenticated: false });

//     render(
//       <MemoryRouter initialEntries={['/profile']}>
//         <ProtectedRoute>
//           <div>Protected Content</div>
//         </ProtectedRoute>
//       </MemoryRouter>,
//     );

//     expect(screen.getByText('Redirected to login')).toBeInTheDocument();
//     expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
//   });

//   test('renders children if user is authenticated', () => {
//     (useAuth as jest.Mock).mockReturnValue({ isAuthenticated: true });

//     render(
//       <MemoryRouter initialEntries={['/profile']}>
//         <ProtectedRoute>
//           <div>Protected Content</div>
//         </ProtectedRoute>
//       </MemoryRouter>,
//     );

//     expect(screen.getByText('Protected Content')).toBeInTheDocument();
//   });
// });
