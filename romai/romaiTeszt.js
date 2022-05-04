QUnit.module('FizBuz', function () {
    QUnit.test('A rómaiszám függvény létezik e', function (assert) {
        assert.ok(tizig, "létezik a tizig függvény");
    });
    /*QUnit.test('n=0', function (assert) {
        assert.equal(tizig(0), "Kérlek 0-nál nagyobb számot adj meg!");
    });*/
    QUnit.test('n=1', function (assert) {
        assert.equal(tizig(1), "I");
    });
    QUnit.test('n=2', function (assert) {
        assert.equal(tizig(2), "II");
    });
    QUnit.test('n=3', function (assert) {
        assert.equal(tizig(3), "III");
    });
    QUnit.test('n=4', function (assert) {
        assert.equal(tizig(4), "IV");
    });
    QUnit.test('n=5', function (assert) {
        assert.equal(tizig(5), "V");
    });
    QUnit.test('n=6', function (assert) {
        assert.equal(tizig(6), "VI");
    });
    QUnit.test('n=7', function (assert) {
        assert.equal(tizig(7), "VII");
    });
    QUnit.test('n=8', function (assert) {
        assert.equal(tizig(8), "VIII");
    });
    QUnit.test('n=9', function (assert) {
        assert.equal(tizig(9), "IX");
    });
    QUnit.test('n=10', function (assert) {
        assert.equal(tizig(10), "X");
    });
    QUnit.test('n=11', function (assert) {
        assert.equal(szazig(11), "1");
    });
    QUnit.test('n=5, romai', function (assert) {
        assert.equal(romai(5), "V");
    });

});