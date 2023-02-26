/*sessionStorage to save booking Data for this capstone project since I don't need to retrieve data for future reference.  Too lazy to clear localStorage*/
/*localStorage to save login info, and sign up info */

const saveData = (key, data) => {
   
    if (key === 'bookingData') {
        sessionStorage.setItem('bookingData', JSON.stringify(data));
    }
    if (key === 'loginData') {
        localStorage.setItem('loginData', JSON.stringify(data));
    }
    if (key === 'signupData') {
        localStorage.setItem('signupData', JSON.stringify(data));
    } 
}

export default saveData;