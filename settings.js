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

map('<Ctrl-z><Ctrl-p>', 'E');
unmap('E');

settings.smoothScroll = false;

// set theme
settings.theme = `
.sk_theme {
    background: #000;
    color: #fff;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d9dce0;
}
.sk_theme .url {
    color: #2173c5;
}
.sk_theme .annotation {
    color: #38f;
}
.sk_theme .omnibar_highlight {
    color: #fbd60a;
}
.sk_theme ul>li:nth-child(odd) {
    background: #1e211d;
}
.sk_theme ul>li.focused {
    background: #4ec10d;
}`;
// click `Save` button to make above settings to take effect.
