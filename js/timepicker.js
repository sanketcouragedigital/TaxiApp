(function() {
    var elm = document.getElementById('foo'),
        df = document.createDocumentFragment();
    for (var i = 1; i <= 42; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.appendChild(document.createTextNode("option #" + i));
        df.appendChild(option);
    }
    elm.appendChild(df);
}());