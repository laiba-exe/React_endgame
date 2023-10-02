import React, { useState } from 'react';

function DeleteUser({ onDelete, id }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);

    onDelete(id)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error deleting user:', error);
      });
  };

  return (
    <button
      className="btn btn-danger"
      type="button"
      onClick={handleDelete}
      disabled={loading}
    >
      {loading ? 'Deleting...' : 'Delete'}
    </button>
  );
}

export default DeleteUser;
