const analytics = {
  incrementLocalStorageParam: param => {
    console.log('his');
    let paramCount = localStorage.getItem(param);
    if (paramCount) {
      localStorage.setItem(param, parseInt(paramCount) + 1);
    } else {
      localStorage.setItem(param, 1);
    }
  }
};
export default analytics;
