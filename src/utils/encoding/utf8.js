import globalThis from '../global-this';

/**
 * TextEncoder instance.
 * @private
 * @type {TextEncoder|null}
 */
const ENCODER = globalThis.TextEncoder
	? new globalThis.TextEncoder('utf-8')
	: null;

/**
 * TextDecoder instance.
 * @private
 * @type {TextDecoder|null}
 */
const DECODER = globalThis.TextDecoder
	? new globalThis.TextDecoder('utf-8')
	: null;

/**
 * Converts an UTF-8 string to an ArrayBuffer.
 * @param {string} str String.
 * @returns {ArrayBuffer} ArrayBuffer.
 */
export const utf8ToBuf = (str) => {
	if (!ENCODER) {
		throw new Error('Encoding API not available');
	}

	return ENCODER.encode(str).buffer;
};

/**
 * Converts an ArrayBuffer to an UTF-8 string.
 * @param {ArrayBuffer} buf ArrayBuffer.
 * @returns {string} String.
 */
export const utf8FromBuf = (buf) => {
	if (!DECODER) {
		throw new Error('Encoding API not available');
	}

	return DECODER.decode(buf);
};
