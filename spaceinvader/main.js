var sini = {}; document.title = sini.title = "sinietris 0.0.5"; sini.load = function () {
    sini.debug = false;
    sini.context = sini.debug ? window : {};
    var i = 0;
    sini.moduleCodeList = [];
    
    sini.pushModuleCode = function (module) {
      sini.moduleCodeList.push(module);
      return module;
    }
    
    function loadNextScript () {
      var script = document.createElement("script");
      script.src = sini.moduleFilenames[i];
      if (++i < sini.moduleFilenames.length) {
        script.onload = loadNextScript;
      }
      document.body.appendChild(script);
    }
    
    // EDITIING
    sini.moduleNames = [
  "fenetre", "loader", "ennemi","keyboard", "vaisseau", "projectile", "ennemiBar","allBars", "game"
    ];
    sini.moduleFilenames = sini.moduleNames.map(x => `${x}.js`);
    loadNextScript();
  }; // End of sini.load
  
  sini.load();