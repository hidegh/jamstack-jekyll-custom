(function () {

  function defaultCookies() {
    console.log('default cookies');

    // note: using anonymized IP
    if (typeof loadGA === 'function') loadGA(true);
  };

  function enableCookies() {
    console.log('enabled cookies');

    if (typeof loadGA === 'function') loadGA(false);
    if (typeof loadDisqus === 'function') loadDisqus();
  }

  function disableCookies() {
    console.log('disabled cookies');

    defaultCookies();
  }

  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#000"
      },
      "button": {
        "background": "#f1d600"
      }
    },
    "position": "bottom-right",
    "type": "opt-in",
    "content": {
      "message": "This website uses cookies to ensure you get the best experience here.",
      "href": "/cookies"
    },

    onInitialise: function (status) {
      console.log(`cc - onInitialise, status: ${status}`);

      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        enableCookies();
      }
      else if (type == 'opt-out' && !didConsent) {
        disableCookies();
      }
      else {
        defaultCookies();
      }
    },

    onStatusChange: function (status, chosenBefore) {
      console.log(`cc - onStatusChange, status: ${status}, chosenBefore: ${chosenBefore}`);

      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        enableCookies();
      }
      if (type == 'opt-out' && !didConsent) {
        disableCookies();
      }
    },

    onRevokeChoice: function () {
      // NOTE: this hook is called immediately after the revoke button is clicked and removea previous answers
      console.log(`cc - onRevokeChoice`);

      var type = this.options.type;
      if (type == 'opt-in') {
        disableCookies();

        // NOTE: we need to reload page, so that we get rid of the loaded GA / Disqus scripts!
        location.reload();
      }
      if (type == 'opt-out') {
        enableCookies();
      }
    },

    onPopupOpen: function() {
      console.log(`cc - onPopupOpen`);
    },

    onPopupClose: function() {
      console.log(`cc - onPopupClose`);
    }

  });

})();
