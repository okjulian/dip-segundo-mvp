'use strict';

describe('Service: Dip', function () {

  // load the service's module
  beforeEach(module('anotableApp'));

  // instantiate service
  var Dip;

  beforeEach(inject(function (_Dip_) {
    Dip = _Dip_;
  }));

  it('deberia agregar nombre y codigo', function () {
    var nombre = 'Hola mundo';
    var codigo = '<div>Hola mundo</div>';
    var dip = new Dip(nombre, codigo);
    expect(dip.nombre).toBe(nombre);
    expect(dip.codigo).toBe(codigo);
  });

});