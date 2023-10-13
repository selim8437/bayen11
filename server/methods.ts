function isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      return false;
    }
  
    const sqlInjectionPatterns = [
      /SELECT\s+/i,
      /INSERT\s+/i,
      /UPDATE\s+/i,
      /DELETE\s+/i,
      /DROP\s+/i,
      /UNION\s+/i,
      /--/i,
    ];
  
    for (const pattern of sqlInjectionPatterns) {
      if (pattern.test(email)) {
        return false;
      }
    }
  
   
  
    return true;
  }
  function isValidPassword(password: string): boolean {
    const sqlInjectionPatterns = [
      /SELECT\s+/i,
      /INSERT\s+/i,
      /UPDATE\s+/i,
      /DELETE\s+/i,
      /DROP\s+/i,
      /UNION\s+/i,
      /--/i,
    ];
  
    for (const pattern of sqlInjectionPatterns) {
      if (pattern.test(password)) {
        return false;
      }
    }
  
    if (password.length < 8) {
      return false; 
    }
  
   
  
    return true;
  }
  
  