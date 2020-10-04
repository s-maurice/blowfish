const Blowfish = require('../dist/blowfish.js');
const assert = require('assert');
const crypto = require('crypto');
const Base64 = require('js-base64');

describe('cfb', () => {
    it('encode base64 cfb1', () => {
        const key = '123';
        const text = '1601824968\tA001\tIN\t00111DB000E5\t\t#RDOOR MOBILE Location: {"accuracy":603,"fromMockProvider":false,"latitude":37.4220115,"longitude":-122.0839784,"timestamp":1601824551454}#\tMOBILE';

        const bf = new Blowfish(key, Blowfish.MODE.CFB, Blowfish.PADDING.NULL);
        bf.setIv(new Uint8Array(8));
        const encoded = bf.encode(text);
        const bufferEncoded = Buffer.from(encoded).toString('base64');

        const nodeCipher = crypto.createCipheriv('bf-cfb', key, new Uint8Array(8));
        const nodeEncoded = nodeCipher.update(text, 'ascii', 'base64') + nodeCipher.final('base64');

        console.log(bufferEncoded);
        console.log(Base64.fromUint8Array(encoded));
        console.log(nodeEncoded);

        assert.deepStrictEqual(nodeEncoded, bufferEncoded);
        assert.deepStrictEqual(nodeEncoded, Base64.fromUint8Array(encoded));
        assert.deepStrictEqual(bufferEncoded, Base64.fromUint8Array(encoded));
    });
    it('encode base64 cfb2', () => {
        const key = 'test';
        const text = '1596006945\\tA001\\tIN\\t00111DB000E5\\t00111DB000E5\\t#SMC(SN:CA55619A)# \\tSMC(SN:CA55619A)';

        const bf = new Blowfish(key, Blowfish.MODE.CFB, Blowfish.PADDING.NULL);
        bf.setIv(new Uint8Array(8));
        const encoded = bf.encode(text);
        const bufferEncoded = Buffer.from(encoded).toString('base64');

        const nodeCipher = crypto.createCipheriv('bf-cfb', key, new Uint8Array(8));
        const nodeEncoded = nodeCipher.update(text, 'ascii', 'base64') + nodeCipher.final('base64');

        console.log(bufferEncoded);
        console.log(Base64.fromUint8Array(encoded));
        console.log(nodeEncoded);

        assert.deepStrictEqual(nodeEncoded, bufferEncoded);
        assert.deepStrictEqual(nodeEncoded, Base64.fromUint8Array(encoded));
        assert.deepStrictEqual(bufferEncoded, Base64.fromUint8Array(encoded));
    });
    it('encode base64 cfb random multiple', () => {
        for (let i = 0; i <= 20; i++) {
            const key = crypto.randomBytes(20).toString('hex');
            const text = crypto.randomBytes(20).toString('hex');

            const bf = new Blowfish(key, Blowfish.MODE.CFB, Blowfish.PADDING.NULL);
            bf.setIv(new Uint8Array(8));
            const encoded = bf.encode(text);
            const bufferEncoded = Buffer.from(encoded).toString('base64');

            const nodeCipher = crypto.createCipheriv('bf-cfb', key, new Uint8Array(8));
            const nodeEncoded = nodeCipher.update(text, 'ascii', 'base64') + nodeCipher.final('base64');

            console.log('------');
            console.log(bufferEncoded);
            console.log(Base64.fromUint8Array(encoded));
            console.log(nodeEncoded);
            console.log('------');

            assert.deepStrictEqual(nodeEncoded, bufferEncoded);
            assert.deepStrictEqual(nodeEncoded, Base64.fromUint8Array(encoded));
            assert.deepStrictEqual(bufferEncoded, Base64.fromUint8Array(encoded));
        }
    });
});
