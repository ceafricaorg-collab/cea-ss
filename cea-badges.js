var CEA_BADGES = (function () {

  function verified(size) {
    size = size || 'md';
    var w = size === 'sm' ? 60 : size === 'lg' ? 100 : 76;
    var h = Math.round(w * 1.1);
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 76 84" role="img" aria-label="CEA Verified">' +
        '<defs>' +
          '<linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">' +
            '<stop offset="0%" stop-color="#1B3A5C"/>' +
            '<stop offset="100%" stop-color="#0d2238"/>' +
          '</linearGradient>' +
          '<filter id="shieldShadow" x="-10%" y="-10%" width="120%" height="130%">' +
            '<feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.28"/>' +
          '</filter>' +
        '</defs>' +
        '<path d="M38 2 L70 14 L70 46 C70 64 38 82 38 82 C38 82 6 64 6 46 L6 14 Z" fill="url(#shieldGrad)" filter="url(#shieldShadow)"/>' +
        '<path d="M38 2 L70 14 L70 46 C70 64 38 82 38 82 C38 82 6 64 6 46 L6 14 Z" fill="none" stroke="#C8A84B" stroke-width="1.5"/>' +
        '<path d="M38 10 L63 20 L63 46 C63 60 38 74 38 74 C38 74 13 60 13 46 L13 20 Z" fill="none" stroke="rgba(200,168,75,0.35)" stroke-width="0.75"/>' +
        '<text x="22" y="24" text-anchor="middle" font-size="7" fill="rgba(200,168,75,0.6)">✦</text>' +
        '<text x="54" y="24" text-anchor="middle" font-size="7" fill="rgba(200,168,75,0.6)">✦</text>' +
        '<text x="38" y="40" text-anchor="middle" font-family="Georgia,\'Times New Roman\',serif" font-size="16" font-weight="900" fill="#C8A84B" letter-spacing="2">CEA</text>' +
        '<polyline points="25,50 33,58 51,42" fill="none" stroke="#C8A84B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<text x="38" y="71" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" font-weight="700" fill="rgba(255,255,255,0.85)" letter-spacing="1.8">VERIFIED</text>' +
      '</svg>'
    );
  }

  function titleChecked() {
    return (
      '<span style="display:inline-flex;align-items:center;gap:5px;background:rgba(46,107,58,0.1);' +
      'border:1px solid rgba(46,107,58,0.3);border-radius:999px;padding:4px 10px;' +
      'font-size:11px;font-weight:700;color:#2E6B3A;letter-spacing:0.03em;white-space:nowrap;">' +
        '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></svg>' +
        'Title Checked' +
      '</span>'
    );
  }

  function escrowProtected() {
    return (
      '<span style="display:inline-flex;align-items:center;gap:5px;background:rgba(27,58,92,0.08);' +
      'border:1px solid rgba(27,58,92,0.22);border-radius:999px;padding:4px 10px;' +
      'font-size:11px;font-weight:700;color:#1B3A5C;letter-spacing:0.03em;white-space:nowrap;">' +
        '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>' +
        'Escrow Protected' +
      '</span>'
    );
  }

  function gpsVerified() {
    return (
      '<span style="display:inline-flex;align-items:center;gap:5px;background:rgba(30,100,160,0.08);' +
      'border:1px solid rgba(30,100,160,0.2);border-radius:999px;padding:4px 10px;' +
      'font-size:11px;font-weight:700;color:#1e64a0;letter-spacing:0.03em;white-space:nowrap;">' +
        '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
        'GPS Verified' +
      '</span>'
    );
  }

  function badgeRow() {
    return (
      '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;">' +
        titleChecked() +
        escrowProtected() +
        gpsVerified() +
      '</div>'
    );
  }

  return { verified: verified, titleChecked: titleChecked, escrowProtected: escrowProtected, gpsVerified: gpsVerified, badgeRow: badgeRow };
})();
