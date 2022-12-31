
const troncos = [
  'madera',
  'madera',
  'fuego',
  'fuego',
  'tierra',
  'tierra',
  'metal',
  'metal',
  'agua',
  'agua',
]

const ramas = [
  'rata',
  'vaca',
  'tigre',
  'conejo',
  'dragón',
  'serpiente',
  'caballo',
  'oveja',
  'mono',
  'gallo',
  'perro',
  'cerdo',
]

const anioInicioAnioChino = 604;

export function calcularAnioChino(anio) {
  if(anio < anioInicioAnioChino) {
    throw new Error('El caledario chino comienza desde 604');
  }
  const anioChino = (anio - (anioInicioAnioChino % 60)) % 60;
  const troncoAnio = troncos.at(anioChino % troncos.length);
  const ramaAnio = ramas.at(anioChino % ramas.length);

  return [troncoAnio, ramaAnio];
}