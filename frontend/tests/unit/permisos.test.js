import { validarPermiso } from '../../src/utils/permisos';

test('permiso concedido', () => {
  expect(validarPermiso('granted')).toBe(true);
});

test('permiso denegado', () => {
  expect(validarPermiso('denied')).toBe(false);
});

test('permiso desconocido', () => {
  expect(validarPermiso('otro')).toBe(null);
});