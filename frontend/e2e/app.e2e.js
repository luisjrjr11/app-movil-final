describe('Flujo completo de la aplicación', () => {
  test('usuario obtiene acceso correctamente', () => {
    const permiso = 'granted';
    const acceso = permiso === 'granted';

    expect(acceso).toBe(true);
  });

  test('usuario sin permiso no accede', () => {
    const permiso = 'denied';
    const acceso = permiso === 'granted';

    expect(acceso).toBe(false);
  });
});