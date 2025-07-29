export function getTimeEmoji(hours: number): string {
    if (hours >= 6 && hours < 12) {
      return "🌅"; // Sunrise/morning
    } else if (hours >= 12 && hours < 17) {
      return "☀️"; // Daytime
    } else if (hours >= 17 && hours < 20) {
      return "🌆"; // Sunset/evening
    } else if (hours >= 20 && hours < 23) {
      return "🌙"; // Night
    } else {
      return "🌒"; // Late night/early morning
    }
}

export function getTimezoneAbbr(): string {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    
    const offsetHours = -offset / 60;
    const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Check for specific timezone names first
    if (timezoneName.includes('America/Los_Angeles') || timezoneName.includes('America/Vancouver')) {
      return now.getTimezoneOffset() === 480 ? 'PST' : 'PDT';
    }
    if (timezoneName.includes('America/New_York')) {
      return now.getTimezoneOffset() === 300 ? 'EST' : 'EDT';
    }
    if (timezoneName.includes('America/Chicago')) {
      return now.getTimezoneOffset() === 360 ? 'CST' : 'CDT';
    }
    if (timezoneName.includes('America/Denver') || timezoneName.includes('America/Phoenix')) {
      return now.getTimezoneOffset() === 420 ? 'MST' : 'MDT';
    }
    
    // Fallback to offset-based detection
    switch (offsetHours) {
      case -8: return 'PST';
      case -7: return 'PDT';
      case -6: return 'CST';
      case -5: return 'EST';
      case -4: return 'EDT';
      case -3: return 'ADT';
      case -2: return 'BRST';
      case -1: return 'AZOT';
      case 0: return 'UTC';
      case 1: return 'CET';
      case 2: return 'EET';
      case 3: return 'MSK';
      case 4: return 'GST';
      case 5: return 'IST';
      case 6: return 'BST';
      case 7: return 'ICT';
      case 8: return 'CST';
      case 9: return 'JST';
      case 10: return 'AEST';
      case 11: return 'AEDT';
      case 12: return 'NZST';
      default: return 'UTC';
    }
}