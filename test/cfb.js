const Blowfish = require('../dist/blowfish.js');
const assert = require('assert');
const crypto = require('crypto');

const defaultText = 'testetststetststetsetst';
const defaultIv = Buffer.alloc(8);
const key = 'test';

describe('cfb', () => {
    it('encode base64 cfb', () => {
        const bf = new Blowfish(key, Blowfish.MODE.CFB, Blowfish.PADDING.NULL);
        bf.setIv(defaultIv);
        let encoded = bf.encode(defaultText);
        // base 64 conversion
        encoded = Buffer.from(encoded).toString('base64');
        console.log(encoded);

        const nodeCipher = crypto.createCipheriv('bf-cfb', key, defaultIv);
        const nodeEncoded = nodeCipher.update(defaultText, 'ascii', 'base64') + nodeCipher.final('base64');
        console.log(nodeEncoded);

        assert.deepStrictEqual(nodeEncoded, encoded);
    });
    it('encode base64 cfb', () => {
        const bf = new Blowfish(key, Blowfish.MODE.CFB, Blowfish.PADDING.NULL);
        bf.setIv(defaultIv);
        let encoded = bf.encode(defaultText);
        // base 64 conversion
        encoded = Buffer.from(encoded).toString('base64');
        console.log(encoded);

        const nodeCipher = crypto.createCipheriv('bf-cfb', key, defaultIv);
        const nodeEncoded = nodeCipher.update(defaultText, 'ascii', 'base64') + nodeCipher.final('base64');
        console.log(nodeEncoded);

        assert.deepStrictEqual(nodeEncoded, encoded);
    });
});
