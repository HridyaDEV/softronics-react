import React from 'react';

function LoginPage() {
  return (
    
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-xs">
          <h1 className="text-center text-xl font-bold mb-4">Login Page</h1>
          <form>
            <div className="mb-3">
              <label  className="block text-sm mb-1">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="border px-2 py-1 rounded w-full"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm mb-1">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="border px-2 py-1 rounded w-full"
              />
            </div>
            <button
              type="button"
              className="bg-green-800 text-white w-full py-2 rounded mt-4 hover:bg-green-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
  
  );
}

export default LoginPage;
