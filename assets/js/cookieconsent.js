(function () {

  function defaultCookies() {
    console.log('default cookies');
    loadGA(true);
  };

  function enableCookies() {
    console.log('enabled cookies');
    loadGA();
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
      var type = this.options.type;
      if (type == 'opt-in') {
        disableCookies();
      }
      if (type == 'opt-out') {
        enableCookies();
      }
    }
  });

})();
