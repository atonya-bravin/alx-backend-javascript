export default function createInt8TypedArray(array_length, position, value) {
  const buffer = new ArrayBuffer(array_length);
  const int8_array = new Int8Array(buffer);

  if (position < 0 || position >= array_length) {
    throw new Error('Position outside range');
  }

  int8_array[position] = value;

  return new DataView(buffer);
}
