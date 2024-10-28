// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders =[];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  // TODO: buatlah variabel yang menampung data order baru
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
// TODO: buatlah variabel yang menampung data order baru
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items ,
    totalPrice,
    status: 'Menunggu Konfirmasi',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  // TODO: tambahkan order baru ke dalam array orders
  orders.push(newOrder);
  return newOrder;
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  // TODO: cari order berdasarkan id
  const order = orders.find((order) => order.id === orderId);
  // TODO: update status order
  if(order){
    order.status = status;
    order.updatedAt = new Date();
    return order;
  }
  return null;
  // TODO : Jika order tidak ditemukan 
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  // TODO: buatlah variabel yang menampung data total revenue
  let totalRevenue = 0;
  // TODO: hitunglah total revenue dari order yang berstatus Selesai
  // orders.forEach((order) => {
  //   if (order.status === 'Selesai') {
  //     totalRevenue += order.items.reduce((total, item) => total + item.price * (item.quantity || 1 ), 0);
  //   }
  // });
  orders.forEach((order) => {
    if (order.status === 'Selesai') {
      totalRevenue += order.items.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
    }
  });
  return totalRevenue;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  // TODO: cari order berdasarkan id
  const orderIndex = orders.findIndex((order) => order.id === id);
  // TODO: hapus order berdasarkan id
  orders.splice(orderIndex, 1);
  return true;
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
