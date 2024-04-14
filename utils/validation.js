export const validateRegistrationData = (data) => {
    let errors = {};
  
    if (!data.username || data.username.trim() === '') {
      errors.username = 'Username is required';
    }
  
    if (!data.password || data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }  
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };
  
export const validateLoginData = (data) => {
    let errors = {};
  
    if (!data.username || data.username.trim() === '') {
      errors.username = 'Username is required';
    }
  
    if (!data.password || data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };
  