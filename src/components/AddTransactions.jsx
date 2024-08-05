import React from 'react'

function AddTransactions() {
  return (
    <form>
      <div>
        <input required type="text" placeholder="Enter id" />
      </div>
      <div>
        <input required type="date" placeholder="Enter date" />
      </div>
      <div>
        <input required type="text" placeholder="Enter description" />
      </div>
      <div>
        <input required type="text" placeholder="Enter category" />
      </div>
      <div>
        <input required type="text" placeholder="Enter amount" />
      </div>
      <div>
        <button>Submitt</button>
      </div>
    </form>
  );
}

export default AddTransactions
