// Navigation
map('<Ctrl-a>', '0');
unmap('0');
map('<Alt-v>', 'e');
unmap('e');
map('<Ctrl-v>', 'd');
map('<Alt-<>', 'gg');
unmap('gg');
map('<Alt->>', 'G');
unmap('G');
map('<Ctrl-n>', 'j');
map('<Ctrl-p>', 'k');
map('<Ctrl-f>', 'l');
map('<Ctrl-b>', 'h');
map('<Ctrl-e>', '$');
unmap('$');

// Tabs
map('h', 'E');
map('l', 'R');

// History
map('B', 'S');
unmap('S');
map('F', 'D');
unmap('D');

// Reload
map('R', 'r');
unmap('r');

// Disable insert mode binding because it's handled by Gtk+
iunmap('<Ctrl-e>');
iunmap('<Ctrl-f>');
iunmap('<Ctrl-u>');
iunmap('<Alt-b>');
iunmap('<Alt-f>');
iunmap('<Alt-d>');
iunmap('<Alt-w>');

// visual mode navigation
vmap('<Ctrl-f>', 'l');
vmap('<Ctrl-b>', 'h');
vmap('<Ctrl-n>', 'j');
vmap('<Ctrl-p>', 'k');
vmap('<Ctrl-e>', '$');
vmap('<Ctrl-a>', '0');
vmap('<Alt-f>', 'w');
vmap('<Alt-b>', 'b');
vmap('<Alt->>', 'G');
vmap('<Alt-<>', 'gg');
vmap('<Ctrl-l>', 'zz');

settings.smoothScroll = false;

// Search settings
addSearchAliasX('D', 'ddgH', 'https://duckduckgo.com/html/?q=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});
settings.defaultSearchEngine = 'D';

// Hints settings
Hints.characters = "asdfghjkl";
Hints.scrollKeys = "";
settings.hintAlign = "left";

(function() {
    /// Add hooks to Hints so that we can modify Hints.characters ad-hoc.
    var orig = {
        create: Hints.create,
        exit: Hints.exit
    };
    var default_characters = null;
    Hints.create = function(_x, _y, attrs) {
        if(attrs !== null && typeof(attrs) === "object" && ("debugitos_characters" in attrs)) {
            default_characters = Hints.characters;
            Hints.characters = attrs["debugitos_characters"];
        }
        orig.create.apply(this, arguments);
    };
    Hints.exit = function() {
        if(default_characters !== null) {
            Hints.characters = default_characters;
            default_characters = null;
        }
        orig.exit.apply(this, arguments);
    };
}());

(function() {
    var nums = "456";
    mapkey('^f', "#1Open a link (for numpad)", function () {
        Hints.create("", Hints.dispatchMouseClick, {debugitos_characters: nums});
    });
    mapkey('^C', '#1Open a link in non-active new tab (for numpad)', function() {
        Hints.create("", Hints.dispatchMouseClick, {tabbed: true, active: false, debugitos_characters: nums});
    });
}());

// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult>ul>li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
// click `Save` button to make above settings to take effect.
