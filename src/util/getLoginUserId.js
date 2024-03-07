const currentUserId = () => {
  return JSON.parse(localStorage.getItem('pocketbase_auth'))?.model.id;
};

export default currentUserId;
