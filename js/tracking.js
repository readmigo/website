/**
 * Readmigo Website Traffic Source Tracking
 * - Parses UTM parameters from URL
 * - Classifies referrer sources
 * - Registers source properties with PostHog
 * - Tracks CTA download clicks with source attribution
 */
(function () {
  'use strict';

  // --- UTM Parsing ---
  var params = new URLSearchParams(window.location.search);
  var utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  var utm = {};
  var hasUtm = false;

  utmKeys.forEach(function (key) {
    var val = params.get(key);
    if (val) {
      utm[key] = val;
      hasUtm = true;
    }
  });

  // Persist UTM for the session (first touch wins)
  if (hasUtm) {
    try { sessionStorage.setItem('_rm_utm', JSON.stringify(utm)); } catch (e) {}
  } else {
    try {
      var stored = sessionStorage.getItem('_rm_utm');
      if (stored) utm = JSON.parse(stored);
    } catch (e) {}
  }

  // --- Referrer Classification ---
  var ref = document.referrer || '';
  var referrerType = 'direct';
  var referrerSource = '';

  if (ref) {
    try {
      var host = new URL(ref).hostname.replace('www.', '');
      if (/google\./i.test(host)) { referrerType = 'search'; referrerSource = 'google'; }
      else if (/bing\./i.test(host)) { referrerType = 'search'; referrerSource = 'bing'; }
      else if (/baidu\./i.test(host)) { referrerType = 'search'; referrerSource = 'baidu'; }
      else if (/yandex\./i.test(host)) { referrerType = 'search'; referrerSource = 'yandex'; }
      else if (/duckduckgo/i.test(host)) { referrerType = 'search'; referrerSource = 'duckduckgo'; }
      else if (/twitter|x\.com/i.test(host)) { referrerType = 'social'; referrerSource = 'twitter'; }
      else if (/facebook|fb\.com/i.test(host)) { referrerType = 'social'; referrerSource = 'facebook'; }
      else if (/reddit/i.test(host)) { referrerType = 'social'; referrerSource = 'reddit'; }
      else if (/linkedin/i.test(host)) { referrerType = 'social'; referrerSource = 'linkedin'; }
      else if (/t\.me|telegram/i.test(host)) { referrerType = 'social'; referrerSource = 'telegram'; }
      else if (/instagram/i.test(host)) { referrerType = 'social'; referrerSource = 'instagram'; }
      else if (/youtube/i.test(host)) { referrerType = 'social'; referrerSource = 'youtube'; }
      else if (/github/i.test(host)) { referrerType = 'referral'; referrerSource = 'github'; }
      else if (/producthunt/i.test(host)) { referrerType = 'referral'; referrerSource = 'producthunt'; }
      else if (/news\.ycombinator/i.test(host)) { referrerType = 'referral'; referrerSource = 'hackernews'; }
      else if (/readmigo/i.test(host)) { referrerType = 'internal'; referrerSource = host; }
      else { referrerType = 'referral'; referrerSource = host; }
    } catch (e) {}
  }

  // --- Register with PostHog ---
  if (window.posthog) {
    var props = {
      referrer_type: referrerType,
      referrer_source: referrerSource || 'direct',
      landing_page: window.location.pathname
    };

    // Merge UTM params
    utmKeys.forEach(function (key) {
      if (utm[key]) props[key] = utm[key];
    });

    // Use register_once so first-touch values are preserved within a session
    posthog.register(props);
  }

  // --- CTA Click Tracking ---
  function trackDownloadClick(platform, element) {
    if (!window.posthog) return;
    posthog.capture('download_click', {
      platform: platform,
      page: window.location.pathname,
      button_location: element.closest('footer') ? 'footer' : element.closest('#download') ? 'hero' : 'page',
      utm_source: utm.utm_source || '',
      utm_medium: utm.utm_medium || '',
      utm_campaign: utm.utm_campaign || '',
      referrer_type: referrerType,
      referrer_source: referrerSource || 'direct'
    });
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href') || '';

    if (/apps\.apple\.com/i.test(href)) {
      trackDownloadClick('ios', link);
    } else if (/play\.google\.com/i.test(href)) {
      trackDownloadClick('android', link);
    } else if (/web\.readmigo\.app/i.test(href)) {
      trackDownloadClick('web', link);
    }
  });
})();
