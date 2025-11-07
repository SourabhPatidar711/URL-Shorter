import React from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { logoutUser } from '../api/user.api';
import { logout } from '../store/slice/authSlice';

const NavBar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      dispatch(logout());
      navigate({ to: '/' });
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          {/* Placeholder for Logo */}
          <svg
            className="h-8 w-8 text-purple-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.555a4 4 0 005.656-5.656l4-4a4 4 0 00-5.656-5.656l-1.102 1.101"
            />
          </svg>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            URL Shortener
          </span>
        </Link>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            disabled={mutation.isPending}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 disabled:bg-red-400"
          >
            {mutation.isPending ? 'Logging out...' : 'Logout'}
          </button>
        ) : (
          <Link
            to="/auth"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;